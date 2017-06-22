$(document).ready(function() {

  // Place JavaScript code here...
    var userLocal = window.localStorage.getItem('public_userid');
    if (userLocal != null && userLocal != undefined) {
        window.public_userid = userLocal;
    };

    var loadJSResource = function ( resourceURL, callback) {

        if(resourceURL != null)
        {
            var d = document;
            var g = d.createElement('script');
            var s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = resourceURL;
            g.onload= callback ;
            s.parentNode.insertBefore(g, s);
        }


    };

    function onLoadSDK()
    {
        console.log('called onSDKLoad');
        self.OptimoveSDKObj.initialize( null,  self.OptimoveSDK.OptimoveSDKConfig, onSDKInitialized );

    };
    function onSDKInitialized(status)
    {
        console.log('testing my call back status = ' + status);

        self.OptimoveSDKObj.logPageVisitEvent('http://www.example.com', 'exmaple page');

    };
    loadJSResource('https://optimovesdk.firebaseapp.com/sdk.js', onLoadSDK);
});