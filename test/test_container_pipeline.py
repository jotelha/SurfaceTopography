"""
Tests of the pipeline for topography containers
"""

import numpy as np

from SurfaceTopography import read_container


def test_scale_dependent_statistical_property(file_format_examples):
    c, = read_container(f'{file_format_examples}/container1.zip')
    s = c.scale_dependent_statistical_property(lambda x, y: np.var(x), n=1, distance=[0.01, 0.1, 1.0, 10], unit='um')
    assert (np.diff(s) < 0).all()
    np.testing.assert_almost_equal(s, [0.0018715281899762592, 0.0006849065620048571, 0.0002991781282532277,
                                       7.224607689277936e-05])
