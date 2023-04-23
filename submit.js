function addData(){
    var username = document.getElementById('exampleInputName').value;
    var phnnumber = document.getElementById('exampleInputMobile').value;
    var email = document.getElementById('exampleInpuEmail').value
    var msgtext = document.getElementById('exampleFormControlTextarea1').value;


    localStorage.setItem('exampleInputName',username);
    localStorage.setItem('exampleInputMobile',phnnumber);
    localStorage.setItem('exampleInpuEmail',email)
    localStorage.setItem('exampleFormControlTextarea1',msgtext);


    alert('Thanks for Contacting Us')
}

