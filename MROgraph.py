#<MROgraph.py>

"""
Draw inheritance hierarchies via Dot (http://www.graphviz.org/)
Author: M. Simionato
E-mail: mis6@pitt.edu
Date: August 2003
License: Python-like
Requires: Python 2.3, dot, standard Unix tools  
"""

import os,itertools

PSVIEWER='gv'     # you may change these with
PNGVIEWER='kview' # your preferred viewers
PSFONT='Times'    # you may change these too
PNGFONT='Courier' # on my system PNGFONT=Times does not work 

def if_(cond,e1,e2=''):
    "Ternary operator would be" 
    if cond: return e1
    else: return e2
 
def MRO(cls):
    "Returns the MRO of cls as a text"
    out=["MRO of %s:" % cls.__name__]
    for counter,c in enumerate(cls.__mro__):
        name=c.__name__
        bases=','.join([b.__name__ for b in c.__bases__])
        s="  %s - %s(%s)" % (counter,name,bases)
        if type(c) is not type: s+="[%s]" % type(c).__name__
        out.append(s)
    return '\n'.join(out)
      
class MROgraph(object):
    def __init__(self,*classes,**options):
        "Generates the MRO graph of a set of given classes."
        if not classes: raise "Missing class argument!"
        filename=options.get('filename',"MRO_of_%s.pdf" % classes[0].__name__)
        self.labels=options.get('labels',2)
        caption=options.get('caption',False)
        setup=options.get('setup','')
        name,dotformat=os.path.splitext(filename)
        format=dotformat[1:] 
        fontopt="fontname="+if_(format=='ps',PSFONT,PNGFONT)
        nodeopt=' node [%s];\n' % fontopt
        edgeopt=' edge [%s];\n' % fontopt
        viewer=if_(format=='ps',PSVIEWER,PNGVIEWER)
        self.textrepr='\n'.join([MRO(cls) for cls in classes])
        caption=if_(caption,
                   'caption [shape=box,label="%s\n",fontsize=9];'
                   % self.textrepr).replace('\n','\\l')
        setupcode=nodeopt+edgeopt+caption+'\n'+setup+'\n'
        codeiter=itertools.chain(*[self.genMROcode(cls) for cls in classes])
        self.dotcode='digraph %s{\n size="2500,2500"; %s%s}' % (
            name,setupcode,'\n'.join(codeiter))
        os.system("echo '%s' | dot  -T%s > %s; %s %s&" %
              (self.dotcode,format,filename,viewer,filename))
    def genMROcode(self,cls):
        "Generates the dot code for the MRO of a given class"
        for mroindex,c in enumerate(cls.__mro__):
            name=c.__name__
            manyparents=len(c.__bases__) > 1
            if c.__bases__:
                yield ''.join([
                    ' edge [style=solid]; %s -> %s %s;\n' % (
                    b.__name__,name,if_(manyparents and self.labels==2,
                                        '[label="%s"]' % (i+1)))
                    for i,b in enumerate(c.__bases__)])
            if manyparents:
                yield " {rank=same; %s}\n" % ''.join([
                    '"%s"; ' % b.__name__ for b in c.__bases__])
            number=if_(self.labels,"%s-" % mroindex)
            label='label="%s"' % (number+name)
            option=if_(issubclass(cls,type), # if cls is a metaclass
                       '[%s]' % label, 
                       '[shape=box,%s]' % label)
            yield(' %s %s;\n' % (name,option))
            if type(c) is not type: # c has a custom metaclass
                metaname=type(c).__name__
                yield ' edge [style=dashed]; %s -> %s;' % (metaname,name)
    def __repr__(self):
        "Returns the Dot representation of the graph"
        return self.dotcode
    def __str__(self):
        "Returns a text representation of the MRO"
        return self.textrepr

def testHierarchy(**options):
    class M(type): pass # metaclass
    class F(object): pass
    class E(object): pass
    class D(object): pass
    class G(object): __metaclass__=M
    class C(F,D,G): pass
    class B(E,D): pass
    class A(B,C): pass
    
