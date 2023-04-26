let permission = JSON.parse(localStorage.getItem("permission"))
let alcada = JSON.parse(localStorage.getItem("alcada"))
let users = JSON.parse(localStorage.getItem("users")) 


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
function start(){
    if(!permission){
        localStorage.setItem("permission", JSON.stringify([{name: "contratar", id: 1},{name: "demitir", id: 2 }]))
    }
    if(!alcada){
        localStorage.setItem("alcada", JSON.stringify([{name: "gerente", id: "0", permissions:[0,1]}]))

    }
    if(!users){
        localStorage.setItem("users", JSON.stringify([{name: "gerente", age: 45, email: "gerente@gmail.com", password: "454647", id: 1, alcada: 0,}]))

    }
}
start()