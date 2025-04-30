let isCaptcheChecked=false;
function handleSubmit(event){
    if(isCaptcheChecked){
        let outputDate=document.querySelector('.outputDate')
        let inputDate=document.querySelector('.inputDate')

        let formattedDate=new Date(inputDate.value).toLocaleDateString('en-IN');
        outputDate.value=formattedDate;
    }
    else{
        alert('Please Check the Captche to sumbit the details...')
        event.preventDefault();
    }
}

function handleCaptche(){
    isCaptcheChecked=true;
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    }
 }
  setInterval(timestamp, 500);