#
# Copyright 2016-2021 Lars Pastewka
#           2020 Michael Röttger
#           2018-2020 Antoine Sanner
#           2015-2016 Till Junge
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

from pathlib import Path

from setuptools import setup, find_packages, Extension
from setuptools.command.build_ext import build_ext

import pkgconfig


class CustomBuildExtCommand(build_ext):
    """build_ext command for use when numpy headers are needed."""

    def run(self):
        # Import numpy here, only when headers are needed
        import numpy

        # Add numpy headers to include_dirs
        self.include_dirs.append(numpy.get_include())

        # Call original build_ext command
        build_ext.run(self)


extension = Extension(
    name='_SurfaceTopography',
    sources=['c/autocorrelation.cpp',
             'c/bicubic.cpp',
             'c/patchfinder.cpp',
             'c/module.cpp'],
    extra_compile_args=["-std=c++11"]
)

pkgconfig.configure_extension(extension, 'openblas64')

setup(
    name="SurfaceTopography",
    cmdclass={'build_ext': CustomBuildExtCommand},
    scripts=[],
    packages=find_packages(),
    package_data={'': ['ChangeLog.md']},
    include_package_data=True,
    ext_modules=[extension],
    # metadata for upload to PyPI
    author='Lars Pastewka',
    author_email='lars.pastewka@imtek.uni-freiburg.de',
    description='Read and analyze surface topographies',
    long_description=(Path(__file__).parent / "README.md").read_text(),
    long_description_content_type='text/markdown',
    license='MIT',
    test_suite='tests',
    # dependencies
    python_requires='>=3.5.0',
    use_scm_version=True,
    zip_safe=False,
    setup_requires=[
        'setuptools_scm>=3.5.0',
        'pytest-runner',
    ],
    tests_require=[
        'pytest',
    ],
    install_requires=[
        'numpy>=1.16.3',
        'NuMPI>=0.3.0',
        'muFFT>=0.12.0',
        'igor',
        'h5py',
        'defusedxml',
        'numpyencoder',
        'pyyaml',
        'Pillow',
        'requests',
        'matplotlib>=1.0.0',
        'python-dateutil',
        'pkgconfig',
    ]
)
