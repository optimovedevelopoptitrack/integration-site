
function setUserEmail(){
    var email = document.getElementById('userEmail');
    optimoveSDK.API.reportEvent('Set_email_event', {'email': email.innerText} );    
}

var action1 = document.getElementById('action1-btn'); // Set user email 
if(action1 != null)
{

    action1.addEventListener('click', setUserEmail );
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