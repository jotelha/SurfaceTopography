#
# Copyright 2018-2021 Lars Pastewka
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
Height-difference autocorrelation functions

"""

import numpy as np

from SurfaceTopography.Support.Regression import resample_radial
from ..HeightContainer import UniformTopographyInterface


def autocorrelation_from_profile(self, direction=0, reliable=True):
    r"""
    Compute the one-dimensional height-difference autocorrelation function
    (ACF).

    For non-periodic surfaces the ACF at distance d is given by:

       .. math::
         :nowrap:

         \begin{equation}
         \begin{split}

          \text{ACF}(d) =& \sum_{i=0}^{n-d-1} \frac{1}{n-d} \frac{1}{2} \left( h_i - h_{i+d} \right)^2 \\

                        =& \frac{1}{2(n-d)} \sum_{i=0}^{n-d-1} \left( h_i^2 + h_{i+d}^2 \right)
                         - \frac{1}{n-d} \sum_{i=0}^{n-d-1} h_i h_{i+d}
          \end{split}
          \end{equation}


    Parameters
    ----------
    self : :obj:`SurfaceTopography` or :obj:`UniformLineScan`
        Container storing the uniform topography map
    direction : int
        Cartesian direction in which to compute the ACF
    reliable : bool, optional
        Only return data deemed reliable. (Default: True)

    Returns
    -------
    r : array
        Distances. (Units: length)
    A : array
        Autocorrelation function. (Units: length**2)
    """  # noqa: E501
    nx = self.nb_grid_pts[direction]
    sx = self.physical_sizes[direction]

    p = self.heights()
    if direction != 0:
        if direction == 1:
            p = p.T
        else:
            raise ValueError("Don't know how to handle direction "
                             "{}".format(direction))

    if self.is_periodic:
        # Compute height-height autocorrelation function from a convolution
        # using FFT. This is periodic by nature.
        surface_qy = np.fft.fft(p, axis=0)
        C_qy = abs(surface_qy) ** 2  # pylint: disable=invalid-name
        A_xy = np.fft.ifft(C_qy, axis=0).real / nx

        # Convert height-height autocorrelation to height-difference
        # autocorrelation:
        #     <(h(x) - h(x+d))^2>/2 = <h^2(x)> - <h(x)h(x+d)>
        A_xy = A_xy[0] - A_xy

        A = A_xy[:nx // 2]
        A[1:nx // 2] += A_xy[nx - 1:(nx + 1) // 2:-1]
        A /= 2

        r = sx * np.arange(nx // 2) / nx
    else:
        # Compute height-height autocorrelation function. We need to zero
        # pad the FFT for the nonperiodic case in order to separate images.
        surface_qy = np.fft.fft(p, n=2 * nx - 1, axis=0)
        C_qy = abs(surface_qy) ** 2  # pylint: disable=invalid-name
        A_xy = np.fft.ifft(C_qy, axis=0).real

        # Correction to turn height-height into height-difference
        # autocorrelation:
        #     <(h(x) - h(x+d))^2>_d/2 = <h^2(x)>_d - <h(x)h(x+d)>_d
        # but we need to take care about h_rms^2=<h^2(x)>, which in the
        # nonperiodic case needs to be computed only over a subsection of
        # the surface. This is because the average < >_d now depends on d,
        # which determines the number of data points that are actually
        # included into the computation of <h(x)h(x+d)>_d. h_rms^2 needs to
        # be computed over the same data points.
        p_sq = p ** 2
        A0_xy = (p_sq.cumsum(axis=0)[::-1] + p_sq[::-1].cumsum(axis=0)[::-1]) / 2

        # Convert height-height autocorrelation to height-difference
        # autocorrelation
        A = ((A0_xy - A_xy[:nx]).T / (nx - np.arange(nx))).T

        r = sx * np.arange(nx) / nx

    # The factor of two comes from the fact that the short cutoff is estimated
    # from the curvature but the ACF is the slope, see arXiv:2106.16103
    short_cutoff = self.short_reliability_cutoff() if reliable else None
    if short_cutoff is None:
        short_cutoff = -1  # Include zero distance
    mask = r > short_cutoff / 2
    if self.dim == 2:
        return r[mask], A.mean(axis=1)[mask]
    else:
        return r[mask], A[mask]


def autocorrelation_from_area(self, collocation='log', nb_points=None, nb_points_per_decade=5, return_map=False,
                              reliable=True):
    """
    Compute height-difference autocorrelation function and radial average.

    Parameters
    ----------
    self : :obj:`SurfaceTopography`
        Container storing the (two-dimensional) topography map.
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
    nb_points_per_decade : int, optional
        Number of points per decade for log-spaced collocation points.
        (Default: None)
    return_map : bool, optional
        Return full 2D autocorrelation map. (Default: False)
    reliable : bool, optional
        Only return data deemed reliable. (Default: True)

    Returns
    -------
    r : array
        Distances. (Units: length)
    A : array
        Radially averaged autocorrelation function. (Units: length**2)
    A_xy : array
        2D autocorrelation function. Only returned if return_map=True.
        (Units: length**2)
    """
    nx, ny = self.nb_grid_pts
    sx, sy = self.physical_sizes

    # Compute FFT and normalize
    if self.is_periodic:
        surface_qk = np.fft.fft2(self[...])
        C_qk = abs(surface_qk) ** 2  # pylint: disable=invalid-name
        A_xy = np.fft.ifft2(C_qk).real / (nx * ny)

        # Convert height-height autocorrelation to height-difference
        # autocorrelation
        A_xy = A_xy[0, 0] - A_xy

        # Radial average
        r_val, r_edges, A_val, _ = resample_radial(A_xy, physical_sizes=(sx, sy), nb_points=nb_points,
                                                   nb_points_per_decade=nb_points_per_decade, collocation=collocation,
                                                   max_radius=(sx + sy) / 4)
    else:
        p = self.heights()

        # Compute height-height autocorrelation function
        surface_qk = np.fft.fft2(p, s=(2 * nx - 1, 2 * ny - 1))
        C_qk = abs(surface_qk) ** 2  # pylint: disable=invalid-name
        A_xy = np.fft.ifft2(C_qk).real

        # Correction to turn height-height into height-difference
        # autocorrelation
        p_sq = p ** 2
        A0_xy = (p_sq.cumsum(axis=0).cumsum(axis=1)[::-1, ::-1] +
                 p_sq[::-1, ::-1].cumsum(axis=0).cumsum(axis=1)[::-1, ::-1]) / 2

        # Convert height-height autocorrelation to height-difference
        # autocorrelation
        A_xy = (A0_xy - A_xy[:nx, :ny]) / (
                    (nx - np.arange(nx)).reshape(-1, 1) * (ny - np.arange(ny)).reshape(1, -1))

        # Radial average
        r_val, r_edges, A_val, _ = resample_radial(A_xy, physical_sizes=(sx, sy), collocation=collocation,
                                                   nb_points=nb_points, nb_points_per_decade=nb_points_per_decade,
                                                   max_radius=(sx + sy) / 2, full=False)

    # The factor of two comes from the fact that the short cutoff is estimated
    # from the curvature but the ACF is the slope, see arXiv:2106.16103
    short_cutoff = self.short_reliability_cutoff() if reliable else None
    if short_cutoff is None:
        short_cutoff = -1  # Include zero distance
    mask = np.logical_and(np.isfinite(A_val), r_val > short_cutoff / 2)
    if return_map:
        return r_val[mask], A_val[mask], A_xy
    else:
        return r_val[mask], A_val[mask]


# Register analysis functions from this module
UniformTopographyInterface.register_function('autocorrelation_from_profile', autocorrelation_from_profile)
UniformTopographyInterface.register_function('autocorrelation_from_area', autocorrelation_from_area)
