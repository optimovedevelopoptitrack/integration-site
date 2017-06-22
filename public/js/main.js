$(document).ready(() => {
  // Place JavaScript code here...
  const userLocal = window.localStorage.getItem('public_userid');
  if (userLocal != null && userLocal != undefined) {
    window.public_userid = userLocal;
  }

  const loadJSResource = function (resourceURL, callback) {
    if (resourceURL != null) {
      const d = document;
      const g = d.createElement('script');
      const s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript';
      g.async = true;
      g.defer = true;
      g.src = resourceURL;
      g.onload = callback;
      s.parentNode.insertBefore(g, s);
    }
  };

  function onLoadSDK() {
    console.log('called onSDKLoad');

    self.OptimoveSDKObj.initialize(null, self.OptimoveSDK.OptimoveSDKConfig, onSDKInitialized);
  }
  function onSDKInitialized(status) {
    console.log(`testing my call back status = ${status}`);

    let url = self.document.location.href;
    let host =  self.document.location.origin;
    let splited =  url.split(host);
    let pageName = splited[1];
    let pageTitle  = pageName.slice(1, pageName.length);
    if(pageTitle == "")
        pageTitle = "Home - Hackathon Starter";

    self.OptimoveSDKObj.logPageVisitEvent('http://www.example.com' + pageName, pageTitle);
  }
  loadJSResource('https://optimovesdk.firebaseapp.com/sdk.js', onLoadSDK);
});

