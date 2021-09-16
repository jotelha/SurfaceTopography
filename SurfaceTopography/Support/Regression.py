#
# Copyright 2018, 2020-2021 Lars Pastewka
#           2019 Antoine Sanner
#
# ### MIT license
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#

"""
Functions for regression of noisy data and resampling/averaging from one grid
to another.
"""

import numpy as np


def make_grid(collocation, min_value, max_value, nb_points=None, nb_points_per_decade=5):
    """
    Create collocation points.

    Parameters
    ----------
    collocation : {'log', 'quadratic', 'linear', array_like}
        Resampling grid. Specifying 'log' yields collocation points
        equally spaced on a log scale, 'quadratic' yields bins with
        similar number of data points and 'linear' yields linear bins.
        Alternatively, it is possible to explicitly specify the bin edges.
        If bin edges are explicitly specified, then the other arguments
        to this function are ignored.
    min_value : float
        Minimum value. Note that for log-spaced collocation points, this
        is the first value - the leftmost bin edge with always be zero.
    max_value : float
        Maximum value.
    nb_points : int, optional
        Number of bins for averaging. Bins are automatically determined if set
        to None. (Default: None)
    nb_points_per_decade : int, optional
        Number of points per decade for log-spaced collocation points.
        (Default: None)

    Returns
    -------
    collocation_points : np.ndarray
        List of collocation points.
    bin_edges : np.ndarray
        List of bins edges; collocations points are located within the
        respective bin. This array contains one more data point than
        the `collocation_points` array.
    """
    if collocation == 'log':
        # Power law -> equally spaced on a log-log plot
        if nb_points is None:
            # The size of the first bin should be equal to min_radius,
            # which is the (minimal) size of a grid point
            # i.e. min_radius = np.exp(np.log(min_radius) + dl) - min_radius
            # => dl = np.log(2)
            nb_points = int(np.ceil((np.log10(max_value) - np.log10(min_value) + 1) * nb_points_per_decade)) + 1
        bin_edges = np.linspace(np.log10(min_value), np.log10(max_value), nb_points - 1)
        collocation_points = np.append([0], 10 ** ((bin_edges[1:] + bin_edges[:-1]) / 2))
        bin_edges = np.append([0], 10 ** bin_edges)
    elif collocation == 'quadratic':
        # Quadratic -> similar statistics for each data point on a 2D radial grid
        if nb_points is None:
            raise ValueError("Please specify number of bins for 'quadratic' bins.")
        bin_edges = np.sqrt(np.linspace(min_value ** 2, max_value ** 2, nb_points + 1))
        collocation_points = (bin_edges[1:] + bin_edges[:-1]) / 2
    elif collocation == 'linear':
        # Linear
        if nb_points is None:
            raise ValueError("Please specify number of bins for 'linear' bins.")
        bin_edges = np.linspace(min_value, max_value, nb_points + 1)
        collocation_points = (bin_edges[1:] + bin_edges[:-1]) / 2
    else:
        bin_edges = collocation
        collocation_points = (bin_edges[1:] + bin_edges[:-1]) / 2
    return collocation_points, bin_edges


def bin_average(bin_edges, x, values):
    """
    Average values over bins.

    Parameters
    ----------
    bin_edges : array_like
        Edges of bins.
    x : array_like
        Collocation points for `values` array.
    values : array_like
        Function values/variates.

    Returns
    -------
    collocation_points : np.ndarray
        Collocation points, resampled as average over input `x`.
    number_of_data_points : np.ndarray
        Number of data points per bin.
    resampled_values : np.ndarray
        Resampled/averaged values.
    """
    # Find bin index
    bin_index = np.searchsorted(bin_edges, x)

    # Compute averages within bins
    number_of_data_points = np.bincount(bin_index, minlength=len(bin_edges) + 1)
    number_of_data_points1 = np.where(number_of_data_points == 0, np.ones_like(number_of_data_points),
                                      number_of_data_points)
    resampled_values = np.bincount(bin_index, weights=values, minlength=len(bin_edges) + 1) / number_of_data_points1

    # Resample collocation points as average of the distances in each bin
    collocation_points = np.bincount(bin_index, weights=x, minlength=len(bin_edges) + 1) / number_of_data_points1

    # We discard the final element as it contains data points outside our binned region
    return collocation_points[1:-1], number_of_data_points[1:-1], resampled_values[1:-1]


def gaussian_kernel(x1, x2, length_scale=1, signal_variance=1):
    return signal_variance*np.exp(-(x1-x2)**2 / (2*length_scale**2))


def gp_regression(output_x, x, values, kernel=gaussian_kernel, noise_variance=0):
    """
    Gaussian process regression for resampling a simple function.

    Parameters
    ----------
    output_x : array_like
        Collocation points for resampled values.
    x : array_like
        Collocation points for `values` array.
    values : array_like
        Function values/variates.

    Returns
    -------
    resampled_values : np.ndarray
        Resampled/averaged values.
    """
    # Covariance between observations
    obs_cov = kernel(x.reshape(-1, 1), x.reshape(1, -1))

    # Add noise to observation covariance matrix
    obs_cov += noise_variance * np.identity(len(x))

    # Compute kernel coefficients
    coeff = np.linalg.solve(obs_cov, values)

    # Covariance between test outputs
    test_cov = kernel(output_x.reshape(-1, 1), output_x.reshape(1, -1))

    # Covariance between observation and test outputs
    obs_test_cov = kernel(x.reshape(-1, 1), output_x.reshape(1, -1))

    # Compute predictive mean
    pred_mean = coeff.dot(obs_test_cov)

    # Compute predictive covariance
    pred_cov = test_cov - obs_test_cov.T.dot(np.linalg.solve(obs_cov, obs_test_cov))

    # Return mean and variance
    return pred_mean, pred_cov.diagonal()


