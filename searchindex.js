Search.setIndex({docnames:["contributing","development","index","installation","source/SurfaceTopography","source/SurfaceTopography.Container","source/SurfaceTopography.Generic","source/SurfaceTopography.IO","source/SurfaceTopography.Nonuniform","source/SurfaceTopography.Support","source/SurfaceTopography.Uniform","source/modules","testing","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["contributing.rst","development.rst","index.rst","installation.rst","source/SurfaceTopography.rst","source/SurfaceTopography.Container.rst","source/SurfaceTopography.Generic.rst","source/SurfaceTopography.IO.rst","source/SurfaceTopography.Nonuniform.rst","source/SurfaceTopography.Support.rst","source/SurfaceTopography.Uniform.rst","source/modules.rst","testing.rst","usage.rst"],objects:{"":{SurfaceTopography:[4,0,0,"-"]},"SurfaceTopography.Container":{IO:[5,0,0,"-"],ScaleDependentStatistics:[5,0,0,"-"],SurfaceContainer:[5,0,0,"-"]},"SurfaceTopography.Container.IO":{read_container:[5,1,1,""],read_published_container:[5,1,1,""],write_containers:[5,1,1,""]},"SurfaceTopography.Container.ScaleDependentStatistics":{scale_dependent_statistical_property:[5,1,1,""]},"SurfaceTopography.Container.SurfaceContainer":{SurfaceContainer:[5,2,1,""]},"SurfaceTopography.Container.SurfaceContainer.SurfaceContainer":{apply:[5,3,1,""],register_function:[5,3,1,""]},"SurfaceTopography.Converters":{UniformlyInterpolatedLineScan:[4,2,1,""],WrapAsNonuniformLineScan:[4,2,1,""]},"SurfaceTopography.Converters.UniformlyInterpolatedLineScan":{area_per_pt:[4,4,1,""],dim:[4,4,1,""],has_undefined_data:[4,4,1,""],heights:[4,3,1,""],is_periodic:[4,4,1,""],is_uniform:[4,4,1,""],nb_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],pixel_size:[4,4,1,""],positions:[4,3,1,""]},"SurfaceTopography.Converters.WrapAsNonuniformLineScan":{dim:[4,4,1,""],heights:[4,3,1,""],is_periodic:[4,4,1,""],nb_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],positions:[4,3,1,""],x_range:[4,4,1,""]},"SurfaceTopography.FFTTricks":{get_window_2D:[4,1,1,""],make_fft:[4,1,1,""]},"SurfaceTopography.Generation":{fourier_synthesis:[4,1,1,""],self_affine_prefactor:[4,1,1,""]},"SurfaceTopography.Generic":{Curvature:[6,0,0,"-"],Slope:[6,0,0,"-"]},"SurfaceTopography.Generic.Curvature":{scale_dependent_curvature_from_area:[6,1,1,""],scale_dependent_curvature_from_profile:[6,1,1,""]},"SurfaceTopography.Generic.Slope":{scale_dependent_slope_from_area:[6,1,1,""],scale_dependent_slope_from_profile:[6,1,1,""]},"SurfaceTopography.HeightContainer":{AbstractTopography:[4,2,1,""],DecoratedTopography:[4,2,1,""],NonuniformLineScanInterface:[4,2,1,""],TopographyInterface:[4,2,1,""],UniformTopographyInterface:[4,2,1,""]},"SurfaceTopography.HeightContainer.AbstractTopography":{Error:[4,5,1,""],apply:[4,3,1,""],communicator:[4,4,1,""],dim:[4,4,1,""],info:[4,4,1,""],is_periodic:[4,4,1,""],physical_sizes:[4,4,1,""],pipeline:[4,3,1,""],unit:[4,4,1,""]},"SurfaceTopography.HeightContainer.DecoratedTopography":{info:[4,4,1,""],nb_subdomain_grid_pts:[4,4,1,""],pipeline:[4,3,1,""]},"SurfaceTopography.HeightContainer.NonuniformLineScanInterface":{heights:[4,3,1,""],is_MPI:[4,4,1,""],is_uniform:[4,4,1,""],nb_grid_pts:[4,4,1,""],positions:[4,3,1,""],positions_and_heights:[4,3,1,""],x_range:[4,4,1,""]},"SurfaceTopography.HeightContainer.TopographyInterface":{register_function:[4,3,1,""]},"SurfaceTopography.HeightContainer.UniformTopographyInterface":{area_per_pt:[4,4,1,""],communicator:[4,4,1,""],has_undefined_data:[4,4,1,""],heights:[4,3,1,""],is_domain_decomposed:[4,4,1,""],is_uniform:[4,4,1,""],nb_grid_pts:[4,4,1,""],nb_subdomain_grid_pts:[4,4,1,""],pixel_size:[4,4,1,""],positions:[4,3,1,""],positions_and_heights:[4,3,1,""]},"SurfaceTopography.IO":{DI:[7,0,0,"-"],DZI:[7,0,0,"-"],FromFile:[7,0,0,"-"],H5:[7,0,0,"-"],IBW:[7,0,0,"-"],MI:[7,0,0,"-"],Matlab:[7,0,0,"-"],NC:[7,0,0,"-"],NPY:[7,0,0,"-"],OPDx:[7,0,0,"-"],Reader:[7,0,0,"-"],Text:[7,0,0,"-"],ZON:[7,0,0,"-"],common:[7,0,0,"-"],detect_format:[7,1,1,""],open_topography:[7,1,1,""],read_topography:[7,1,1,""]},"SurfaceTopography.IO.DI":{DIReader:[7,2,1,""]},"SurfaceTopography.IO.DI.DIReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.DZI":{write_dzi:[7,1,1,""]},"SurfaceTopography.IO.FromFile":{HGTReader:[7,2,1,""],OPDReader:[7,2,1,""],X3PReader:[7,2,1,""],binary:[7,1,1,""],make_wrapped_reader:[7,1,1,""],mask_undefined:[7,1,1,""],read_hgt:[7,1,1,""],read_opd:[7,1,1,""],read_x3p:[7,1,1,""]},"SurfaceTopography.IO.FromFile.HGTReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.FromFile.OPDReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.FromFile.X3PReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.H5":{H5Reader:[7,2,1,""]},"SurfaceTopography.IO.H5.H5Reader":{channels:[7,4,1,""],close:[7,3,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.IBW":{IBWReader:[7,2,1,""]},"SurfaceTopography.IO.IBW.IBWReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.MI":{Channel:[7,2,1,""],MIFile:[7,2,1,""],MIReader:[7,2,1,""],read_header_image:[7,1,1,""],read_header_spect:[7,1,1,""]},"SurfaceTopography.IO.MI.MIReader":{channels:[7,4,1,""],info:[7,4,1,""],process_header:[7,3,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.Matlab":{MatReader:[7,2,1,""]},"SurfaceTopography.IO.Matlab.MatReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.NC":{NCReader:[7,2,1,""],write_nc_nonuniform:[7,1,1,""],write_nc_uniform:[7,1,1,""]},"SurfaceTopography.IO.NC.NCReader":{channels:[7,4,1,""],close:[7,3,1,""],communicator:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.NPY":{NPYReader:[7,2,1,""],save_npy:[7,1,1,""]},"SurfaceTopography.IO.NPY.NPYReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.OPDx":{DektakBuf:[7,2,1,""],DektakItem:[7,2,1,""],DektakItemData:[7,2,1,""],DektakMatrix:[7,2,1,""],DektakQuantUnit:[7,2,1,""],DektakRawPos1D:[7,2,1,""],DektakRawPos2D:[7,2,1,""],OPDxReader:[7,2,1,""],build_matrix:[7,1,1,""],create_meta:[7,1,1,""],find_1d_data:[7,1,1,""],find_2d_data:[7,1,1,""],find_2d_data_matrix:[7,1,1,""],read_dimension2d_content:[7,1,1,""],read_double:[7,1,1,""],read_float:[7,1,1,""],read_int16:[7,1,1,""],read_int32:[7,1,1,""],read_int64:[7,1,1,""],read_item:[7,1,1,""],read_name:[7,1,1,""],read_named_struct:[7,1,1,""],read_quantunit_content:[7,1,1,""],read_structured:[7,1,1,""],read_varlen:[7,1,1,""],read_with_check:[7,1,1,""],reformat_dict:[7,1,1,""]},"SurfaceTopography.IO.OPDx.OPDxReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.Reader":{CannotDetectFileFormat:[7,5,1,""],ChannelInfo:[7,2,1,""],CorruptFile:[7,5,1,""],FileFormatMismatch:[7,5,1,""],MetadataAlreadyFixedByFile:[7,5,1,""],ReadFileError:[7,5,1,""],ReaderBase:[7,2,1,""],UnknownFileFormatGiven:[7,5,1,""]},"SurfaceTopography.IO.Reader.ChannelInfo":{area_per_pt:[7,4,1,""],dim:[7,4,1,""],height_scale_factor:[7,4,1,""],index:[7,4,1,""],info:[7,4,1,""],is_periodic:[7,4,1,""],name:[7,4,1,""],nb_grid_pts:[7,4,1,""],physical_sizes:[7,4,1,""],pixel_size:[7,4,1,""],topography:[7,3,1,""],unit:[7,4,1,""]},"SurfaceTopography.IO.Reader.ReaderBase":{channels:[7,4,1,""],close:[7,3,1,""],default_channel:[7,4,1,""],description:[7,3,1,""],format:[7,3,1,""],name:[7,3,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.Text":{write_matrix:[7,1,1,""]},"SurfaceTopography.IO.ZON":{ZONReader:[7,2,1,""]},"SurfaceTopography.IO.ZON.ZONReader":{channels:[7,4,1,""],topography:[7,3,1,""]},"SurfaceTopography.IO.common":{OpenFromAny:[7,2,1,""],is_binary_stream:[7,1,1,""],text:[7,1,1,""]},"SurfaceTopography.Nonuniform":{Autocorrelation:[8,0,0,"-"],Detrending:[8,0,0,"-"],PowerSpectrum:[8,0,0,"-"],ScalarParameters:[8,0,0,"-"],ScaleDependentStatistics:[8,0,0,"-"],VariableBandwidth:[8,0,0,"-"],common:[8,0,0,"-"]},"SurfaceTopography.Nonuniform.Autocorrelation":{height_difference_autocorrelation:[8,1,1,""],height_height_autocorrelation:[8,1,1,""]},"SurfaceTopography.Nonuniform.Detrending":{polyfit:[8,1,1,""]},"SurfaceTopography.Nonuniform.PowerSpectrum":{apply_window:[8,1,1,""],dsinc:[8,1,1,""],ft_one_sided_triangle:[8,1,1,""],ft_rectangle:[8,1,1,""],power_spectrum:[8,1,1,""],sinc:[8,1,1,""]},"SurfaceTopography.Nonuniform.ScalarParameters":{rms_curvature:[8,1,1,""],rms_height:[8,1,1,""],rms_slope:[8,1,1,""]},"SurfaceTopography.Nonuniform.ScaleDependentStatistics":{scale_dependent_statistical_property:[8,1,1,""]},"SurfaceTopography.Nonuniform.VariableBandwidth":{checkerboard_detrend_profile:[8,1,1,""],variable_bandwidth_from_profile:[8,1,1,""]},"SurfaceTopography.Nonuniform.common":{bandwidth:[8,1,1,""],derivative:[8,1,1,""]},"SurfaceTopography.NonuniformLineScan":{DecoratedNonuniformTopography:[4,2,1,""],DetrendedNonuniformTopography:[4,2,1,""],NonuniformLineScan:[4,2,1,""],ScaledNonuniformTopography:[4,2,1,""],StaticallyScaledNonuniformTopography:[4,2,1,""]},"SurfaceTopography.NonuniformLineScan.DecoratedNonuniformTopography":{dim:[4,4,1,""],info:[4,4,1,""],is_periodic:[4,4,1,""],nb_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],positions:[4,3,1,""],squeeze:[4,3,1,""],unit:[4,4,1,""],x_range:[4,4,1,""]},"SurfaceTopography.NonuniformLineScan.DetrendedNonuniformTopography":{coeffs:[4,4,1,""],curvatures:[4,4,1,""],detrend_mode:[4,4,1,""],heights:[4,3,1,""],is_periodic:[4,4,1,""],positions:[4,3,1,""],stringify_plane:[4,3,1,""],x_range:[4,4,1,""]},"SurfaceTopography.NonuniformLineScan.NonuniformLineScan":{dim:[4,4,1,""],heights:[4,3,1,""],is_periodic:[4,4,1,""],is_uniform:[4,4,1,""],nb_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],positions:[4,3,1,""],squeeze:[4,3,1,""],x_range:[4,4,1,""]},"SurfaceTopography.NonuniformLineScan.ScaledNonuniformTopography":{height_scale_factor:[4,4,1,""],heights:[4,3,1,""],physical_sizes:[4,4,1,""],position_scale_factor:[4,4,1,""],positions:[4,3,1,""],scale_factor:[4,4,1,""]},"SurfaceTopography.NonuniformLineScan.StaticallyScaledNonuniformTopography":{height_scale_factor:[4,4,1,""],position_scale_factor:[4,4,1,""],scale_factor:[4,4,1,""]},"SurfaceTopography.Special":{PlasticTopography:[4,2,1,""],make_sphere:[4,1,1,""]},"SurfaceTopography.Special.PlasticTopography":{hardness:[4,4,1,""],heights:[4,3,1,""],name:[4,6,1,""],plastic_area:[4,4,1,""],plastic_displ:[4,4,1,""],undeformed_profile:[4,3,1,""]},"SurfaceTopography.Support":{Deprecation:[9,0,0,"-"]},"SurfaceTopography.Support.Deprecation":{DeprecatedDictionary:[9,2,1,""],deprecated:[9,1,1,""]},"SurfaceTopography.Support.Deprecation.DeprecatedDictionary":{copy:[9,3,1,""]},"SurfaceTopography.Uniform":{Autocorrelation:[10,0,0,"-"],Detrending:[10,0,0,"-"],Filtering:[10,0,0,"-"],Interpolation:[10,0,0,"-"],PowerSpectrum:[10,0,0,"-"],ScalarParameters:[10,0,0,"-"],ScaleDependentStatistics:[10,0,0,"-"],VariableBandwidth:[10,0,0,"-"],common:[10,0,0,"-"]},"SurfaceTopography.Uniform.Autocorrelation":{autocorrelation_from_area:[10,1,1,""],autocorrelation_from_profile:[10,1,1,""]},"SurfaceTopography.Uniform.Detrending":{shift_and_tilt:[10,1,1,""],tilt_and_curvature:[10,1,1,""],tilt_from_height:[10,1,1,""]},"SurfaceTopography.Uniform.Filtering":{FilteredUniformTopography:[10,2,1,""],LongCutTopography:[10,2,1,""],ShortCutTopography:[10,2,1,""],WindowedUniformTopography:[10,2,1,""]},"SurfaceTopography.Uniform.Filtering.FilteredUniformTopography":{filter_function:[10,3,1,""],heights:[10,3,1,""],is_filter_isotropic:[10,4,1,""],name:[10,6,1,""]},"SurfaceTopography.Uniform.Filtering.LongCutTopography":{cutoff_wavelength:[10,4,1,""],cutoff_wavevector:[10,4,1,""],name:[10,6,1,""]},"SurfaceTopography.Uniform.Filtering.ShortCutTopography":{cutoff_wavelength:[10,4,1,""],cutoff_wavevector:[10,4,1,""],name:[10,6,1,""]},"SurfaceTopography.Uniform.Filtering.WindowedUniformTopography":{heights:[10,3,1,""],name:[10,6,1,""],window_data:[10,4,1,""]},"SurfaceTopography.Uniform.Interpolation":{MirrorStichedTopography:[10,2,1,""],bicubic_interpolator:[10,1,1,""],interpolate_fourier:[10,1,1,""]},"SurfaceTopography.Uniform.Interpolation.MirrorStichedTopography":{heights:[10,3,1,""],is_periodic:[10,4,1,""],nb_grid_pts:[10,4,1,""],physical_sizes:[10,4,1,""],positions:[10,3,1,""]},"SurfaceTopography.Uniform.PowerSpectrum":{power_spectrum_from_area:[10,1,1,""],power_spectrum_from_profile:[10,1,1,""]},"SurfaceTopography.Uniform.ScalarParameters":{rms_curvature_from_area:[10,1,1,""],rms_curvature_from_profile:[10,1,1,""],rms_gradient:[10,1,1,""],rms_height_from_area:[10,1,1,""],rms_height_from_profile:[10,1,1,""],rms_laplacian:[10,1,1,""],rms_slope_from_profile:[10,1,1,""]},"SurfaceTopography.Uniform.ScaleDependentStatistics":{scale_dependent_statistical_property:[10,1,1,""]},"SurfaceTopography.Uniform.VariableBandwidth":{checkerboard_detrend_area:[10,1,1,""],checkerboard_detrend_profile:[10,1,1,""],variable_bandwidth_from_area:[10,1,1,""],variable_bandwidth_from_profile:[10,1,1,""]},"SurfaceTopography.Uniform.common":{FilledTopography:[10,2,1,""],bandwidth:[10,1,1,""],derivative:[10,1,1,""],domain_decompose:[10,1,1,""],fourier_derivative:[10,1,1,""],plot:[10,1,1,""]},"SurfaceTopography.Uniform.common.FilledTopography":{has_undefined_data:[10,4,1,""],heights:[10,3,1,""]},"SurfaceTopography.UniformLineScanAndTopography":{CompoundTopography:[4,2,1,""],DecoratedUniformTopography:[4,2,1,""],DetrendedUniformTopography:[4,2,1,""],ScaledUniformTopography:[4,2,1,""],StaticallyScaledUniformTopography:[4,2,1,""],Topography:[4,2,1,""],TranslatedTopography:[4,2,1,""],TransposedUniformTopography:[4,2,1,""],UniformLineScan:[4,2,1,""]},"SurfaceTopography.UniformLineScanAndTopography.CompoundTopography":{heights:[4,3,1,""],name:[4,6,1,""]},"SurfaceTopography.UniformLineScanAndTopography.DecoratedUniformTopography":{area_per_pt:[4,4,1,""],dim:[4,4,1,""],has_undefined_data:[4,4,1,""],info:[4,4,1,""],is_domain_decomposed:[4,4,1,""],is_periodic:[4,4,1,""],nb_grid_pts:[4,4,1,""],nb_subdomain_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],pixel_size:[4,4,1,""],positions:[4,3,1,""],positions_and_heights:[4,3,1,""],squeeze:[4,3,1,""],subdomain_locations:[4,4,1,""],subdomain_slices:[4,4,1,""],unit:[4,4,1,""]},"SurfaceTopography.UniformLineScanAndTopography.DetrendedUniformTopography":{coeffs:[4,4,1,""],curvatures:[4,4,1,""],detrend_mode:[4,4,1,""],heights:[4,3,1,""],is_periodic:[4,4,1,""],stringify_plane:[4,3,1,""]},"SurfaceTopography.UniformLineScanAndTopography.ScaledUniformTopography":{height_scale_factor:[4,4,1,""],heights:[4,3,1,""],physical_sizes:[4,4,1,""],pixel_size:[4,4,1,""],position_scale_factor:[4,4,1,""],positions:[4,3,1,""],scale_factor:[4,4,1,""]},"SurfaceTopography.UniformLineScanAndTopography.StaticallyScaledUniformTopography":{height_scale_factor:[4,4,1,""],position_scale_factor:[4,4,1,""],scale_factor:[4,4,1,""]},"SurfaceTopography.UniformLineScanAndTopography.Topography":{area_per_pt:[4,4,1,""],communicator:[4,4,1,""],dim:[4,4,1,""],has_undefined_data:[4,4,1,""],heights:[4,3,1,""],is_periodic:[4,4,1,""],is_uniform:[4,4,1,""],nb_grid_pts:[4,4,1,""],nb_subdomain_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],pixel_size:[4,4,1,""],positions:[4,3,1,""],positions_and_heights:[4,3,1,""],subdomain_locations:[4,4,1,""],subdomain_slices:[4,4,1,""]},"SurfaceTopography.UniformLineScanAndTopography.TranslatedTopography":{heights:[4,3,1,""],name:[4,6,1,""],offset:[4,4,1,""]},"SurfaceTopography.UniformLineScanAndTopography.TransposedUniformTopography":{heights:[4,3,1,""],nb_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],positions:[4,3,1,""]},"SurfaceTopography.UniformLineScanAndTopography.UniformLineScan":{area_per_pt:[4,4,1,""],dim:[4,4,1,""],has_undefined_data:[4,4,1,""],heights:[4,3,1,""],is_domain_decomposed:[4,4,1,""],is_periodic:[4,4,1,""],is_uniform:[4,4,1,""],nb_grid_pts:[4,4,1,""],nb_subdomain_grid_pts:[4,4,1,""],physical_sizes:[4,4,1,""],pixel_size:[4,4,1,""],positions:[4,3,1,""],save:[4,3,1,""],squeeze:[4,3,1,""]},"SurfaceTopography.UnitConversion":{get_unit_conversion_factor:[4,1,1,""],mangle_length_unit_ascii:[4,1,1,""],mangle_length_unit_utf8:[4,1,1,""]},"SurfaceTopography.common":{radial_average:[4,1,1,""]},SurfaceTopography:{Container:[5,0,0,"-"],Converters:[4,0,0,"-"],FFTTricks:[4,0,0,"-"],Generation:[4,0,0,"-"],Generic:[6,0,0,"-"],HeightContainer:[4,0,0,"-"],IO:[7,0,0,"-"],Interpolation:[4,0,0,"-"],Nonuniform:[8,0,0,"-"],NonuniformLineScan:[4,0,0,"-"],Special:[4,0,0,"-"],Support:[9,0,0,"-"],Uniform:[10,0,0,"-"],UniformLineScanAndTopography:[4,0,0,"-"],UnitConversion:[4,0,0,"-"],common:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","exception","Python exception"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:property","5":"py:exception","6":"py:attribute"},terms:{"0":[4,5,7,8,10,13],"013001":[2,4],"04577566528320313":7,"06":8,"1":[0,2,4,5,6,7,8,10,13],"10":[2,5,7,12],"10000":7,"1088":2,"111":10,"16bit":7,"18_line_scan":0,"1d":[4,7,10],"1e":[7,8],"2":[4,6,7,8,10,13],"20":[8,10,13],"2011":4,"2017":[2,4],"2018":0,"2051":2,"215004":4,"23":4,"256":7,"29638271279074097":7,"2_":4,"2a":6,"2d":[4,7,10,13],"2h":[4,8],"2h_":8,"2h_i":8,"2x_":8,"2x_i":8,"3":[3,7,8,10],"30":13,"32":7,"32bit":7,"3l":8,"4":[4,8,10,12],"5":[4,8,10],"6":8,"64bit":7,"672x":2,"8":0,"8a":6,"94":4,"95":4,"9999":7,"999999999998":7,"\u00b5m":[4,7],"\u0148":10,"\u0148_z":10,"abstract":[4,7],"byte":7,"case":[0,4],"class":[0,2,3,4,5,7,8,9,10,13],"default":[0,4,5,6,7,8,10,13],"do":[0,7],"export":[3,7],"float":[4,5,7,8,10],"function":[0,2,4,5,6,8,9,10],"import":[0,2,13],"int":[4,5,6,7,8,10],"long":[4,7],"m\u00fcser":13,"new":[0,7,8,13],"return":[4,5,6,7,8,10,13],"short":[4,7,8,10],"static":4,"true":[0,4,10],"try":[3,5],"var":[5,8,10],"while":7,A:[5,6,7,8,9,10],By:13,For:[0,4,7,10,12,13],If:[0,2,3,4,5,7,8,10,13],In:[0,4,7],It:[0,2,7],NO:7,NOT:7,No:13,TO:7,The:[0,3,4,5,6,7,8,10,13],Then:8,There:[4,13],These:[5,7,8,10,13],To:[0,1,12],WITH:7,With:10,_:10,__init__:7,_build:0,_file:7,_function:4,a_k:8,a_l:8,a_xi:10,aa51f8:2,abl:[5,7,8,10],about:7,abov:8,absolut:[7,10],abspo:7,abstracttopographi:4,access:[7,9,13],accord:7,acf:[8,10],achiev:4,acquir:7,acquisition_tim:4,across:13,actual:[4,7],ad:0,adapt:3,add:[0,10],addit:[4,6,7,13],address:0,adhes:13,adjac:4,adjust:4,affect:7,affin:4,after:[0,4,13],again:0,against:13,al:4,algorithm:[4,8],all:[0,3,4,5,7,8,10,13],allow:[7,8,10],almost:0,along:[7,10],alreadi:[3,7],also:[0,7,13],alt_msg:7,altern:[4,9,10,13],although:7,alwai:[0,7,13],ambigu:10,amplitud:[4,10],amplitude_distribut:4,amplitudeerror:7,an:[0,4,5,7,8,10,13],analysi:[2,5,8,10],analyz:[2,8,10],ani:[0,1,4,13],anoth:0,api:0,apidoc:0,append:[7,13],appli:[4,5,7,8,10],applic:[7,8,10],apply_window:8,appropri:7,approx:8,approxim:[4,8],ar:[0,1,4,5,6,7,8,10,12,13],area:[7,13],area_per_pt:[4,7],areal:10,arg:[4,5,7,9,10],arg_min:10,argument:[5,7,8,10],around:4,arr:10,arr_out:10,arrai:[4,5,6,7,8,10,13],array_lik:[4,8,10],artefact:7,ascend:8,aspect:4,assert:10,assertionerror:10,associ:[5,7],assum:[8,10,13],assumpt:5,aswel:7,attribut:7,author:2,autocorrel:[2,4,5,6,7,11],autocorrelation_1d:6,autocorrelation_2d:6,autocorrelation_from_area:10,autocorrelation_from_profil:[5,8,10],autom:12,automat:[0,3,4,6,8,10],auxiliari:4,avail:[3,7,13],averag:[4,5,6,10,13],awai:4,ax:[0,7,13],axi:7,bandwidth:[2,8,10],base:[0,4,5,7,9,10],basic:[2,13],becaus:[0,4,6,7,10],been:[7,8,13],befor:[0,5,8,10,13],begin:[4,6,10],behaviour:0,belong:0,below:[4,7,10,13],between:[4,7,8,13],beyond:12,bicub:[3,10],bicubic_interpol:10,big:10,bin:[4,6,8,10],bin_edg:[4,10],binari:7,block:0,bool:[4,7,10],both:[4,6,10,13],bound:[8,10],boundari:[4,7,8,10],branch:2,brute:8,buf:7,buffer:7,bug:0,build:[0,1,3,12],build_matrix:7,c0:4,c:[4,5,7,8],c_0:4,c_all:10,c_r:4,c_xy:4,calcul:[7,13],call:[0,4,7,8],callabl:[5,8,10],can:[0,2,3,4,5,6,7,8,10,12,13],cannot:7,cannotdetectfileformat:7,care:0,carri:[5,8,10,13],cartesian:[10,13],cd:0,cdot:4,center:4,centr:4,central:8,certain:[5,9,13],ch:13,challeng:13,chang:0,changelog:0,channel:[7,13],channel_index:7,channelinfo:7,characterist:[5,8,10],check:7,checkerboard:[8,10],checkerboard_detrend_area:10,checkerboard_detrend_profil:[8,10],child:4,choos:[7,10,12],ci:0,circl:4,circular:10,cite:2,class_nam:7,classmethod:[4,5,7],cleaner:0,clone:3,close:7,closest:8,cmap:7,co:8,code:[1,2,5,13],coeff:[4,10],coeffici:8,color:7,colorbar:0,colormap:7,com:3,combin:4,comm:[0,7],comm_seri:0,comm_world:0,command:[3,13],commandlin:13,comminc:0,commit:2,common:11,commun:[0,4,7,10],compar:13,compat:[0,4],compil:[1,2,3],complex:13,compon:10,compound_topographi:4,compoundtopographi:4,compress:4,comput:[4,5,6,8,10,12,13],computationalmechan:3,concaten:13,conden:4,configur:0,conftest:0,conjug:13,connect:[8,13],consecut:4,consist:4,constrain:13,constraint:13,construct:[4,5,8,10],contact:13,contain:[0,1,2,4,6,7,8,10,11,13],content:[0,11],context:7,contribut:[1,2,8],conveni:4,convent:7,convers:4,convert:[5,8,10,11],coordin:[4,13],copi:9,copyright:0,correct:[4,7,8,10],correspond:[4,8,10,13],corruptfil:7,cosinu:10,cosinusoid:10,could:0,cpp:3,cppflag:3,creat:[0,4,7],create_meta:7,creation:0,current:[3,4,7,13],curvatur:[4,10,11,13],cutoff:[4,8,10],cutoff_wavelength:10,cutoff_wavevector:10,cython:[0,1],d:[8,9,10],data:[2,4,5,6,7,8,10],datafil:5,datafile_kei:5,dataset:5,date:4,datetim:4,deal:0,debug:12,decompos:10,decomposed_topographi:10,decomposit:[4,7,8,10],decor:7,decoratednonuniformtopographi:4,decoratedtopographi:4,decorateduniformtopographi:[4,10],deep:7,def:0,default_channel:[7,13],defin:[0,4,7,10,13],deform:[4,13],deg:8,degre:8,dektakbuf:7,dektakitem:7,dektakitemdata:7,dektakmatrix:7,dektakquantunit:7,dektakrawpos1d:7,dektakrawpos2d:7,delta:8,densiti:[4,8,10],depend:[3,6,7,13],deprec:[4,11],deprecateddictionari:9,deriv:[5,8,10],describ:[4,7,13],descript:[0,4,7],design:13,detect:7,detect_format:7,determin:[4,6,7,8,10],detrend:[4,11,13],detrend_mod:[4,13],detrendednonuniformtopographi:4,detrendeduniformtopographi:4,develop:[2,12],dft:10,di:[4,11],dict:[4,6,7,9],dictionari:[4,7,9],differ:[5,7,8,10],dim:[4,7,10,13],dimens:[7,10,13],dimension:[4,6,8,10,13],dimensionless:6,diread:7,direct:[2,4,5,7,8,10,13],directli:[4,7],directoi:3,directori:[2,7,12],discard:[6,10],disk:7,distanc:[4,5,6,8,10],distribut:4,divid:7,divisor:7,doc:[0,7],document:[7,13],doe:[8,13],doesn:[0,7],dof:10,doi:2,domain:[7,8,10],domain_decompos:10,don:4,doubl:7,down:[8,10],dq:[4,8],dsinc:8,due:7,dure:[3,13],dx:[5,8,10],dy:[5,8,10],dzi:[4,11],e:[0,1,3,4,5,7,8,10,13],each:[5,7,8,10,13],easili:2,edg:[4,10],edu:10,effect:10,efficient:0,either:[4,7,8,10,13],elast:13,element:[7,8,10],elimin:10,els:4,email:0,emit:9,emul:7,end:[4,6,10,13],enh:0,enhanc:0,entri:[4,7],env:[0,1],environ:[0,1,3],equal:[4,5,7,8,10],equat:[4,6,8,10],error:[4,7],et:4,etc:[4,7],eu:7,even:[4,10],everytim:13,exactli:8,exampl:[0,4,5,7,8,10,13],except:[4,7],exclus:13,execut:[0,4,5,12,13],exist:[5,8],expand:8,expect:[3,13],experienc:3,experiment:2,expicit:10,explanatori:4,explicitli:[4,10],explict:0,expon:4,expos:13,express:4,extens:7,extra:7,extract:[4,7],f:8,factor:[4,7,8,10,13],fail:3,fals:[0,4,7,10],far:4,featur:[0,13],fed:[5,8,10],few:4,fft:[4,8,10],fftfreq:10,ffttrick:11,fftw3:3,fftwdir:3,field:[4,10],fig:0,file:[0,4,5,7,13],file_format_exampl:13,file_path:7,fileformatmismatch:7,fileionetcdf:3,filelik:7,filenam:7,fill:7,fill_valu:10,filledtopographi:10,filter:[2,4,7,11],filter_funct:10,filtered_topographi:10,filtereduniformtopographi:10,find:[3,13],find_1d_data:7,find_2d_data:7,find_2d_data_matrix:7,finer:[8,10],finit:[8,10],first:[7,8,10,13],fit:[4,10],fix:[0,5,7,8,10],fixm:7,fixtur:0,flag:[10,12],flat:[4,13],fluctuat:8,fmt:4,fn:[5,7],fname:[4,7],fobj:7,folder:[0,13],follow:[0,3,4,7,8,10,12,13],forc:[0,4,8],format:[4,7],found:[0,4,7],fouri:4,fourier:[4,8,10],fourier_deriv:10,fourier_synthesi:4,frac:[4,8,10],fractal:4,free:10,frequenc:10,frequenca:10,from:[0,2,4,5,7,10,13],fromfil:[4,11],front:13,ft_one_sided_triangl:8,ft_rectangl:8,full:[4,7,8,10,13],full_output:10,fulli:13,func:[5,7,8,10],funcion:0,g:[0,1,3,7,13],gener:[0,7,11],geometr:4,geometri:4,get:[7,10,13],get_siz:0,get_unit_conversion_factor:4,get_window:10,get_window_2d:4,git:3,github:[3,7],give:[4,5,7,8],given:[4,5,6,7,8,10,13],global:7,go:12,good:[0,13],gradient:[10,13],grid:[4,7,8,10,13],gwyddion:13,h0:10,h5:[4,11],h5reader:7,h:[4,8,10,13],h_0:10,h_:[6,8,10],h_i:[8,10],ha:[4,7,8,13],half:10,halfspac:4,handl:[2,7,10],hann:[4,8,10],happen:0,hard:[4,13],hard_wal:13,has_undefined_data:[4,10],hash:7,hash_tabl:7,have:[0,3,4,5,7,8,10,12,13],header:7,height:[2,4,5,7,8,10,13],height_difference_autocorrel:8,height_height_autocorrel:8,height_scale_factor:[4,7],heightcontain:[7,11],help:13,helper:[4,8,10],henc:8,here:[3,4,7,8,10,13],heurist:7,hex:7,hgtreader:7,hierarchi:4,ho:4,ho_:4,hold:[7,10],home:3,homebrew:3,homogen:[5,8,10,13],horizont:10,how:[8,13],html:[0,7],http:[2,3,7,10],hurst:4,i:[3,4,5,8,10],ibw:[4,11],ibwread:7,idea:[0,10],ideal:4,ident:[5,7,8,10],identifi:7,ignor:[4,5,8,10],imag:[7,10,13],imaginari:10,immedi:4,impenetr:13,implement:[0,2,3,7,10,13],imshow:[7,13],imtol:10,includ:[0,3,7],incompat:0,increasingli:[8,10],independ:[5,7,8,10],index:[0,2,7,10],indic:[0,13],individu:[7,8,10,13],inf:[4,7,10],info:[4,7,10,13],inform:[0,4,7,8,10,13],infti:4,initi:4,input:[7,8,10],inspect:7,instal:[0,1,2,13],instanc:7,instanti:[4,7],instead:[0,7],int_0:8,int_:[4,8],integ:[7,10],integr:[8,13],inter:7,interact:[4,13],interfac:[4,7,13],interol:10,interpol:[8,11,13],interpolate_fouri:10,interpret:[0,1,7,10,13],intracomm:[4,7],invert:7,invok:3,io:[2,4,11],ipython:13,is_binary_stream:7,is_domain_decompos:4,is_filter_isotrop:10,is_mpi:4,is_period:[4,7,10],is_uniform:4,is_unit:7,iso:4,isotrop:10,item:7,its:[0,7],itself:[4,7],j:4,jacob:[2,4],jpg:7,jung:[2,4],jupyt:13,just:[0,4,13],k:[8,10],keep:7,keer:13,kei:[4,5,7,9],keyenc:7,keyword:[6,7],kfn:4,kind:[4,10],kl:10,know:13,known:13,kw:7,kwarg:[4,5,6,7,9],l:[3,8,10],label:[0,7,13],lambda:[0,4,5,6,8,10],lapack:2,laplacian:10,larg:4,large_wavelength_cutoff:0,later:[4,10,13],latter:0,layout:4,ldflag:3,lead:[3,10,13],left:[4,6,7,8,10,13],length:[4,6,7,8,10],less:10,let:0,level:7,lib:[3,7],librari:3,like:13,line:[0,3,4,5,7,8,10,13],line_scan:[7,8],linear:[4,8,10,13],link:3,list:[4,5,7,8,10,13],live:[4,13],ll:4,load:[7,13],local:[3,10],locat:[7,10],location_matrix:10,log:[0,4,8,10],log_factor:4,long_cutoff:4,longcut_filtered_topographi:10,longcuttopographi:10,lower:[7,8,10,13],lower_bound:[8,10],m:[3,8,10],maco:3,made:[7,10],magnif:[8,10],mai:[3,7,13],main:[8,10,12],maint:0,mainten:0,make:[0,1,4,7,10],make_fft:4,make_spher:4,make_wrapped_read:7,manag:7,mangle_length_unit_ascii:4,mangle_length_unit_utf8:4,map:[4,5,6,7,8,10,13],mark:[0,13],markdown:7,martin:13,mask:[4,7,10],mask_funct:10,mask_undefin:7,match:7,math:[4,8,10],matlab:[4,11],matplotlib:[0,7,10,13],matread:7,matrix:7,matter:4,max:8,maximum:[4,8,10],maxval:7,mayb:4,mean:[4,8,10,13],measur:[4,7,13],mechan:13,member:4,memori:[4,7],messag:7,meta:[5,7,13],metadata:[5,7,13],metadataalreadydefin:7,metadataalreadyfixedbyfil:7,method:[0,3,7,13],metrol:[2,4],mi:[4,11],mifil:7,might:4,min:8,min_:8,minim:[4,8,10],minimum:[4,8,10],minor:0,miread:7,mirror:[7,10],mirrorstichedtopographi:10,miss:3,mistak:7,mit:10,mixtur:[5,8,10],mode:[4,7],modifi:[0,1,13],modul:[2,11,13],more:[7,10,13],mpi4pi:[4,7,10],mpi:[4,7,10],mpirun:12,mpistub:[4,7],mufft:[3,4,10],multidimension:10,multipl:[5,7,10],multipli:[4,7,10],muspectr:3,must:[0,4,5,7,8,10],my_surfac:13,n:[4,5,7,8,10],n_x:10,n_y:10,n_z:10,name:[0,4,5,7,8,10,13],nan:7,navig:0,nb_grid_pt:[4,7,8,10,13],nb_grid_pts_cutoff:[8,10],nb_interpol:[4,8],nb_point:4,nb_subdomain_grid_pt:[4,7,10],nbin:[4,6,10],nbyte:7,nc:[4,11],ncreader:7,ndarrai:[4,5,8,10],necessari:7,need:[0,1,3,4,5,7,8,10,13],netcdf3_64bit_offset:7,netcdf:[3,5,7],netcdfdir:3,newest:3,next:7,nicer:7,niquist:10,nm:[4,7],non:[4,10],none:[4,5,6,7,8,9,10],nonoverlap:[8,10],nonperiod:[8,10],nonuniform:[2,4,6,7,10,11,13],nonuniformlinescan:[8,11],nonuniformlinescaninterfac:4,nonuniformtopographi:13,normal:[4,10],normalize_window:10,note:[0,1,3,4,6,7,10,13],now:[0,4,7,10],np:[4,5,7,8,10,12],npy:[4,11],npyread:7,number:[0,4,6,7,8,10,12,13],numer:4,numpi:[3,4,7,10],numpydoc:0,numpytxttopographi:4,nx:4,ny:4,nyquist:10,o:[0,8],obj:[5,7,8],object:[4,5,7,8,10],obtain:[4,7,13],obviou:7,offer:7,offset:4,often:[0,3,7],older:0,omit:8,onc:0,one:[0,3,4,6,7,8,10,12,13],onli:[0,4,5,7,8,10,13],onto:4,opd:13,opdread:7,opdx:[4,11],opdxread:7,open:[5,7],open_topographi:[7,13],openbla:2,openfromani:7,opengp:7,openseadragon:7,oper:[8,10,13],opt:3,option:[3,4,5,7,8,10,12,13],order:[0,4,5,7,8,10],org:[2,7],origin:[5,7,10,13],oscil:10,other:[3,4,7,12,13],otherwis:[4,10],out:[5,7,8,10,13],output:[5,7,8,10,13],outsid:4,over:[5,7,10,13],overlap:7,overrid:[7,10],overridden:7,oversubscrib:12,overwrit:13,overwritten:7,own:[0,4,13],p:[8,10],packag:11,pad:[4,10],page:2,pai:4,paraboloid:4,parallel:[0,3,7],paralleliz:12,param:7,paramet:[0,1,3,4,5,6,7,8,10],parameter:[8,10],parent:4,parent_topographi:10,part:[7,10],parti:7,partial:[8,10],particular:3,pass:[0,4,6,7,8],pastewka:[2,4],path:[0,1,3,7],pcolormesh:[0,7,13],pdb:12,pdf:10,pep:0,per:[4,7,10,12],perform:[4,8,10],period:[4,7,8,10],periodicfftelastichalfspac:0,perpendicular:13,phase:10,phy:4,phyiscal:7,physic:[4,7,10],physical_s:[4,7,8,10,13],pi:[4,8,10],piec:8,pip:2,pipelin:[4,5,8,10],pixel:[4,7,8,10],pixel_s:[4,7],pkg_config_path:3,pkgconfig:3,place:7,plan:1,plane:[4,8,10],plastic:4,plastic_area:4,plastic_displ:4,plastic_topographi:4,plastictopographi:4,pleas:[0,1,2],plot:[7,10,13],plt:[0,7,13],pnetcdfdir:3,png:7,po:7,point:[4,6,7,8,10,13],polonski:13,polyfit:8,polynomi:[4,8,10],portion:[0,1],posit:[4,7,8,10,13],position_scale_factor:4,positions_and_height:[4,7,13],possibl:[4,5,10,13],power:[2,4,8,10,13],power_spectrum:8,power_spectrum_1d:13,power_spectrum_2d:13,power_spectrum_from_area:10,power_spectrum_from_profil:10,powerspectrum:[4,11],prefactor:4,prefix:7,prepend:0,prescrib:7,present:[4,7,8,10,13],pressur:0,previou:0,previous:7,price:4,primari:7,primary_channel_nam:7,prime:6,prime_:8,print:[0,13],probabl:[3,7],problem:[2,8],process:[4,7,10,13],process_head:7,processor:[0,7,12],product:7,profil:[4,7,10,13],program:7,progress:4,progress_callback:4,prop:[2,4],properti:[4,5,7,8,10,13],provid:[3,4,5,7,13],psd:[4,7,8,13],pseudo:13,publication_url:5,pull:3,purpos:[0,1,2,12],put:8,py:[0,1,3,12,13],pyco:[0,1,4],pyplot:[0,13],pytest:[0,12],pytestmark:0,python3:[0,1,3],python:[0,1,2,3,12,13],pyx:[0,1],q:[4,7,8,10],q_x:10,q_y:10,quadrant:4,quadrat:[4,10],quantiti:[4,7],quantunit:7,quarter:4,question:13,qx:10,qy:10,r:[3,4,6,7,8,10],r_averag:4,r_edg:4,rac:4,radial:[4,6,10,13],radial_averag:4,radiu:4,rais:[4,7,9,10],ramisetti:4,random:4,randomli:4,rang:4,rather:[0,13],ratio:4,raw:[5,7,13],re:7,read:[1,2,5,7,13],read_contain:5,read_dimension2d_cont:7,read_doubl:7,read_float:7,read_header_imag:7,read_header_spect:7,read_hgt:7,read_int16:7,read_int32:7,read_int64:7,read_item:7,read_nam:7,read_named_struct:7,read_opd:7,read_published_contain:5,read_quantunit_cont:7,read_structur:7,read_topographi:[7,13],read_varlen:7,read_with_check:7,read_x3p:7,readabl:7,reader:[4,11,13],reader_func:7,readerbas:7,readfileerror:7,readi:0,real:[4,8],realiz:4,reason:0,reciproc:10,rectangl:[8,10],recurs:7,reduc:8,refer:[4,7],reformat:7,reformat_dict:7,register_funct:[4,5],relev:7,remov:[0,4,7],render:7,repeat:[4,7,10],report:4,repositori:3,repres:[4,5,7],represent:[4,13],request:7,requir:[3,7,10],rescal:[4,8,10,13],resolut:[4,7],respect:[4,7,8,10],restructuredtext:0,result:[0,4,5,8,10],return_map:10,return_plan:10,rewrit:0,rf:0,rfn:4,rich:[2,13],right:[4,6,8,10],rigid:13,rm:[0,2,4,6,8,10,13],rmax:[4,10],rms_curvatur:[8,10],rms_curvature_from_area:[10,13],rms_curvature_from_profil:[10,13],rms_gradient:[10,13],rms_height:[4,8,10],rms_height_from_area:[10,13],rms_height_from_profil:[10,13],rms_laplacian:10,rms_slope:[4,8,10],rms_slope_from_profil:[10,13],robust:7,rolloff:4,root:[0,4,7,8,10,13],root_directori:7,rotation:4,rough:[4,8,10],rq:[10,13],run:[0,1,3,12,13],runner:0,runtest:[0,3,12],s:[3,5,7,8,10,13],sai:0,same:[0,4,5,7,8,10],save:[4,7],save_npi:7,savetxt:7,scalar:[5,8,10,13],scalarparamet:[4,11],scale:[4,5,6,7,8,10,13],scale_dependent_curvature_from_area:6,scale_dependent_curvature_from_profil:6,scale_dependent_slope_from_area:6,scale_dependent_slope_from_profil:6,scale_dependent_statistical_properti:[5,8,10],scale_factor:[4,8,10],scaledependentstatist:[4,11],scalednonuniformtopographi:4,scaleduniformtopographi:4,scan:[0,4,5,7,8,10,13],scheme:10,scipi:[7,10],script:[0,1,13],search:[2,8],second:[5,7,8,10],section:[8,10,13],see:[0,4,7,8,10],seem:7,seen:13,segement:8,self:[4,7,8],self_affine_prefactor:4,seri:8,serial:[0,3,4],set:[0,1,2,3,4,5,6,7,8,10,13],setup:[0,1,3],sever:7,sh:[0,1],shallow:9,shape:10,shift:10,shift_and_tilt:10,short_cutoff:[4,8],short_wavelength_cutoff:10,shortcut:0,shortcut_filtered_topographi:10,shortcuttopographi:10,shortest:8,should:[0,5,7],show:0,side:8,sign:7,signal:[4,10],similar:[4,10,13],simpl:[4,10],simplest:7,simultan:7,sin:8,sinc:[7,8],singl:[0,7,10],size:[4,5,7,8,10],size_i:7,size_x:7,skipif:0,slice:[7,10],slightli:0,slope:[4,8,10,11,13],small:[4,8,10],smaller:[6,10],so:[3,7,10],soft:13,soft_wal:13,softwar:13,solut:[10,13],solv:8,solver:13,some:[2,7,13],sometim:3,sort:8,sourc:[0,1,2,4,5,6,7,8,9,10,12],space:[4,8,10,13],special:[2,7,11],specif:[4,5,8,10],specifi:[0,1,3,4,7,8,10],spectral:[4,8,10],spectrum:[2,4,10,13],sphere:4,sphinx:0,split:10,sq:[10,13],sqrt:[4,10,13],squar:[4,8,10,13],squeez:[4,5,13],stai:4,standard:[0,2,4,7],standoff:4,start:[0,5,7,13],state:7,statement:0,staticallyscalednonuniformtopographi:4,staticallyscaleduniformtopographi:4,statist:[2,5,8,10],statistical_fingerprint:[5,8,10],stencil:[8,10],step:[7,10],stevenj:10,store:[4,6,8,10],str:[4,5,7,8,10],straight:[8,13],stream:[5,7],string:[0,4,7,13],stringify_plan:4,structur:[7,13],stub:[4,10,13],style:2,subclass:7,subdirectori:13,subdivid:[8,10],subdivided_line_scan:8,subdivis:[8,10],subdomain:[7,10],subdomain_loc:[4,7,10],subdomain_slic:4,submodul:11,subpackag:11,subplot:0,subplot_loc:10,subsequ:7,substract:[4,8,10],substrat:[0,13],subtract:[8,10],suffix:0,sum:10,sum_:[8,10],support:[4,8,11],sure:[0,1,4],surf:[2,4],surfac:[2,4,5,7,8,10],surface_contain:5,surfacecontain:[4,11],surfacetopographi:[1,13],symbol:[0,7],symmetr:4,syntax:0,system:[0,8,13],t:[0,4,7,8,10,13],tabl:7,tag:0,take:[0,5,8,10],taken:[8,13],techniqu:[2,7],test:[2,7,13],test_parallel:0,testabl:4,text:[4,6,8,10,11],th:8,than:[4,6,7,10,13],thei:[0,4,7,13],them:[3,8,10],therefor:13,thi:[0,1,2,4,5,6,7,8,10,13],thing:0,third:7,three:13,through:[4,13],tick:7,tild:[8,10],tile:7,tile_s:7,tilt:[8,10],tilt_and_curvatur:10,tilt_from_height:10,time:[4,8,10],togeth:13,tol:8,toler:[8,10],tool:13,top:[7,10],topgogr:4,topgographi:10,topo:13,topogaphi:[7,8,10],topogographi:4,topogr:2,topograpgi:7,topographi:[2,4,5,6,7,8,10],topography_a:4,topography_b:4,topographyinterfac:4,total:[8,10],track:7,tranpos:4,transform:[4,8,10],translat:4,translated_topographi:4,translatedtopographi:4,transposeduniformtopographi:4,treat:8,trend:[4,8,10],triangl:8,tricki:4,tst:0,tupl:[4,7,8,10],turn:[7,10],two:[4,6,8,10,13],txt:[3,7],type:[0,4,5,7,8,10],typic:[7,13],typo:0,ui:7,um:5,unabl:3,undefin:[4,7],undeform:4,undeformed_profil:4,under:13,underli:[4,5],understand:0,uniform:[2,4,6,8,11,13],uniformli:13,uniformlinescan:[4,6,8,10,13],uniformlinescanandtopographi:[10,11],uniformlyinterpolatedlinescan:4,uniformtopographi:[4,10],uniformtopographyinterfac:4,uninstal:3,uniqu:7,unit1:4,unit1_str:4,unit2:4,unit2_str:4,unit:[0,4,5,6,7,8,10,13],unitconvers:11,uniti:[8,10],unittest:0,unknownfileformatgiven:7,unspecifi:10,up:[0,1,8,13],updat:2,upper:[7,8,10],upper_bound:[8,10],upwind:10,us:[0,1,2,4,5,7,8,10,12,13],usag:2,useful:12,user:[3,8],usr:3,util:4,valu:[0,4,5,7,8,10,13],vanish:4,vari:0,variabl:[2,3,7,8,10],variable_bandwidth_from_area:10,variable_bandwidth_from_profil:[8,10],variablebandwidth:[4,11],variant:13,vector:10,veri:4,versa:4,version:[3,9],via:[3,13],vice:4,voltag:7,vs:7,wa:[3,4,7,13],wai:0,wall:13,want:4,warn:[4,7,9],wave:10,wavelength:[4,10],wavevector:8,we:[0,7,8,10],weight:5,well:[4,7],wether:7,what:0,when:[0,4,7,9,13],whenev:[0,1],where:[3,6,7,8,10],wherea:4,whether:[3,4,7,10],which:[0,1,5,7,8,10],whole:[0,10,13],window:[4,7,8,10,12],window_data:10,windowed_topographi:10,windoweduniformtopographi:10,wip:0,wise:8,within:[7,8,10],without:[0,1,6,7,10],work:[0,6,13],workflow:7,would:7,wrap:4,wrapasnonuniformlinescan:4,wrappedread:7,write:[2,5,7],write_contain:5,write_dzi:7,write_matrix:7,write_nc_nonuniform:7,write_nc_uniform:7,written:[0,5],x3p:7,x3preader:7,x:[4,5,7,8,10,13],x_:[8,10],x_i:[8,10],x_rang:4,xml:7,xre:7,xterm:12,xx:4,xy:[4,10],y:[4,5,7,8,10,13],y_j:10,yaml:5,ye:7,year:0,yield:[4,5,8,10],yml:5,you:[0,1,2,3,4,7,10,12,13],your:[0,3,4,12],yourself:0,yre:7,yy:4,zero:[4,10],zip:5,zon:[4,11],zonread:7,zoom:7,zoomabl:7,zsensor:7},titles:["Contributing to SurfaceTopography","Development","Welcome to SurfaceTopography\u2019s documentation!","Installation","SurfaceTopography package","SurfaceTopography.Container package","SurfaceTopography.Generic package","SurfaceTopography.IO package","SurfaceTopography.Nonuniform package","SurfaceTopography.Support package","SurfaceTopography.Uniform package","SurfaceTopography","Testing","Usage"],titleterms:{"function":13,analysi:13,author:0,autocorrel:[8,10],branch:0,code:0,commit:0,common:[4,7,8,10],compil:0,contain:5,content:[4,5,6,7,8,9,10],contribut:0,convert:4,curvatur:6,data:13,debug:0,deprec:9,detrend:[8,10],develop:[0,1],di:7,direct:3,directori:3,document:[0,2],dzi:7,ffttrick:4,filter:10,from:3,fromfil:7,gener:[4,6],h5:7,handl:13,heightcontain:4,ibw:7,indic:2,instal:3,interpol:[4,10],io:[5,7],lapack:3,matlab:7,mi:7,modul:[4,5,6,7,8,9,10],mpi:0,nc:7,nonuniform:8,nonuniformlinescan:4,note:2,npy:7,opdx:7,openbla:3,orient:13,packag:[2,4,5,6,7,8,9,10],pip:3,pipelin:13,plot:0,powerspectrum:[8,10],problem:3,reader:7,refer:2,s:2,scalarparamet:[8,10],scaledependentstatist:[5,8,10],slope:6,sourc:3,special:4,style:0,submodul:[4,5,6,7,8,9,10],subpackag:4,support:9,surfacecontain:5,surfacetopographi:[0,2,3,4,5,6,7,8,9,10,11],tabl:2,test:[0,12],text:7,topographi:13,uniform:10,uniformlinescanandtopographi:4,unitconvers:4,updat:3,usag:13,variablebandwidth:[8,10],welcom:2,write:0,zon:7}})