/*

var flare = {
 "name": "flare",
 "children": [
  {
   "name": "analytics",
   "children": [
    {
     "name": "cluster",
     "children": [
      {"name": "AgglomerativeCluster"},
      {"name": "CommunityStructure"},
      {"name": "HierarchicalCluster"},
      {"name": "MergeEdge"}
     ]
    },
    {
     "name": "graph",
     "children": [
      {"name": "BetweennessCentrality"},
      {"name": "LinkDistance"},
      {"name": "MaxFlowMinCut"},
      {"name": "ShortestPaths"},
      {"name": "SpanningTree"}
     ]
    },
    {
     "name": "optimization",
     "children": [
      {"name": "AspectRatioBanker"}
     ]
    }
   ]
  },
  {
   "name": "animate",
   "children": [
    {"name": "Easing"},
    {"name": "FunctionSequence"},
    {
     "name": "interpolate",
     "children": [
      {"name": "ArrayInterpolator"},
      {"name": "ColorInterpolator"},
      {"name": "DateInterpolator"},
      {"name": "Interpolator"},
      {"name": "MatrixInterpolator"},
      {"name": "NumberInterpolator"},
      {"name": "ObjectInterpolator"},
      {"name": "PointInterpolator"},
      {"name": "RectangleInterpolator"}
     ]
    },
    {"name": "ISchedulable"},
    {"name": "Parallel"},
    {"name": "Pause"},
    {"name": "Scheduler"},
    {"name": "Sequence"},
    {"name": "Transition"},
    {"name": "Transitioner"},
    {"name": "TransitionEvent"},
    {"name": "Tween"}
   ]
  },
  {
   "name": "data",
   "children": [
    {
     "name": "converters",
     "children": [
      {"name": "Converters"},
      {"name": "DelimitedTextConverter"},
      {"name": "GraphMLConverter"},
      {"name": "IDataConverter"},
      {"name": "JSONConverter"}
     ]
    },
    {"name": "DataField"},
    {"name": "DataSchema"},
    {"name": "DataSet"},
    {"name": "DataSource"},
    {"name": "DataTable"},
    {"name": "DataUtil"}
   ]
  },
  {
   "name": "display",
   "children": [
    {"name": "DirtySprite"},
    {"name": "LineSprite"},
    {"name": "RectSprite"},
    {"name": "TextSprite"}
   ]
  },
  {
   "name": "flex",
   "children": [
    {"name": "FlareVis"}
   ]
  },
  {
   "name": "physics",
   "children": [
    {"name": "DragForce"},
    {"name": "GravityForce"},
    {"name": "IForce"},
    {"name": "NBodyForce"},
    {"name": "Particle"},
    {"name": "Simulation"},
    {"name": "Spring"},
    {"name": "SpringForce"}
   ]
  },
  {
   "name": "query",
   "children": [
    {"name": "AggregateExpression"},
    {"name": "And"},
    {"name": "Arithmetic"},
    {"name": "Average"},
    {"name": "BinaryExpression"},
    {"name": "Comparison"},
    {"name": "CompositeExpression"},
    {"name": "Count"},
    {"name": "DateUtil"},
    {"name": "Distinct"},
    {"name": "Expression"},
    {"name": "ExpressionIterator"},
    {"name": "Fn"},
    {"name": "If"},
    {"name": "IsA"},
    {"name": "Literal"},
    {"name": "Match"},
    {"name": "Maximum"},
    {
     "name": "methods",
     "children": [
      {"name": "add"},
      {"name": "and"},
      {"name": "average"},
      {"name": "count"},
      {"name": "distinct"},
      {"name": "div"},
      {"name": "eq"},
      {"name": "fn"},
      {"name": "gt"},
      {"name": "gte"},
      {"name": "iff"},
      {"name": "isa"},
      {"name": "lt"},
      {"name": "lte"},
      {"name": "max"},
      {"name": "min"},
      {"name": "mod"},
      {"name": "mul"},
      {"name": "neq"},
      {"name": "not"},
      {"name": "or"},
      {"name": "orderby"},
      {"name": "range"},
      {"name": "select"},
      {"name": "stddev"},
      {"name": "sub"},
      {"name": "sum"},
      {"name": "update"},
      {"name": "variance"},
      {"name": "where"},
      {"name": "xor"},
      {"name": "_"}
     ]
    },
    {"name": "Minimum"},
    {"name": "Not"},
    {"name": "Or"},
    {"name": "Query"},
    {"name": "Range"},
    {"name": "StringUtil"},
    {"name": "Sum"},
    {"name": "Variable"},
    {"name": "Variance"},
    {"name": "Xor"}
   ]
  },
  {
   "name": "scale",
   "children": [
    {"name": "IScaleMap"},
    {"name": "LinearScale"},
    {"name": "LogScale"},
    {"name": "OrdinalScale"},
    {"name": "QuantileScale"},
    {"name": "QuantitativeScale"},
    {"name": "RootScale"},
    {"name": "Scale"},
    {"name": "ScaleType"},
    {"name": "TimeScale"}
   ]
  },
  {
   "name": "util",
   "children": [
    {"name": "Arrays"},
    {"name": "Colors"},
    {"name": "Dates"},
    {"name": "Displays"},
    {"name": "Filter"},
    {"name": "Geometry"},
    {
     "name": "heap",
     "children": [
      {"name": "FibonacciHeap"},
      {"name": "HeapNode"}
     ]
    },
    {"name": "IEvaluable"},
    {"name": "IPredicate"},
    {"name": "IValueProxy"},
    {
     "name": "math",
     "children": [
      {"name": "DenseMatrix"},
      {"name": "IMatrix"},
      {"name": "SparseMatrix"}
     ]
    },
    {"name": "Maths"},
    {"name": "Orientation"},
    {
     "name": "palette",
     "children": [
      {"name": "ColorPalette"},
      {"name": "Palette"},
      {"name": "ShapePalette"},
      {"name": "SizePalette"}
     ]
    },
    {"name": "Property"},
    {"name": "Shapes"},
    {"name": "Sort"},
    {"name": "Stats"},
    {"name": "Strings"}
   ]
  },
  {
   "name": "vis",
   "children": [
    {
     "name": "axis",
     "children": [
      {"name": "Axes"},
      {"name": "Axis"},
      {"name": "AxisGridLine"},
      {"name": "AxisLabel"},
      {"name": "CartesianAxes"}
     ]
    },
    {
     "name": "controls",
     "children": [
      {"name": "AnchorControl"},
      {"name": "ClickControl"},
      {"name": "Control"},
      {"name": "ControlList"},
      {"name": "DragControl"},
      {"name": "ExpandControl"},
      {"name": "HoverControl"},
      {"name": "IControl"},
      {"name": "PanZoomControl"},
      {"name": "SelectionControl"},
      {"name": "TooltipControl"}
     ]
    },
    {
     "name": "data",
     "children": [
      {"name": "Data"},
      {"name": "DataList"},
      {"name": "DataSprite"},
      {"name": "EdgeSprite"},
      {"name": "NodeSprite"},
      {
       "name": "render",
       "children": [
        {"name": "ArrowType"},
        {"name": "EdgeRenderer"},
        {"name": "IRenderer"},
        {"name": "ShapeRenderer"}
       ]
      },
      {"name": "ScaleBinding"},
      {"name": "Tree"},
      {"name": "TreeBuilder"}
     ]
    },
    {
     "name": "events",
     "children": [
      {"name": "DataEvent"},
      {"name": "SelectionEvent"},
      {"name": "TooltipEvent"},
      {"name": "VisualizationEvent"}
     ]
    },
    {
     "name": "legend",
     "children": [
      {"name": "Legend"},
      {"name": "LegendItem"},
      {"name": "LegendRange"}
     ]
    },
    {
     "name": "operator",
     "children": [
      {
       "name": "distortion",
       "children": [
        {"name": "BifocalDistortion"},
        {"name": "Distortion"},
        {"name": "FisheyeDistortion"}
       ]
      },
      {
       "name": "encoder",
       "children": [
        {"name": "ColorEncoder"},
        {"name": "Encoder"},
        {"name": "PropertyEncoder"},
        {"name": "ShapeEncoder"},
        {"name": "SizeEncoder"}
       ]
      },
      {
       "name": "filter",
       "children": [
        {"name": "FisheyeTreeFilter"},
        {"name": "GraphDistanceFilter"},
        {"name": "VisibilityFilter"}
       ]
      },
      {"name": "IOperator"},
      {
       "name": "label",
       "children": [
        {"name": "Labeler"},
        {"name": "RadialLabeler"},
        {"name": "StackedAreaLabeler"}
       ]
      },
      {
       "name": "layout",
       "children": [
        {"name": "AxisLayout"},
        {"name": "BundledEdgeRouter"},
        {"name": "CircleLayout"},
        {"name": "CirclePackingLayout"},
        {"name": "DendrogramLayout"},
        {"name": "ForceDirectedLayout"},
        {"name": "IcicleTreeLayout"},
        {"name": "IndentedTreeLayout"},
        {"name": "Layout"},
        {"name": "NodeLinkTreeLayout"},
        {"name": "PieLayout"},
        {"name": "RadialTreeLayout"},
        {"name": "RandomLayout"},
        {"name": "StackedAreaLayout"},
        {"name": "TreeMapLayout"}
       ]
      },
      {"name": "Operator"},
      {"name": "OperatorList"},
      {"name": "OperatorSequence"},
      {"name": "OperatorSwitch"},
      {"name": "SortOperator"}
     ]
    },
    {"name": "Visualization"}
   ]
  }
 ]
};
*/

