

$(document).ready(function(){
    function setUserEmailEvent(){
        var email = $("#userEmail")[0].value;
        optimoveSDK.API.reportEvent('Set_email_event', {'email': email} );    
    }
    $("#setUserEmail-btn").on("click",setUserEmailEvent)
    
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
})

