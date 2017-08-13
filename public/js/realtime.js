
function setUserEmailEvent(){
    var email = document.getElementById('userEmail');
    optimoveSDK.API.reportEvent('Set_email_event', {'email': email.innerText} );    
}

var setUserEmail = document.getElementById('setUserEmail-btn'); // Set user email 
if(setUserEmail != null)
{
alert(10);
    setUserEmail.addEventListener('click', setUserEmailEvent );
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