var flare = {
    "name": "object",
    "children": [{
        "name": "ObjectWithParameters",
        "children": [{
                "name": "CommandWithParameters",
                "children": [{
                            "name": "CloneSubCommand"
                        }, {
                            "name": "CommandWithPositionalParameters",
                            "children": [{
                                    "name": "CommonContainerSubCommand",
                                    "children": [{
                                            "name": "CheckSubCommand"
                                        },
                                        {
                                            "name": "CreateSnapSubCommand"
                                        },
                                        {
                                            "name": "CreateSubCommand"
                                        },
                                        {
                                            "name": "DelAttrSubCommand"
                                        },
                                        {
                                            "name": "DeleteAclSubCommand"
                                        },
                                        {
                                            "name": "DestroySnapSubCommand"
                                        },
                                        {
                                            "name": "DestroySubCommand"
                                        },
                                        {
                                            "name": "GetAclSubCommand"
                                        },
                                        {
                                            "name": "GetAttrSubCommand"
                                        },
                                        {
                                            "name": "GetPropSubCommand"
                                        },
                                        {
                                            "name": "ListAttrsSubCommand"
                                        },
                                        {
                                            "name": "ListObjectsSubCommand"
                                        },
                                        {
                                            "name": "ListSnapsSubCommand"
                                        },
                                        {
                                            "name": "OverwriteAclSubCommand"
                                        },
                                        {
                                            "name": "QuerySubCommand"
                                        },
                                        {
                                            "name": "RollbackSubCommand"
                                        },
                                        {
                                            "name": "SetAttrSubCommand"
                                        },
                                        {
                                            "name": "SetOwnerSubCommand"
                                        },
                                        {
                                            "name": "SetPropSubCommand"
                                        },
                                        {
                                            "name": "StatSubCommand"
                                        },
                                        {
                                            "name": "UpdateAclSubCommand"
                                        },
                                    ]
                                },
                                {
                                    "name": "CommonPoolSubCommand"
                                },
                                {
                                    "name": "CommonPoolSubCommand",
                                    "children": [{
                                            "name": "AutotestSubCommand"
                                        },
                                        {
                                            "name": "GetAttrSubCommand"
                                        },
                                        {
                                            "name": "ListAttrsSubCommand"
                                        },
                                        {
                                            "name": "ListContainersSubCommand"
                                        },
                                        {
                                            "name": "QuerySubCommand"
                                        },
                                        {
                                            "name": "SetAttrSubCommand"
                                        },
                                        {
                                            "name": "StatSubCommand"
                                        },
                                    ]
                                },

                                {
                                    "name": "ListSubCommand"
                                },
                            ]
                        },
                        {
                            "name": "CommonFilesystemSubCommand",
                            "children": [{
                                "name": "CopySubCommand"
                            }, ]
                        },
                        {
                            "name": "CommonObjectSubCommand",
                            "children": [{
                                    "name": "DumpSubCommand"
                                },
                                {
                                    "name": "ListKeysSubCommand"
                                },
                                {
                                    "name": "QuerySubCommand"
                                },
                            ]
                        },
                        {
                            "name": "CreateSubCommand"
                        }, {
                            "name": "DeleteAclSubCommand"
                        }, {
                            "name": "DestroySubCommand"
                        }, {
                            "name": "DeviceHealthSubCommand"
                        }, {
                            "name": "DrainSubCommand"
                        }, {
                            "name": "EraseSubCommand"
                        }, {
                            "name": "EvictSubCommand"
                        }, {
                            "name": "ExcludeSubCommand"
                        }, {
                            "name": "ExecutableCommand",
                            "children": [{
                                    "name": "CartCtlCommand"
                                },
                                {
                                    "name": "CommandWithSubCommand",
                                    "children": [{
                                            "name": "ConfigSubCommand"
                                        },
                                        {
                                            "name": "ContSubCommand"
                                        },
                                        {
                                            "name": "ContainerSubCommand"
                                        },
                                        {
                                            "name": "DaosCommandBase"
                                        },
                                        {
                                            "name": "DumpAttachInfoSubCommand"
                                        },
                                        {
                                            "name": "FilesystemSubCommand"
                                        },
                                        {
                                            "name": "MetricsSubCommand"
                                        },
                                        {
                                            "name": "NetworkSubCommand"
                                        },
                                        {
                                            "name": "ObjectSubCommand"
                                        },
                                        {
                                            "name": "PoolSubCommand"
                                        },
                                        {
                                            "name": "PrepareSubCommand"
                                        },
                                        {
                                            "name": "QuerySubCommand"
                                        },
                                        {
                                            "name": "ScanSubCommand"
                                        },
                                        {
                                            "name": "SetSubCommand"
                                        },
                                        {
                                            "name": "StorageSubCommand"
                                        },
                                        {
                                            "name": "SubProcessCommand",
                                            "children": [{
                                                "name": "YamlCommand",
                                                "children": [{
                                                        "name": "DaosAgentCommand"
                                                    },
                                                    {
                                                        "name": "DaosServerCommand"
                                                    },
                                                    {
                                                        "name": "DmgCommandBase"
                                                    },
                                                ]
                                            }, ]
                                        },
                                        {
                                            "name": "SystemSubCommand"
                                        },
                                        {
                                            "name": "TelemetrySubCommand"
                                        },
                                    ]
                                },
                                {
                                    "name": "DaosPerfCommand"
                                },
                                {
                                    "name": "DaosRacerCommand"
                                },
                                {
                                    "name": "DbenchCommand"
                                },
                                {
                                    "name": "DfuseCommand"
                                },
                                {
                                    "name": "FioCommand"
                                },
                                {
                                    "name": "IoConfGen"
                                },
                                {
                                    "name": "IorCommand"
                                },
                                {
                                    "name": "JobManager",
                                    "children": [{
                                            "name": "Mpirun"
                                        },
                                        {
                                            "name": "Orterun"
                                        },
                                        {
                                            "name": "Srun"
                                        },
                                        {
                                            "name": "Systemctl"
                                        },
                                    ]
                                },
                                {
                                    "name": "MacsioCommand"
                                },
                                {
                                    "name": "MdtestCommand"
                                },
                                {
                                    "name": "MfuCommandBase",
                                    "children": [{
                                            "name": "DcpCommand"
                                        },
                                        {
                                            "name": "DdeserializeCommand"
                                        },
                                        {
                                            "name": "DserializeCommand"
                                        },
                                        {
                                            "name": "DsyncCommand"
                                        },
                                    ]
                                },
                                {
                                    "name": "SelfTest"
                                },
                                {
                                    "name": "SystemctlCommand"
                                },
                            ]
                        },
                        {
                            "name": "ExtendSubCommand"
                        }, {
                            "name": "FioJob"
                        }, {
                            "name": "FormatSubCommand"
                        }, {
                            "name": "GenerateSubCommand"
                        }, {
                            "name": "GetAclSubCommand"
                        }, {
                            "name": "LeaderQuerySubCommand"
                        }, {
                            "name": "ListDevicesSubCommand"
                        }, {
                            "name": "ListPoolsSubCommand"
                        }, {
                            "name": "ListSubCommand"
                        }, {
                            "name": "NvmeFaultySubCommand"
                        }, {
                            "name": "OverwriteAclSubCommand"
                        }, {
                            "name": "QuerySubCommand"
                        }, {
                            "name": "ReintegrateSubCommand"
                        }, {
                            "name": "ScanSubCommand"
                        }, {
                            "name": "SetPropSubCommand"
                        }, {
                            "name": "SetownerSubCommand"
                        }, {
                            "name": "StartSubCommand"
                        }, {
                            "name": "StopSubCommand"
                        }, {
                            "name": "TargetHealthSubCommand"
                        }, {
                            "name": "UpdateAclSubCommand"
                        },
                    {
                        "name": "ConfigurationParameters"
                    },
                    {
                        "name": "RebuildTestParams"
                    },
                    {
                        "name": "TestDaosApiBase",
                        "children": [{
                                "name": "TestContainer"
                            },
                            {
                                "name": "TestPool"
                            },
                        ]
                    },
                    {
                        "name": "YamlParameters",
                        "children": [{
                                "name": "CommonConfig"
                            },
                            {
                                "name": "DaosAgentYamlParameters"
                            },
                            {
                                "name": "DaosServerYamlParameters"
                            },
                            {
                                "name": "DmgYamlParameters"
                            },
                            {
                                "name": "PerEngineYamlParameters"
                            },
                            {
                                "name": "TransportCredentials",
                                "children": [{
                                        "name": "DaosAgentTransportCredentials"
                                    },
                                    {
                                        "name": "DaosServerTransportCredentials"
                                    },
                                    {
                                        "name": "DmgTransportCredentials"
                                    },
                                ]
                            },
                        ]
                    },
                ]
          },
          {
              "name": "avocadoTest",
              "children": [{
                      "name": "Test",
                      "children": [{
                              "name": "ApricotTests"
                          },
                          {
                              "name": "HarnessBasicTest"
                          },
                          {
                              "name": "HarnessTimeoutTest"
                          },
                          {
                              "name": "TestHarnessSkipsBase",
                              "children": [{
                                      "name": "TestHarnessSkipsRun"
                                  },
                                  {
                                      "name": "TestHarnessSkipsSkipped"
                                  },
                              ]
                          },
                          {
                              "name": "TestWithoutServers",
                              "children": [{
                                      "name": "CartTest",
                                      "children": [{
                                              "name": "CartCoRpcFiveNodeTest"
                                          },
                                          {
                                              "name": "CartCoRpcOneNodeTest"
                                          },
                                          {
                                              "name": "CartCoRpcTwoNodeTest"
                                          },
                                          {
                                              "name": "CartCtlFiveNodeTest"
                                          },
                                          {
                                              "name": "CartCtlOneNodeTest"
                                          },
                                          {
                                              "name": "CartIvOneNodeTest"
                                          },
                                          {
                                              "name": "CartIvTwoNodeTest"
                                          },
                                          {
                                              "name": "CartNoPmixLauncherOneNodeTest"
                                          },
                                          {
                                              "name": "CartNoPmixOneNodeTest"
                                          },
                                          {
                                              "name": "CartRpcOneNodeSwimNotificationOnRankEvictionTest"
                                          },
                                          {
                                              "name": "CartRpcOneNodeTest"
                                          },
                                          {
                                              "name": "CartRpcTwoNodeTest"
                                          },
                                          {
                                              "name": "CartSelfThreeNodeTest"
                                          },
                                          {
                                              "name": "GroupTest"
                                          },
                                      ]
                                  },
                                  {
                                      "name": "TestWithServers",
                                      "children": [{
                                              "name": "ArrayObjTest"
                                          },
                                          {
                                              "name": "BadConnectTest"
                                          },
                                          {
                                              "name": "BadCreateTest"
                                          },
                                          {
                                              "name": "BadEvictTest"
                                          },
                                          {
                                              "name": "BadQueryTest"
                                          },
                                          {
                                              "name": "BasicSnapshot"
                                          },
                                          {
                                              "name": "BasicTxTest"
                                          },
                                          {
                                              "name": "CartSelfTest"
                                          },
                                          {
                                              "name": "ConfigGenerateOutput"
                                          },
                                          {
                                              "name": "ConfigGenerateRun"
                                          },
                                          {
                                              "name": "ContSecurityTestBase",
                                              "children": [{
                                                      "name": "CreateContainterACLTest"
                                                  },
                                                  {
                                                      "name": "DaosContainterSecurityTest"
                                                  },
                                                  {
                                                      "name": "DeleteContainerACLTest"
                                                  },
                                                  {
                                                      "name": "GetContainerACLTest"
                                                  },
                                                  {
                                                      "name": "OverwriteContainerACLTest"
                                                  },
                                                  {
                                                      "name": "UpdateContainerACLTest"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "ContainerAsync"
                                          },
                                          {
                                              "name": "ContainerAttributeTest"
                                          },
                                          {
                                              "name": "ContainerAutotestTest"
                                          },
                                          {
                                              "name": "ContainerQueryAttributeTest"
                                          },
                                          {
                                              "name": "ControlTestBase",
                                              "children": [{
                                                      "name": "DmgPoolQueryTest"
                                                  },
                                                  {
                                                      "name": "DmgStorageQuery"
                                                  },
                                                  {
                                                      "name": "DmgStorageScanSCMTest"
                                                  },
                                                  {
                                                      "name": "DmgSystemLeaderQueryTest"
                                                  },
                                                  {
                                                      "name": "SSDSocketTest"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "CreateContainerTest"
                                          },
                                          {
                                              "name": "CreateManyDkeys"
                                          },
                                          {
                                              "name": "CsumContainerValidation"
                                          },
                                          {
                                              "name": "DaosAdminPrivTest"
                                          },
                                          {
                                              "name": "DaosAgentConfigTest"
                                          },
                                          {
                                              "name": "DaosControlConfigTest"
                                          },
                                          {
                                              "name": "DaosCoreBase",
                                              "children": [{
                                                      "name": "CsumErrorLog"
                                                  },
                                                  {
                                                      "name": "DaosCoreTest"
                                                  },
                                                  {
                                                      "name": "DaosCoreTestDfs"
                                                  },
                                                  {
                                                      "name": "DaosCoreTestNvme"
                                                  },
                                                  {
                                                      "name": "DaosCoreTestRebuild"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "DaosObjectQuery"
                                          },
                                          {
                                              "name": "DaosPerfBase",
                                              "children": [{
                                                      "name": "DaosPerf"
                                                  },
                                                  {
                                                      "name": "DaosPerfLarge"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "DaosRacerTest"
                                          },
                                          {
                                              "name": "DaosServerConfigTest"
                                          },
                                          {
                                              "name": "DaosServerDumpTest"
                                          },
                                          {
                                              "name": "DaosServerTest"
                                          },
                                          {
                                              "name": "DaosSnapshotTest"
                                          },
                                          {
                                              "name": "DeleteContainerTest"
                                          },
                                          {
                                              "name": "DestroyRebuild"
                                          },
                                          {
                                              "name": "DestroyTests"
                                          },
                                          {
                                              "name": "DfuseTestBase",
                                              "children": [{
                                                      "name": "Cmd"
                                                  },
                                                  {
                                                      "name": "DbenchTest"
                                                  },
                                                  {
                                                      "name": "DfuseContainerCheck"
                                                  },
                                                  {
                                                      "name": "Enospace"
                                                  },
                                                  {
                                                      "name": "FioBase",
                                                      "children": [{
                                                              "name": "Ecodtruncate"
                                                          },
                                                          {
                                                              "name": "ErasureCodeFio",
                                                              "children": [{
                                                                      "name": "EcodFioRebuild"
                                                                  },
                                                                  {
                                                                      "name": "EcodAggregationOff"
                                                                  },
                                                                  {
                                                                      "name": "EcodAggregationOffRebuild"
                                                                  },
                                                                  {
                                                                      "name": "EcodDisabledRebuild"
                                                                  },
                                                                  {
                                                                      "name": "EcodIorHardRebuild"
                                                                  },
                                                                  {
                                                                      "name": "EcodOfflineRebuild"
                                                                  },
                                                                  {
                                                                      "name": "EcodOnlineRebuild"
                                                                  },
                                                                  {
                                                                      "name": "EcodServerRestart"
                                                                  },
                                                              ]
                                                          },
                                                          {
                                                              "name": "FioSmall"
                                                          },
                                                          {
                                                              "name": "ParallelIo"
                                                          },
                                                      ]
                                                  },
                                                  {
                                                      "name": "IorTestBase",
                                                      "children": [{
                                                              "name": "AggregationChecksum"
                                                          },
                                                          {
                                                              "name": "CPUUsage"
                                                          },
                                                          {
                                                              "name": "CachingCheck"
                                                          },
                                                          {
                                                              "name": "CrashIor"
                                                          },
                                                          {
                                                              "name": "DaosAggregationBasic"
                                                          },
                                                          {
                                                              "name": "DaosAggregationIOSmall"
                                                          },
                                                          {
                                                              "name": "DaosAggregationThrottling"
                                                          },
                                                          {
                                                              "name": "DataMoverTestBase",
                                                              "children": [{
                                                                      "name": "DmvrCopyProcs"
                                                                  },
                                                                  {
                                                                      "name": "DmvrDstCreate"
                                                                  },
                                                                  {
                                                                      "name": "DmvrLargeDir"
                                                                  },
                                                                  {
                                                                      "name": "DmvrNegativeTest"
                                                                  },
                                                                  {
                                                                      "name": "DmvrObjLargePosix"
                                                                  },
                                                                  {
                                                                      "name": "DmvrObjSmallTest"
                                                                  },
                                                                  {
                                                                      "name": "DmvrPosixLargeFile"
                                                                  },
                                                                  {
                                                                      "name": "DmvrPosixMetaEntry"
                                                                  },
                                                                  {
                                                                      "name": "DmvrPosixSubsets"
                                                                  },
                                                                  {
                                                                      "name": "DmvrPosixSymlinks"
                                                                  },
                                                                  {
                                                                      "name": "DmvrPosixTypesTest"
                                                                  },
                                                                  {
                                                                      "name": "DmvrSerialLargePosix"
                                                                  },
                                                                  {
                                                                      "name": "DmvrSerialSmall"
                                                                  },
                                                              ]
                                                          },
                                                          {
                                                              "name": "DfuseSpaceCheck"
                                                          },
                                                          {
                                                              "name": "EcodCellSize"
                                                          },
                                                          {
                                                              "name": "EcodCellSizeProperty"
                                                          },
                                                          {
                                                              "name": "EcodIor"
                                                          },
                                                          {
                                                              "name": "IoAggregation"
                                                          },
                                                          {
                                                              "name": "IoConsistency"
                                                          },
                                                          {
                                                              "name": "IorHard"
                                                          },
                                                          {
                                                              "name": "IorHdf5"
                                                          },
                                                          {
                                                              "name": "IorIntercept"
                                                          },
                                                          {
                                                              "name": "IorInterceptDfuseMix"
                                                          },
                                                          {
                                                              "name": "IorInterceptMessages"
                                                          },
                                                          {
                                                              "name": "IorInterceptMultiClient"
                                                          },
                                                          {
                                                              "name": "IorInterceptVerifyDataIntegrity"
                                                          },
                                                          {
                                                              "name": "IorLarge"
                                                          },
                                                          {
                                                              "name": "IorSmall"
                                                          },
                                                          {
                                                              "name": "ListVerboseTest"
                                                          },
                                                          {
                                                              "name": "MultipleContainerDelete"
                                                          },
                                                          {
                                                              "name": "NvmeIo"
                                                          },
                                                          {
                                                              "name": "NvmeIoVerification"
                                                          },
                                                          {
                                                              "name": "POSIXStatTest"
                                                          },
                                                          {
                                                              "name": "RbldPoolDestroyWithIO"
                                                          },
                                                          {
                                                              "name": "RbldWithIOR"
                                                          },
                                                          {
                                                              "name": "SegCount"
                                                          },
                                                          {
                                                              "name": "ServerFillUp",
                                                              "children": [{
                                                                      "name": "ErasureCodeIor"
                                                                  },
                                                                  {
                                                                      "name": "NvmeEnospace"
                                                                  },
                                                                  {
                                                                      "name": "NvmeFault"
                                                                  },
                                                                  {
                                                                      "name": "NvmeHealth"
                                                                  },
                                                              ]
                                                          },
                                                          {
                                                              "name": "SnapshotAggregation"
                                                          },
                                                          {
                                                              "name": "SparseFile"
                                                          },
                                                          {
                                                              "name": "TelemetryPoolMetrics"
                                                          },
                                                          {
                                                              "name": "TestWithTelemetryIOBasic"
                                                          },
                                                      ]
                                                  },
                                                  {
                                                      "name": "MacsioTest"
                                                  },
                                                  {
                                                      "name": "MdtestBase",
                                                      "children": [{
                                                              "name": "AggregationPunching"
                                                          },
                                                          {
                                                              "name": "EcodMdtest"
                                                          },
                                                          {
                                                              "name": "ErasureCodeMdtest"
                                                          },
                                                          {
                                                              "name": "FileCountTestBase",
                                                              "children": [{
                                                                      "name": "LargeFileCount"
                                                                  },
                                                                  {
                                                                      "name": "SmallFileCount"
                                                                  },
                                                              ]
                                                          },
                                                          {
                                                              "name": "MdtestLarge"
                                                          },
                                                          {
                                                              "name": "MdtestSmall"
                                                          },
                                                          {
                                                              "name": "OSAUtils",
                                                              "children": [{
                                                                      "name": "NvmePoolExclude"
                                                                  },
                                                                  {
                                                                      "name": "NvmePoolExtend"
                                                                  },
                                                                  {
                                                                      "name": "OSADmgNegativeTest"
                                                                  },
                                                                  {
                                                                      "name": "OSAOfflineDrain"
                                                                  },
                                                                  {
                                                                      "name": "OSAOfflineExtend"
                                                                  },
                                                                  {
                                                                      "name": "OSAOfflineParallelTest"
                                                                  },
                                                                  {
                                                                      "name": "OSAOfflineReintegration"
                                                                  },
                                                                  {
                                                                      "name": "OSAOnlineDrain"
                                                                  },
                                                                  {
                                                                      "name": "OSAOnlineExtend"
                                                                  },
                                                                  {
                                                                      "name": "OSAOnlineParallelTest"
                                                                  },
                                                                  {
                                                                      "name": "OSAOnlineReintegration"
                                                                  },
                                                              ]
                                                          },

                                                          {
                                                              "name": "RbldWidelyStriped"
                                                          },
                                                      ]
                                                  },
                                                  {
                                                      "name": "RootContainerTest"
                                                  },
                                                  {
                                                      "name": "VolTestBase"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "DmgNetworkScanTest"
                                          },
                                          {
                                              "name": "DmgNvmeScanTest"
                                          },
                                          {
                                              "name": "DmgPoolEvictTest"
                                          },
                                          {
                                              "name": "DynamicServerPool"
                                          },
                                          {
                                              "name": "DynamicStartStop"
                                          },
                                          {
                                              "name": "ErasureCodeSingle",
                                              "children": [{
                                                      "name": "EcodDisabledRebuildSingle"
                                                  },
                                                  {
                                                      "name": "EcodOfflineRebuildSingle"
                                                  },
                                                  {
                                                      "name": "EcodOnlineRebuildSingle"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "EvictTests"
                                          },
                                          {
                                              "name": "FaultDomain"
                                          },
                                          {
                                              "name": "FullPoolContainerCreate"
                                          },
                                          {
                                              "name": "GlobalHandle"
                                          },
                                          {
                                              "name": "HarnessAdvancedTest"
                                          },
                                          {
                                              "name": "InfoTests"
                                          },
                                          {
                                              "name": "IoConfTestBase",
                                              "children": [{
                                                      "name": "DaosRunIoConf"
                                                  },
                                                  {
                                                      "name": "RbldRunIoConf"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "Label"
                                          },
                                          {
                                              "name": "ListContainerTest"
                                          },
                                          {
                                              "name": "ListPoolsTest"
                                          },
                                          {
                                              "name": "MacsioTestBase"
                                          },
                                          {
                                              "name": "ManagementServiceFailover"
                                          },
                                          {
                                              "name": "ManagementServiceResilience"
                                          },
                                          {
                                              "name": "MpiioTests",
                                              "children": [{
                                                      "name": "Hdf5"
                                                  },
                                                  {
                                                      "name": "LlnlMpi4py"
                                                  },
                                                  {
                                                      "name": "Romio"
                                                  },
                                              ]
                                          },

                                          {
                                              "name": "MultiServerCreateDeleteTest"
                                          },
                                          {
                                              "name": "NvmeFragmentation"
                                          },
                                          {
                                              "name": "NvmeObject"
                                          },
                                          {
                                              "name": "NvmePoolCapacity"
                                          },
                                          {
                                              "name": "ObjFetchBadParam"
                                          },
                                          {
                                              "name": "ObjOpenBadParam"
                                          },
                                          {
                                              "name": "ObjUpdateBadParam"
                                          },
                                          {
                                              "name": "ObjectDataValidation"
                                          },
                                          {
                                              "name": "ObjectMetadata"
                                          },
                                          {
                                              "name": "OpenClose"
                                          },
                                          {
                                              "name": "OpenContainerTest"
                                          },
                                          {
                                              "name": "Permission"
                                          },
                                          {
                                              "name": "PoolAttributeTest"
                                          },
                                          {
                                              "name": "PoolSecurityTest"
                                          },
                                          {
                                              "name": "PoolSecurityTestBase"
                                          },
                                          {
                                              "name": "PoolServicesFaultInjection"
                                          },
                                          {
                                              "name": "PoolSvc"
                                          },
                                          {
                                              "name": "PoolTestBase",
                                              "children": [{
                                                      "name": "DmgSystemReformatTest"
                                                  },
                                                  {
                                                      "name": "PoolCreateTests"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "PunchTest"
                                          },
                                          {
                                              "name": "QueryAttributeTest"
                                          },
                                          {
                                              "name": "RbldBasic"
                                          },
                                          {
                                              "name": "RbldContainerCreate"
                                          },
                                          {
                                              "name": "RbldNoCapacity"
                                          },
                                          {
                                              "name": "RbldWithIO"
                                          },
                                          {
                                              "name": "RebuildTestBase",
                                              "children": [{
                                                      "name": "ContRedundancyFactor",
                                                      "children": [{
                                                              "name": "ContRfEnforce"
                                                          },
                                                          {
                                                              "name": "RbldContRfTest"
                                                          },
                                                      ]
                                                  },
                                                  {
                                                      "name": "RbldCascadingFailures"
                                                  },
                                                  {
                                                      "name": "RbldDeleteObjects"
                                                  },
                                                  {
                                                      "name": "RbldReadArrayTest"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "SameKeyDifferentValue"
                                          },
                                          {
                                              "name": "SimpleCreateDeleteTest"
                                          },
                                          {
                                              "name": "Snapshot"
                                          },
                                          {
                                              "name": "SoakTestBase",
                                              "children": [{
                                                      "name": "SoakFaultInject"
                                                  },
                                                  {
                                                      "name": "SoakHarassers"
                                                  },
                                                  {
                                                      "name": "SoakSmoke"
                                                  },
                                                  {
                                                      "name": "SoakStress"
                                                  },
                                              ]
                                          },
                                          {
                                              "name": "SuperBlockVersioning"
                                          },
                                          {
                                              "name": "TestWithTelemetry",
                                              "children": [{
                                                      "name": "TestWithTelemetryBasic"
                                                  },
                                                  {
                                                      "name": "TestWithTelemetryNvme"
                                                  },
                                              ]
                                          },

                                          {
                                              "name": "UUIDCornerCase"
                                          },
                                          {
                                              "name": "ZeroConfigTest"
                                          },
                                      ]
                                  },
                                  {
                                      "name": "UnitTestWithoutServers"
                                  },
                              ]
                          },
                      ]
                  },

              ]
          }
        ]
    }]
};


var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;
    
var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//d3.json("/d/4063550/flare.json", function(error, flare) {
  root = flare;
  root.x0 = height / 2;
  root.y0 = 0;

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  root.children.forEach(collapse);
  update(root);
//});

d3.select(self.frameElement).style("height", "800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
    /*
    root.children.forEach(function(node) {
        console.log(node, d, node === d);
        //collapse(node);
    });*/
  update(d);
}

////////////////////////////////////////////////////
//
// Don't bother drawing classes with just one child.
//
////////////////////////////////////////////////////

// {
//    "name": "BasicParameter",
//   "children": [
//       {"name": "FormattedParameter"},
//       {"name": "PositionalParameter"},
//   ]
// },
// 
//   {
//    "name": "CartCtlCommand",
//   "children": [
//       {"name": "CartCtl"},
//   ]
// },
// 
//   {
//    "name": "DaosCommandBase",
//     "children": [
//       {"name": "DaosCommand"},
//     ]
// },
// 
//   {
//    "name": "DbenchCommand",
//     "children": [
//       {"name": "Dbench"},
//     ]
// },
// 
//   {
//    "name": "DfuseCommand",
//     "children": [
//       {"name": "Dfuse"},
//     ]
// },
// 
//   {
//    "name": "DmgCommandBase",
//     "children": [
//       {"name": "DmgCommand"},
//     ]
// },
// 
//   {
//    "name": "ErasureCodeMdtest",
//     "children": [
//       {"name": "EcodOnlineRebuildMdtest"},
//     ]
// },
//
//   {
//    "name": "PoolSecurityTestBase",
//     "children": [
//       {"name": "DaosRunPoolSecurityTest"},
//     ]
// },
// 
//   {
//    "name": "SubprocessManager",
//     "children": [
//       {"name": "DaosAgentManager"},
//       {"name": "DaosServerManager"},
//     ]
// },
// 
// 
//   {
//    "name": "VolTestBase",
//     "children": [
//       {"name": "DaosVol"},
//     ]
// },
//
//   {
//    "name": "dict",
//     "children": [
//       {"name": "EnvironmentVariables"},
//     ]
// },
// 
//   {
//    "name": "object",
//     "children": [
//       {"name": "TemporaryDirectory"},
//     ]
// },
// 
//   {
//    "name": "FormattedParameter",
//     "children": [
//       {"name": "LogParameter"},
//     ]
// },
// 
//   {
//    "name": "IntEnum",
//     "children": [
//       {"name": "IorMetrics"},
//     ]
// },

//////////////////////////////////
//
// Disconnected part of the graph.
//
//////////////////////////////////

//   {
//    "name": "Exception",
//     "children": [
//       {"name": "AutosizeCancel"},
//       {"name": "CommandFailure"},
//       {"name": "DaosIOFailed"},
//       {"name": "DaosTestError"},
//       {"name": "FaultInjectionFailed"},
//       {"name": "InvalidLogFile"},
//       {"name": "InvalidPid"},
//       {
//          "name": "LogCheckError",
//           "children": [
//             {"name": "ActiveDescriptors"},
//             {"name": "LogError"},
//             {"name": "NotAllFreed"},
//             {"name": "WarningMode"},
//             {"name": "WarningStrict"},
//           ]
//       },
// 
//       {"name": "MpioFailed"},
//       {"name": "ServerFailed"},
//       {"name": "SlurmFailed"},
//       {"name": "SoakTestError"},
//     ]
// },
