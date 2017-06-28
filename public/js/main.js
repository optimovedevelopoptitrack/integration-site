$(document).ready(() => {
    // Place JavaScript code here...

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

        self.OptimoveSDKObj.initialize(null, onSDKInitialized);
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
   
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	 ga('create', 'UA-101846716-1', 'auto');
  	 ga('send', 'pageview');

    function updateSignup(elem) {

        var emailInputElement = document.getElementById('email');
        var email = emailInputElement.value;
        window.public_userid = email;
        window.localStorage.setItem('public_userid', window.public_userid);
        self.OptimoveSDKObj.setUserId(window.public_userid);

	ga('create', 'UA-101846716-1', 'auto', {
  		userId: email 
		});
        return true;
    };
    var loginButtonElem = document.getElementById('signup-button');
    if(loginButtonElem != null)
    {
        loginButtonElem.addEventListener('click', updateSignup );
    }

    function updateLogin(elem) {

        var emailInputElement = document.getElementById('email');
        var email = emailInputElement.value;
        window.public_userid = email;
        window.localStorage.setItem('public_userid', window.public_userid);
        self.OptimoveSDKObj.setUserId(window.public_userid);
	
	ga('send', 'event', 'login', email);
   	ga('create', 'UA-101846716-1', 'auto', {
                userId: email
                });

        return true;
    }
    var loginButtonElem = document.getElementById('login-button');
    if(loginButtonElem != null)
    {

	    loginButtonElem.addEventListener('click', updateLogin );
    }


    function updateLogout(elem) {


	 ga('send', 'event', 'logout');
        return true;
    }
    var logoutButtonElem = document.getElementById('logout-link');
    if(logoutButtonElem != null)
    {
        logoutButtonElem.addEventListener('click', updateLogout );

    }
    function updateAction(elem) {

        self.OptimoveSDKObj.logEvent(elem.srcElement.innerText, { action_name: elem.srcElement.innerText});
        ga('send', 'event', 'logEvent', elem.srcElement.innerText);
        return true;
    }

    var action1 = document.getElementById('action1-btn');
    if(action1 != null)
    {

        action1.addEventListener('click', updateAction );
    }

    var action2 = document.getElementById('action2-btn');
    if(action2 != null)
    {
        action2.addEventListener('click', updateAction );
    }
    var action3 = document.getElementById('action3-btn');
    if(action3 != null)
    {
        action3.addEventListener('click', updateAction );
    }

    var action4 = document.getElementById('action4-btn');
    if(action4 != null)
    {
        action4.addEventListener('click', updateAction );
    }
});

