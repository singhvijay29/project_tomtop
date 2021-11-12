function signUp()
{
let email,psw,psw2;
email=document.getElementById("email").value;

psw=document.getElementById("password1").value;

psw2=document.getElementById("password2").value;



let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("Account already exists");
}
if(psw!==psw2) {
    alert("Please enter same password")
}
else{
  user_records.push({
  "name":name,
  "email":email,
  "psw":psw,
  "psw2":psw2

})
localStorage.setItem("users",JSON.stringify(user_records));
window.location.href="login.html"
}

}




// login
// function logIn(){
//     event.preventDefault();
//     var store = JSON.parse(window.localStorage.getItem('users'));
//     var eml = document.getElementById("eml1").value;
//     var pass = document.getElementById("pass1").value;

//     var KeyName = window.localStorage.key(index);
    

//     if(eml === store[i] && pass === store[i]){
//         window.location.href="home.html";
//     }else{
//         alert("invalid Credentials")
//     }

// }


function logIn(e){
    e.preventDefault();

    var eml1 = document.getElementById("eml1").value;
    var pass = document.getElementById("pass1").value;
    if(eml1.length>0 && pass.length>0){
        window.location.href="home.html"
    }
}