def testHierarchy3(**options):

    class avocadoTest: pass
    class Test(avocadoTest): pass
    class TestWithoutServers(Test): pass
    class TestWithServers(TestWithoutServers): pass
    class DfuseTestBase(TestWithServers): pass
    class IorTestBase(DfuseTestBase): pass

    class ObjFetchBadParam(TestWithServers): pass
    class ArrayObjTest(TestWithServers): pass
    class ObjOpenBadParam(TestWithServers): pass
    class ObjUpdateBadParam(TestWithServers): pass
    class CreateManyDkeys(TestWithServers): pass
    class ObjectDataValidation(TestWithServers): pass
    class SameKeyDifferentValue(TestWithServers): pass
    class PunchTest(TestWithServers): pass
    class DaosRacerTest(TestWithServers): pass
    class NvmeIOStates(IorTestBase): pass
    class NvmePoolExclude(TestWithServers): pass
    class NvmeFragmentation(TestWithServers): pass
    class NvmePoolExtend(TestWithServers): pass
    class NvmeObject(TestWithServers): pass
    class ServerFillUp(IorTestBase): pass
    class NvmeHealth(ServerFillUp): pass
    class NvmeEnospace(ServerFillUp): pass
    class NvmeIo(IorTestBase): pass
    class NvmePoolCapacity(TestWithServers): pass
    class NvmeIoVerification(IorTestBase): pass
    class NvmeFault(ServerFillUp): pass
    class DaosServerTest(TestWithServers): pass
    class CPUUsage(IorTestBase): pass
    class ObjectMetadata(TestWithServers): pass
    class DynamicStartStop(TestWithServers): pass
    class DaosServerConfigTest(TestWithServers): pass
    class MdtestBase(DfuseTestBase): pass
    class DataMoverTestBase(IorTestBase, MdtestBase): pass
    class DmObjLargePosix(DataMoverTestBase): pass
    class DmDstCreate(DataMoverTestBase): pass
    class DmNegativeTest(DataMoverTestBase): pass
    class DmPosixTypesTest(DataMoverTestBase): pass
    class CopyProcsTest(DataMoverTestBase): pass
    class DmPosixLargeFile(DataMoverTestBase): pass
    class DmPosixSubsetsTest(DataMoverTestBase): pass
    class DmLargeDir(DataMoverTestBase): pass
    class DmPosixMetaEntry(DataMoverTestBase): pass
    class DmSerialSmallTest(DataMoverTestBase): pass
    class DmObjSmallTest(DataMoverTestBase): pass
    class DmPosixSymlinks(DataMoverTestBase): pass
    class ApricotTests(Test): pass
    class SoakTestBase(TestWithServers): pass
    class SoakStress(SoakTestBase): pass
    class SoakStress(SoakTestBase): pass
    class SoakTestError(Exception): pass
    class SoakHarassers(SoakTestBase): pass
    class SoakSmoke(SoakTestBase): pass
    class SoakFaultInject(SoakTestBase): pass
    class ContainerAsync(TestWithServers): pass
    class BasicSnapshot(TestWithServers): pass
    class SimpleCreateDeleteTest(TestWithServers): pass
    class DfuseContainerCheck(DfuseTestBase): pass
    class CreateContainerTest(TestWithServers): pass
    class BasicTxTest(TestWithServers): pass
    class OpenClose(TestWithServers): pass
    class DeleteContainerTest(TestWithServers): pass
    class OpenContainerTest(TestWithServers): pass
    class GlobalHandle(TestWithServers): pass
    class FullPoolContainerCreate(TestWithServers): pass
    class RootContainerTest(DfuseTestBase): pass
    class Snapshot(TestWithServers): pass
    class MultipleContainerDelete(IorTestBase): pass
    class ListContainerTest(TestWithServers): pass
    class ContainerQueryAttributeTest(TestWithServers): pass
    class ContainerAttributeTest(TestWithServers): pass
    class SnapshotAggregation(IorTestBase): pass
    class DaosAggregationIOSmall(IorTestBase): pass
    class DaosAggregationBasic(IorTestBase): pass
    class ObjectWithParameters(): pass
    class CommandWithParameters(ObjectWithParameters): pass
    class ExecutableCommand(CommandWithParameters): pass
    class MdtestCommand(ExecutableCommand): pass
    class AggregationPunching(MdtestBase): pass
    class AggregationChecksum(IorTestBase): pass
    class DfuseSpaceCheck(IorTestBase): pass
    class DaosAggregationThrottling(IorTestBase): pass
    class SelfTest(ExecutableCommand): pass
    class CartSelfTest(TestWithServers): pass
    class ZeroConfigTest(TestWithServers): pass
    class ControlTestBase(TestWithServers): pass
    class DmgStorageQuery(ControlTestBase): pass
    class PoolTestBase(TestWithServers): pass
    class DmgSystemReformatTest(PoolTestBase): pass
    class DaosAgentConfigTest(TestWithServers): pass
    class DmgStorageScanSCMTest(TestWithServers): pass
    class SuperBlockVersioning(TestWithServers): pass
    class DaosControlConfigTest(TestWithServers): pass
    class NetDev(): pass
    class DmgNetworkScanTest(TestWithServers): pass
    class DaosSnapshotTest(TestWithServers): pass
    class SCMConfigTest(TestWithServers): pass
    class DmgPoolEvictTest(TestWithServers): pass
    class DmgNvmeScanTest(TestWithServers): pass
    class DmgSystemLeaderQueryTest(ControlTestBase): pass
    class DaosAdminPrivTest(TestWithServers): pass
    class SSDSocketTest(TestWithServers): pass
    class DmgPoolQueryTest(ControlTestBase, IorTestBase): pass
    class DaosObjectQuery(TestWithServers): pass
    class BadConnectTest(TestWithServers): pass
    class ConnectTest(TestWithServers): pass
    class PoolSvc(TestWithServers): pass
    class SimpleCreateDeleteTest(TestWithServers): pass
    class PoolCreateTests(PoolTestBase): pass
    class PoolCreateTests(PoolTestBase): pass
    class GlobalHandle(TestWithServers): pass
    class RebuildTests(TestWithServers): pass
    class MultiServerCreateDeleteTest(TestWithServers): pass
    class DestroyTests(TestWithServers): pass
    class BadCreateTest(TestWithServers): pass
    class DynamicServerPool(TestWithServers): pass
    class RebuildNoCap(TestWithServers): pass
    class BadEvictTest(TestWithServers): pass
    class QueryAttributeTest(TestWithServers): pass
    class BadQueryTest(TestWithServers): pass
    class PoolAttributeTest(TestWithServers): pass
    class DestroyRebuild(TestWithServers): pass
    class Permission(TestWithServers): pass
    class ListPoolsTest(TestWithServers): pass
    class RebuildWithIOR(IorTestBase): pass
    class EvictTests(TestWithServers): pass
    class RebuildWithIO(TestWithServers): pass
    class MultipleCreatesTest(TestWithServers): pass
    class InfoTests(TestWithServers): pass
    class ChecksumContainerValidation(TestWithServers): pass
    class DaosCoreBase(TestWithServers): pass
    class CSumErrorLog(DaosCoreBase): pass
    class DbenchTest(DfuseTestBase): pass
    class UnitTestWithoutServers(TestWithoutServers): pass
    class OSAUtils(MdtestBase, IorTestBase): pass
    class OSADmgNegativeTest(OSAUtils): pass
    class OSAOnlineDrain(OSAUtils): pass
    class OSAOfflineParallelTest(OSAUtils): pass
    class OSAOnlineReintegration(OSAUtils): pass
    class OSAOnlineExtend(OSAUtils): pass
    class OSAOfflineDrain(OSAUtils): pass
    class OSAOfflineReintegration(OSAUtils): pass
    class OSAOnlineParallelTest(OSAUtils): pass
    class OSAOfflineExtend(OSAUtils): pass
    class IorLarge(IorTestBase): pass
    class IorIntercept(IorTestBase): pass
    class IorInterceptDfuseMix(IorTestBase): pass
    class IorInterceptVerifyDataIntegrity(IorTestBase): pass
    class IorSmall(IorTestBase): pass
    class IorHdf5(IorTestBase): pass
    class CrashIor(IorTestBase): pass
    class IorInterceptMultiClient(IorTestBase): pass
    class CommandWithSubCommand(ExecutableCommand): pass
    class SubProcessCommand(CommandWithSubCommand): pass
    class YamlCommand(SubProcessCommand): pass
    class DmgCommandBase(YamlCommand): pass
    class DmgCommand(DmgCommandBase): pass
    class ContSecurityTestBase(TestWithServers): pass
    class DaosRacerCommand(ExecutableCommand): pass
    class FioBase(DfuseTestBase): pass
    class DaosTestError(Exception): pass
    class VolTestBase(DfuseTestBase): pass
    class TestContainerData(): pass
    class TestDaosApiBase(ObjectWithParameters): pass
    class TestContainer(TestDaosApiBase): pass
    class DcpCommand(ExecutableCommand): pass
    class Dcp(DcpCommand): pass
    class DsyncCommand(ExecutableCommand): pass
    class Dsync(DsyncCommand): pass
    class DserializeCommand(ExecutableCommand): pass
    class Dserialize(DserializeCommand): pass
    class DdeserializeCommand(ExecutableCommand): pass
    class Ddeserialize(DdeserializeCommand): pass
    class FsCopy(): pass
    class ContClone(): pass
    class DaosIOFailed(Exception): pass
    class DfuseCommand(ExecutableCommand): pass
    class Dfuse(DfuseCommand): pass
    class DaosCommandBase(CommandWithSubCommand): pass
    class SlurmFailed(Exception): pass
    class CallbackHandler(): pass
    class DaosPerfCommand(ExecutableCommand): pass
    class DaosPerfBase(TestWithServers): pass
    class MpiioTests(TestWithServers): pass
    class ServerFailed(Exception): pass
    class DaosServerCommand(YamlCommand): pass
    class SubprocessManager(): pass
    class DaosServerManager(SubprocessManager): pass
    class MpioFailed(Exception): pass
    class MpioUtils(): pass
    class PoolSecurityTestBase(TestWithServers): pass
    class ErasureCodeIor(ServerFillUp): pass
    class TestLogger(): pass
    class IoConfGen(ExecutableCommand): pass
    class IoConfTestBase(TestWithServers): pass
    class RebuildTestParams(ObjectWithParameters): pass
    class RebuildTestBase(TestWithServers): pass
    class FioCommand(ExecutableCommand): pass
    class IorCommand(ExecutableCommand): pass
    class IntEnum(): pass
    class IorMetrics(IntEnum): pass
    class DaosAgentCommand(YamlCommand): pass
    class DaosAgentManager(SubprocessManager): pass
    class DbenchCommand(ExecutableCommand): pass
    class Dbench(DbenchCommand): pass
    class MacsioTestBase(TestWithServers): pass
    class FaultInjectionFailed(Exception): pass
    class CommandFailure(Exception): pass
    class BasicParameter(): pass
    class FormattedParameter(BasicParameter): pass
    class LogParameter(FormattedParameter): pass
    class YamlParameters(ObjectWithParameters): pass
    class TransportCredentials(YamlParameters): pass
    class CommonConfig(YamlParameters): pass
    class EnvironmentVariables(dict): pass
    class DaosCommand(DaosCommandBase): pass
    class DmgTransportCredentials(TransportCredentials): pass
    class DmgYamlParameters(YamlParameters): pass
    class SystemctlCommand(ExecutableCommand): pass
    class MacsioCommand(ExecutableCommand): pass
    class ConfigurationData(): pass
    class ConfigurationParameters(ObjectWithParameters): pass
    class Configuration(): pass
    class DirTree(): pass
    class DaosAgentTransportCredentials(TransportCredentials): pass
    class DaosAgentYamlParameters(YamlParameters): pass
    class JobManager(ExecutableCommand): pass
    class Orterun(JobManager): pass
    class Mpirun(JobManager): pass
    class Srun(JobManager): pass
    class Systemctl(JobManager): pass
    class TestPool(TestDaosApiBase): pass
    class DaosServerTransportCredentials(TransportCredentials): pass
    class DaosServerYamlParameters(YamlParameters): pass
    class DaosTestError(Exception): pass
    class SimpleProfiler(): pass
    class DaosPerf(DaosPerfBase): pass
    class DaosPerfLarge(DaosPerfBase): pass
    class EcDisabledRebuild(ErasureCodeIor): pass
    class EcOfflineRebuild(ErasureCodeIor): pass
    class ErasureCodeMdtest(MdtestBase): pass
    class EcOnlineRebuild(ErasureCodeIor): pass
    class ErasureCodeIor(IorTestBase): pass
    class MdtestLarge(MdtestBase): pass
    class MdtestSmall(MdtestBase): pass
    class CartTest(TestWithoutServers): pass
    class CartCoRpcFiveNodeTest(CartTest): pass
    class CartCoRpcTwoNodeTest(CartTest): pass
    class CartCoRpcOneNodeTest(CartTest): pass
    class CartSelfThreeNodeTest(CartTest): pass
    class CartIvTwoNodeTest(CartTest): pass
    class CartIvOneNodeTest(CartTest): pass
    class CartCoRpcOneNodeTest(CartTest): pass
    class CartNoPmixOneNodeTest(CartTest): pass
    class LogCheckError(Exception): pass
    class NotAllFreed(LogCheckError): pass
    class WarningStrict(LogCheckError): pass
    class WarningMode(LogCheckError): pass
    class ActiveDescriptors(LogCheckError): pass
    class LogError(LogCheckError): pass
    class RegionContig(): pass
    class RegionCounter(): pass
    class hwm_counter(): pass
    class LogTest(): pass
    class InvalidPid(Exception): pass
    class InvalidLogFile(Exception): pass
    class LogRaw(): pass
    class LogLine(): pass
    class StateIter(): pass
    class LogIter(): pass
    class CartCtlFiveNodeTest(CartTest): pass
    class CartCtlOneNodeTest(CartTest): pass
    class GroupTest(CartTest): pass
    class CartNoPmixLauncherOneNodeTest(CartTest): pass
    class CartRpcOneNodeTest(CartTest): pass
    class CartRpcOneNodeSwimNotificationOnRankEvictionTest(CartTest): pass
    class CartRpcTwoNodeTest(CartTest): pass
    class DaosVol(VolTestBase): pass
    class HarnessAdvancedTest(TestWithServers): pass
    class HarnessBasicTest(Test): pass
    class TestHarnessSkipsBase(Test): pass
    class TestHarnessSkipsSkipped(TestHarnessSkipsBase): pass
    class TestHarnessSkipsRun(TestHarnessSkipsBase): pass
    class HarnessTimeoutTest(Test): pass
    class FioSmall(FioBase): pass
    class DaosRunIoConf(IoConfTestBase): pass
    class DaosVol(VolTestBase): pass
    class MacsioTest(DfuseTestBase, MacsioTestBase): pass
    class ParallelIo(FioBase, IorTestBase): pass
    class IoAggregation(IorTestBase): pass
    class DfuseSparseFile(IorTestBase): pass
    class SegCount(IorTestBase): pass
    class BashCmd(DfuseTestBase): pass
    class LlnlMpi4py(MpiioTests): pass
    class IoConsistency(IorTestBase): pass
    class Romio(MpiioTests): pass
    class LargeFileCount(MdtestBase, IorTestBase): pass
    class Hdf5(MpiioTests): pass
    class FindCmd(DfuseTestBase): pass
    class RebuildWidelyStriped(MdtestBase): pass
    class DaosRunIoConf(IoConfTestBase): pass
    class ContainerCreate(TestWithServers): pass
    class CascadingFailures(RebuildTestBase): pass
    class PoolDestroyWithIO(IorTestBase): pass
    class ReadArrayTest(RebuildTestBase): pass
    class RebuildDeleteObjects(RebuildTestBase): pass
    class CreateContainterACLTest(ContSecurityTestBase): pass
    class DaosRunPoolSecurityTest(PoolSecurityTestBase): pass
    class DeleteContainerACLTest(ContSecurityTestBase): pass
    class DaosContainterSecurityTest(ContSecurityTestBase, PoolSecurityTestBase): pass
    class OverwriteContainerACLTest(ContSecurityTestBase): pass
    class GetContainerACLTest(ContSecurityTestBase): pass
    class PoolSecurityTest(TestWithServers): pass
    class DaosRunPoolSecurityTest(PoolSecurityTestBase): pass
    class UpdateContainerACLTest(ContSecurityTestBase): pass
    class DaosCoreTest(DaosCoreBase): pass
    class DaosCoreTestDfs(DaosCoreBase): pass
    class DaosCoreTestRebuild(DaosCoreBase): pass
    class DaosCoreTestNvme(DaosCoreBase): pass
    class CommonContainerSubCommand(): pass
    class CommonPoolSubCommand: pass
    class CommonObjectSubCommand(): pass
    class CommonFilesystemSubCommand(): pass

    return MROgraph(TestWithServers, CommandWithParameters, IorTestBase, CommonContainerSubCommand, CommandWithSubCommand, ExecutableCommand, CartTest, Exception, DataMoverTestBase, OSAUtils, DfuseTestBase, YamlParameters, CommonPoolSubCommand, Test, SoakTestBase, ObjectWithParameters, MdtestBase, LogCheckError, DaosCoreBase, ContSecurityTestBase, TestWithoutServers, ServerFillUp, JobManager, YamlCommand, TransportCredentials, RebuildTestBase, PoolTestBase, MpiioTests, ErasureCodeIor, CommonObjectSubCommand, VolTestBase, TestHarnessSkipsBase, TestDaosApiBase, SubprocessManager, PoolSecurityTestBase, MdtestBase, IorTestBase, IoConfTestBase, DaosPerfBase, ControlTestBase, SubProcessCommand, IorTestBase, MdtestBase, IntEnum, FormattedParameter, FioBase, IorTestBase, FioBase, DsyncCommand, DserializeCommand, DmgCommandBase, dict, DfuseTestBase, MacsioTestBase, DfuseCommand, DdeserializeCommand, DcpCommand, DbenchCommand, DaosCommandBase, ContSecurityTestBase, PoolSecurityTestBase, ControlTestBase, IorTestBase, CommonFilesystemSubCommand, BasicParameter, avocadoTest, **options)

if __name__=="__main__": 
    #testHierarchy() # generates a postscript diagram of A and M hierarchies
    #testHierarchy2() # generates a postscript diagram of A and M hierarchies
    testHierarchy3() # generates a postscript diagram of A and M hierarchies

#</MROgraph.py>
