
var watchProcess = null;


function initiate_watchlocation() {
    if (watchProcess === null) {
        watchProcess = navigator.geolocation.watchPosition(handle_geolocation_query, handle_errors);
    }
}

function stop_watchlocation() {
    if (watchProcess !== null)
    {
        navigator.geolocation.clearWatch(watchProcess);
        watchProcess = null;
    }
}

function handle_errors(error){
            switch(error.code){
            
                case error.PERMISSION_DENIED: alert("user did not share geolocation data");
                break;
 
                case error.POSITION_UNAVAILABLE: alert("could not detect current position");
                break;
 
                case error.TIMEOUT: alert("retrieving position timedout");
                break;
 
                default: alert("unknown error");
                break;
                
            }
            
        }