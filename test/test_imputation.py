#
# Copyright 2021 Lars Pastewka
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

import numpy as np
import pytest

from SurfaceTopography import Topography, UniformLineScan
from SurfaceTopography.Generation import fourier_synthesis
from SurfaceTopography.Uniform.Imputation import assign_patch_numbers_profile, outer_perimeter_profile, \
    outer_perimeter_area


@pytest.mark.parametrize('periodic,expected_nb_patches,mask,expected_patch_ids',
                         [(False, 3,
                           [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
                           [0, 0, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 3, 0]),
                          (True, 3,
                           [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
                           [0, 0, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 3, 0]),
                          (False, 3,
                           [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
                           [1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 3, 0]),
                          (True, 3,
                           [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
                           [1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 3, 0]),
                          (False, 3,
                           [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
                           [1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 3, 3]),
                          (True, 2,
                           [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
                           [1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 1, 1]),
                          ])
def test_assign_patch_numbers_profile(periodic, expected_nb_patches, mask, expected_patch_ids):
    mask = np.array(mask, dtype=bool)
    expected_patch_ids = np.array(expected_patch_ids)
    nb_patches, patch_ids = assign_patch_numbers_profile(mask, periodic)
    assert nb_patches == expected_nb_patches
    np.testing.assert_array_equal(patch_ids, expected_patch_ids)


@pytest.mark.parametrize('periodic,mask,expected_outer_perimeter',
                         [(False,
                           [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
                           [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1]),
                          (True,
                           [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
                           [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1]),
                         (False,
                           [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                           [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]),
                          (True,
                           [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                           [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1]),
                          (True,
                           [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                           [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0]),
                          ])
def test_outer_perimeter_profile(periodic, mask, expected_outer_perimeter):
    mask = np.array(mask, dtype=bool)
    expected_outer_perimeter = np.array(expected_outer_perimeter, dtype=bool)
    outer_perimeter = outer_perimeter_profile(mask, periodic)
    # astype(int) makes debugging easier
    np.testing.assert_array_equal(outer_perimeter.astype(int), expected_outer_perimeter.astype(int))


@pytest.mark.parametrize('periodic,mask,expected_outer_perimeter',
                         [(False,
                           [[0, 0, 0, 0],
                            [0, 1, 1, 0],
                            [0, 1, 1, 0],
                            [0, 0, 0, 0]],
                           [[0, 1, 1, 0],
                            [1, 0, 0, 1],
                            [1, 0, 0, 1],
                            [0, 1, 1, 0]]),
                           (True,
                            [[0, 0, 0, 0],
                             [0, 1, 1, 0],
                             [0, 1, 1, 0],
                             [0, 0, 0, 0]],
                            [[0, 1, 1, 0],
                             [1, 0, 0, 1],
                             [1, 0, 0, 1],
                             [0, 1, 1, 0]]),
                           (False,
                            [[1, 1, 0, 0],
                             [1, 1, 0, 0],
                             [0, 0, 0, 0],
                             [0, 0, 0, 0]],
                            [[0, 0, 1, 0],
                             [0, 0, 1, 0],
                             [1, 1, 0, 0],
                             [0, 0, 0, 0]]),
                           (True,
                            [[1, 1, 0, 0],
                             [1, 1, 0, 0],
                             [0, 0, 0, 0],
                             [0, 0, 0, 0]],
                            [[0, 0, 1, 1],
                             [0, 0, 1, 1],
                             [1, 1, 0, 0],
                             [1, 1, 0, 0]]),
                           ])
def test_outer_perimeter_area(periodic, mask, expected_outer_perimeter):
    mask = np.array(mask, dtype=bool)
    expected_outer_perimeter = np.array(expected_outer_perimeter, dtype=bool)
    outer_perimeter = outer_perimeter_area(mask, periodic)
    np.testing.assert_array_equal(outer_perimeter, expected_outer_perimeter)


def test_randomly_rough_1d():
    t = fourier_synthesis((128,), (1.,), 0.8, rms_height=1)
    mn, mx = t.min(), t.max()
    val = mn + (mx - mn) * 0.8

    h = t.heights()
    print((h > val).sum(), val)
    t2 = UniformLineScan(np.ma.array(h.copy(), mask=h > val), t.physical_sizes, periodic=True)
    assert t2.has_undefined_data
    t3 = t2.interpolate_undefined_data()
    assert not t3.has_undefined_data
    h = t3.heights()

    assert not np.ma.is_masked(h)
    assert np.max(h) <= val
    assert t3.max() <= val


def test_randomly_rough_2d():
    t = fourier_synthesis((128, 128), (1., 1.), 0.8, rms_height=1)
    mn, mx = t.min(), t.max()
    val = mn + (mx - mn) * 0.8

    h = t.heights()
    t2 = Topography(np.ma.array(h.copy(), mask=h > val), t.physical_sizes, periodic=True)
    assert t2.has_undefined_data
    t3 = t2.interpolate_undefined_data()
    assert not t3.has_undefined_data
    h = t3.heights()

    assert not np.ma.is_masked(h)
    assert np.max(h) <= val
    assert t3.max() <= val


def test_linear_1d():
    a, b = -1.3, 2.7
    nx = 128
    sx = 1.3
    x = np.linspace(-sx / 2, sx / 2, nx)
    h = a * x + b
    t = UniformLineScan(np.ma.array(h.copy(), mask=abs(x) < sx / 8), (sx,))
    assert t.has_undefined_data
    t2 = t.interpolate_undefined_data()

    import matplotlib.pyplot as plt
    plt.plot(*t.positions_and_heights(), 'kx-')
    plt.plot(*t2.positions_and_heights(), 'k+-')
    plt.show()

    # This is not exact, but close
    np.testing.assert_allclose(h, t2.heights(), rtol=0.03)


def test_linear_2d():
    a, b, c = -1.3, 2.7, 1.8
    nx, ny = 128, 234
    sx, sy = 1.3, 1.6
    x = np.linspace(-sx / 2, sx / 2, nx).reshape(-1, 1)
    y = np.linspace(-sy / 2, sy / 2, ny).reshape(1, -1)
    h = a * x + b * y + c
    t = Topography(np.ma.array(h.copy(), mask=np.logical_and(abs(x) < sx / 8, abs(y) < sy / 8)), (sx, sy))
    assert t.has_undefined_data
    t2 = t.interpolate_undefined_data()
    # This is not exact, but close
    np.testing.assert_allclose(h, t2.heights(), rtol=0.03)
