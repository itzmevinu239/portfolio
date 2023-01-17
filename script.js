var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='writ full name';
        return false;
    }
    nameError.innerHTML='Valid';
    return true;
}

function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML='phone no is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML='phone no should be 10digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='phone no is required';
        return false;
    }
    phoneError.innerHTML='Valid';
    return true;
}

function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Invalid Email'
        return false;
    }

    emailError.innerHTML='Valid';
    return true;
}

function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required =30;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML=left+'more characters required';
        return false;
    }
    messageError.innerHTML='Valid';
    return true;
    
    
}

function validateForm(){
    if(!validateName()|| !validatePhone() || !validateEmail() || !validateMessage()){
        // submitError.style.display='block';
        // submitError.innerHTML='Please fix error to submit';
        // setTimeout(function(){submitError.style.display='none';},3000);
        alert("Please fix the error to submit")
        return false;
    }
}