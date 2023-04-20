function validateLogin() {
    const users = JSON.parse(localStorage.getItem("users"))
    const email = document.getElementById("input-email")
    const password = document.getElementById("input-password")
    let loginValid = false

    for(let i in users){
        if(email.value == users[i].email && password.value == users[i].password){
            loginValid = true
            break
        }
    }
    if(loginValid == true){
        location.href = 'userlist.html'
    }else{
        alert("email ou senha errado!")
    }
}