def resample(x, values, collocation='log', nb_points=None, min_value=None, max_value=None, nb_points_per_decade=5,
             method='bin-average'):
    """
    Resample a noisy 2D data set onto a different grid.

    Parameters
    ----------
    x : array_like
        Evaluation points.
    values : array_like
        Function values.
    collocation : {'log', 'quadratic', 'linear', array_like}, optional
        Resampling grid. Specifying 'log' yields collocation points
        equally spaced on a log scale, 'quadratic' yields bins with
        similar number of data points and 'linear' yields linear bins.
        Alternatively, it is possible to explicitly specify the bin edges.
        If bin_edges are explicitly specified, then `rmax` and `nbins` is
        ignored. (Default: 'log')
    nb_points : int, optional
        Number of bins for averaging. Bins are automatically determined if set
        to None. (Default: None)
    min_value : float, optional
        Minimum value, is automatically determined from the range of the data
        if not provided. (Default: None)
    max_value : float, optional
        Maximum value, is automatically determined from the range of the data
        if not provided. (Default: None)
    nb_points_per_decade : int, optional
        Number of points per decade for log-spaced collocation points.
        (Default: None)
    method : str, optional
        Method can be 'bin-average' for simple bin averaging and
        'gaussian-process' for Gaussian process regression.
        (Default: 'bin-average')

    Returns
    -------
    collocation_points : np.ndarray
        Points where the data has been collected.
    bin_edges : np.ndarray
        Bin edges.
    number_of_data_points : np.ndarray
        Number of data points per radial bin.
    resampled_values : np.ndarray
        Resampled values.
    """
    # pylint: disable=invalid-name
    if max_value is None:
        max_value = np.max(x)
    if min_value is None:
        min_value = np.min(x)

    collocation_points, bin_edges = make_grid(collocation, min_value, max_value, nb_points=nb_points,
                                              nb_points_per_decade=nb_points_per_decade)

    if method == 'bin-average':
        collocation_points, number_of_data_points, resampled_values = bin_average(bin_edges, x, values)
        return collocation_points, bin_edges, resampled_values, number_of_data_points
    elif method == 'gaussian-process':
        resampled_values, resampled_variance = gp_regression(collocation_points, x, values)
        return collocation_points, bin_edges, resampled_values, resampled_variance


def resample_radial(data, physical_sizes=None, collocation='log', nb_points=None, max_radius=None,
                    nb_points_per_decade=5, full=True):
    """
    Compute radial average of quantities reported on a 2D grid and collect
    results of collocation points.

    Parameters
    ----------
    data : array_like
        2D-array of values to be averaged.
    physical_sizes : (float, float), optional
        Physical size of the 2D grid. (Default: Size is equal to number of
        grid points.)
    collocation : {'log', 'quadratic', 'linear', array_like}, optional
        Resampling grid. Specifying 'log' yields collocation points
        equally spaced on a log scale, 'quadratic' yields bins with
        similar number of data points and 'linear' yields linear bins.
        Alternatively, it is possible to explicitly specify the bin edges.
        If bin_edges are explicitly specified, then `rmax` and `nbins` is
        ignored. (Default: 'log')
    nb_points : int, optional
        Number of bins for averaging. Bins are automatically determined if set
        to None. (Default: None)
    max_radius : float, optional
        Maximum radius, is automatically determined from the range of the data
        if not provided. (Default: None)
    nb_points_per_decade : int, optional
        Number of points per decade for log-spaced collocation points.
        (Default: None)
    full : bool, optional
        Number of quadrants contained in data.
        True: Full radial average from 0 to 2*pi.
        False: Only the one quarter of the full circle is present. Radial
        average from 0 to pi/2.
        (Default: True)

    Returns
    -------
    collocation_points : np.ndarray
        Points where the data has been collected.
    bin_edges : np.ndarray
        Bin edges.
    number_of_data_points : np.ndarray
        Number of data points per radial bin.
    resampled_values : np.ndarray
        Resampled values.
    """
    # pylint: disable=invalid-name
    nx, ny = data.shape
    x = np.arange(nx)
    y = np.arange(ny)
    if full:
        x = np.where(x > nx // 2, nx - x, x)
        y = np.where(y > ny // 2, ny - y, y)

    min_radius = 1.0
    if physical_sizes is not None:
        sx, sy = physical_sizes
        x = sx / nx * x
        y = sy / ny * y
        min_radius = min(sx / nx, sy / ny)
    radius = np.sqrt((x ** 2).reshape(-1, 1) + (y ** 2).reshape(1, -1))
    if max_radius is None:
        max_radius = np.max(radius)

    collocation_points, bin_edges = make_grid(collocation, min_radius, max_radius, nb_points=nb_points,
                                              nb_points_per_decade=nb_points_per_decade)

    collocation_points, number_of_data_points, resampled_values = bin_average(bin_edges, np.ravel(radius),
                                                                              np.ravel(data))
    return collocation_points, bin_edges, resampled_values, number_of_data_points
