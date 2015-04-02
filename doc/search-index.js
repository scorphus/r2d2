var searchIndex = {};
searchIndex['r2d2'] = {"items":[[0,"","r2d2","A library providing a generic connection pool.",null,null],[3,"Config","","A struct specifying the runtime configuration of a pool.",null,null],[3,"NoopErrorHandler","","An `ErrorHandler` which does nothing.",null,null],[3,"LoggingErrorHandler","","An `ErrorHandler` which logs at the error level.",null,null],[3,"Pool","","A generic connection pool.",null,null],[3,"InitializationError","","An error returned by `Pool::new` if it fails to initialize connections.",null,null],[3,"GetTimeout","","An error returned by `Pool::get` if it times out without retrieving a connection.",null,null],[3,"PooledConnection","","A smart pointer wrapping a connection.",null,null],[0,"config","","Pool configuration.",null,null],[3,"Builder","r2d2::config","A builder for `Config`.",null,null],[3,"Config","","A struct specifying the runtime configuration of a pool.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"builder"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"builder"}],"output":{"name":"builder"}}],[11,"new","","Constructs a new `Builder`.",0,{"inputs":[{"name":"builder"}],"output":{"name":"builder"}}],[11,"pool_size","","Sets `pool_size`.",0,{"inputs":[{"name":"builder"},{"name":"u32"}],"output":{"name":"builder"}}],[11,"helper_threads","","Sets `helper_threads`.",0,{"inputs":[{"name":"builder"},{"name":"u32"}],"output":{"name":"builder"}}],[11,"test_on_check_out","","Sets `test_on_check_out`.",0,{"inputs":[{"name":"builder"},{"name":"bool"}],"output":{"name":"builder"}}],[11,"initialization_fail_fast","","Sets `initialization_fail_fast`.",0,{"inputs":[{"name":"builder"},{"name":"bool"}],"output":{"name":"builder"}}],[11,"connection_timeout","","Sets `connection_timeout`.",0,{"inputs":[{"name":"builder"},{"name":"duration"}],"output":{"name":"builder"}}],[11,"build","","Consumes the `Builder`, turning it into a `Config`.",0,{"inputs":[{"name":"builder"}],"output":{"name":"config"}}],[11,"fmt","","",1,{"inputs":[{"name":"config"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"default","","",1,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"builder","","Creates a new `Builder` which can be used to construct a customized\n`Config`.",1,{"inputs":[{"name":"config"}],"output":{"name":"builder"}}],[11,"pool_size","","The number of connections managed by the pool.",1,{"inputs":[{"name":"config"}],"output":{"name":"u32"}}],[11,"helper_threads","","The number of threads that the pool will use for asynchronous\noperations such as connection creation and health checks.",1,{"inputs":[{"name":"config"}],"output":{"name":"u32"}}],[11,"test_on_check_out","","If true, the health of a connection will be verified via a call to\n`ConnectionManager::is_valid` before it is checked out of the pool.",1,{"inputs":[{"name":"config"}],"output":{"name":"bool"}}],[11,"initialization_fail_fast","","If true, `Pool::new` will synchronously initialize its connections,\nreturning an error if they could not be created.",1,{"inputs":[{"name":"config"}],"output":{"name":"bool"}}],[11,"connection_timeout","","Calls to `Pool::get` will wait this long for a connection to become\navailable before returning an error.",1,{"inputs":[{"name":"config"}],"output":{"name":"duration"}}],[8,"ConnectionManager","r2d2","A trait which provides connection-specific functionality.",null,null],[16,"Connection","r2d2::ConnectionManager","The connection type this manager deals with.",null,null],[16,"Error","","The error type returned by `Connection`s.",null,null],[10,"connect","r2d2","Attempts to create a new connection.",2,{"inputs":[{"name":"connectionmanager"}],"output":{"name":"result"}}],[10,"is_valid","","Determines if the connection is still connected to the database.",2,{"inputs":[{"name":"connectionmanager"},{"name":"connection"}],"output":{"name":"result"}}],[10,"has_broken","","*Quickly* determines if the connection is no longer usable.",2,{"inputs":[{"name":"connectionmanager"},{"name":"connection"}],"output":{"name":"bool"}}],[8,"ErrorHandler","","A trait which handles errors reported by the `ConnectionManager`.",null,null],[10,"handle_error","","Handles an error.",3,{"inputs":[{"name":"errorhandler"},{"name":"e"}],"output":null}],[11,"fmt","","",4,{"inputs":[{"name":"nooperrorhandler"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"nooperrorhandler"}],"output":{"name":"nooperrorhandler"}}],[11,"handle_error","","",4,{"inputs":[{"name":"nooperrorhandler"},{"name":"e"}],"output":null}],[11,"fmt","","",5,{"inputs":[{"name":"loggingerrorhandler"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"loggingerrorhandler"}],"output":{"name":"loggingerrorhandler"}}],[11,"handle_error","","",5,{"inputs":[{"name":"loggingerrorhandler"},{"name":"e"}],"output":null}],[11,"drop","","",6,{"inputs":[{"name":"pool"}],"output":null}],[11,"fmt","","",6,{"inputs":[{"name":"pool"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"initializationerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"initializationerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",7,{"inputs":[{"name":"initializationerror"}],"output":{"name":"str"}}],[11,"fmt","","",8,{"inputs":[{"name":"gettimeout"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"gettimeout"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",8,{"inputs":[{"name":"gettimeout"}],"output":{"name":"str"}}],[11,"new","","Creates a new connection pool.",6,{"inputs":[{"name":"pool"},{"name":"config"},{"name":"m"},{"name":"box"}],"output":{"name":"result"}}],[11,"get","","Retrieves a connection from the pool.",6,{"inputs":[{"name":"pool"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"pooledconnection"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"drop","","",9,{"inputs":[{"name":"pooledconnection"}],"output":null}],[6,"Target","","",null,null],[11,"deref","","",9,{"inputs":[{"name":"pooledconnection"}],"output":{"name":"connection"}}],[11,"deref_mut","","",9,{"inputs":[{"name":"pooledconnection"}],"output":{"name":"connection"}}]],"paths":[[3,"Builder"],[3,"Config"],[8,"ConnectionManager"],[8,"ErrorHandler"],[3,"NoopErrorHandler"],[3,"LoggingErrorHandler"],[3,"Pool"],[3,"InitializationError"],[3,"GetTimeout"],[3,"PooledConnection"]]};
initSearch(searchIndex);