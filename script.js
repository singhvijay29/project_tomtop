function Signup(e){
    e.preventDefault()

    let form = document.getElementById("signupForm")

    let user_data = {
        email: form.bm_text.value,
        password1: form.password1.value,
        password2: form.password2.value,
    }

    console.log(user_data)
    user_data = JSON.stringify(user_data)


    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        body: user_data,
        headers: {
            "Content-Type": "application/json"
        },
    })

    .then((res)=>{
        return res.json();

    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

}



function Login(e){
    e.preventDefault()

    let form = document.getElementById("loginForm")

    let user_data = {
      
        password: form.pass.value,
        username: form.eml.value,
       
    }
  let  data_to_send = JSON.stringify(user_data)

    console.log(data_to_send)
  

fetch("https://masai-api-mocker.herokuapp.com/auth/login", {

    method: 'POST',
    body: data_to_send,
        headers: {
            "Content-Type": "application/json"
        },

})

.then((res)=>{
        return res.json();

    })
    .then((res)=>{
        console.log(res)

        fetchData(user_data.username ,res.token)

        })
    .catch((err)=>{
        console.log(err)
    })
}

function fetchData(username ,token){

    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

        headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
        },
    })
    .then((res)=>{
        return res.json();

    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}