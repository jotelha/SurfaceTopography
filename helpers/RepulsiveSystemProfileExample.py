#
# Copyright 2019 Antoine Sanner
#           2017-2018 Lars Pastewka
#           2016 km7219@lsdf-28-131.scc.kit.edu
#           2016 Till Junge
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
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
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
Standard program for a repulsive contact sim. The idea is to use this
to profile and accelerate PyCo
"""

import numpy as np

from PyCo.SolidMechanics import FreeFFTElasticHalfSpace
from PyCo.ContactMechanics import HardWall
from PyCo.Topography import Sphere
from PyCo.System import make_system
import sys

#import matplotlib.pyplot as plt

# geometry
res = int(sys.argv[1])
print(res)
size = 65e-6
radius = 500e-6


# material
e_combo = 4e6

# system
substrate = FreeFFTElasticHalfSpace((res, res), e_combo, (size, size))
interaction = HardWall()
surface = Sphere(radius, (res, res), (size, size))
system = make_system(substrate, interaction, surface)


# minimize
offset_max = 1e-6
disp = None
for offset in np.linspace(0, offset_max, 10):
    print("offset = {}".format(offset))
    result = system.minimize_proxy(offset, disp0=disp)
    disp = system.disp

print(result.success)

