function signUp(){

    var email = document.getElementById('email');
    var password2 = document.getElementById('password2');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Please fill in email');

    }else if(password2.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0 && password2.value.length == 0){
        alert('Please fill in email and password');

    }else if(password2.value.length >= 16){
        alert('Max of 16');

    }else if(!password2.value.match(numbers)){
        alert('please add 1 number');

    }else if(!password2.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!password2.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('password2', password2.value);
        window.location.href = 'login.html'
    }
}

//checking
function check(){
    var storedemail = localStorage.getItem('email');
    var storedpassword2 = localStorage.getItem('password2');

    var useremail = document.getElementById('eml');
    var userpassword2 = document.getElementById('pass');

    if(useremail.value == storedemail && userpassword2.value == storedpassword2){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}