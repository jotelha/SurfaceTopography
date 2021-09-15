#
# Copyright 2020-2021 Lars Pastewka
#           2019-2020 Antoine Sanner
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

from ..common import toiter, fromiter
from ..HeightContainer import NonuniformLineScanInterface


def scale_dependent_statistical_property(self, func, n, distance, interpolation='linear',
                                         progress_callback=None):
    """
    Compute statistical properties of a uniform topography at specific scales.
    The scale is specified either by `scale_factors` or `distance`. These
    properties are statistics of derivatives carried out at specific scales,
    as computed using the `derivative` pipeline function.

    The specific statistical properties is computed by the `func` argument.
    The output of `func` needs to be homogeneous, i.e. if an array is returned,
    this array must have the same size independent of the derivative data that
    is fed into `func`.

    Parameters
    ----------
    self : :class:`SurfaceTopography.NonuniformLineScan`
        Topography or line scan.
    func : callable
        The function that computes the statistical properties:

            ``func(dx, dy=None) -> np.ndarray``

        A function taking the derivative in x-direction and optionally the
        derivative in y-direction (only for topographies, i.e. maps). The
        function needs to be able to ignore the second argument as a container
        can be a mixture of topographies and line scans. The function can
        return a scalar value or an array, but the array size must be fixed.
    n : int, optional
        Order of derivative. (Default: 1)
    distance : float or np.ndarray
        Characteristic distances at which the derivatives are computed. If
        this is an array, then the statistical property is computed at each
        of these distances.
    interpolation : str, optional
        Interpolation method to use for computing derivatives. Can only be
        'linear' for nonuniform line scans and is provided for compatibility
        with the corresponding keyword parameter of the uniform containers.
        (Default: 'linear')
    progress_callback : func, optional
        Function taking iteration and the total number of iterations as
        arguments for progress reporting. (Default: None)

    Returns
    -------
    statistical_fingerprint : np.ndarray or list of np.ndarray
        Array containing the result of `func`

    Examples
    --------
    This example yields the the scale-dependent derivative (equivalent to
    the autocorrelation function divided by the distance) in the x-direction:

    >>> distances, A = t.autocorrelation_from_profile()
    >>> s = t.scale_dependent_statistical_property(lambda x, y=None: np.var(x), distance=distances[1::20])
    >>> np.testing.assert_allclose(2 * A[1::20] / distances[1::20] ** 2, s)
    """
    if interpolation != 'linear':
        raise ValueError('Only linear interpolation is support for scale-dependent statistical properties of '
                         'nonuniform line scans.')
    stat = []
    distances = toiter(distance)
    for i, d in enumerate(distances):
        if progress_callback is not None:
            progress_callback(i, len(distances))
        stat += self.to_uniform(pixel_size=d / n).scale_dependent_statistical_property(func=func, n=n, scale_factor=1,
                                                                                       interpolation='disable')
    if progress_callback is not None:
        progress_callback(len(distances), len(distances))

    return fromiter(stat, distance)


NonuniformLineScanInterface.register_function('scale_dependent_statistical_property',
                                              scale_dependent_statistical_property)
