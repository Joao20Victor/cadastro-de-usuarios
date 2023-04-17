let users = [{
    name: "gerente",
    email: "gerente@gmail.com",
    password: 123,
    age: 21,
    id: 1
}]


function addUsers(){
    const name = document.querySelector(".inputName").value
    const age = document.querySelector(".input-pequeno").value
    const email = document.querySelector(".inputEmail").value
    const password = document.querySelector(".inputPassword").value
    users.push({name: name, email: email, password: password, age: age})
    closeModal()
    renderUsers()
}

function openModal() {
    const modal = document.getElementById("pop")
    modal.style.display = "flex";
  
} 

function closeModal() {
    const modal = document.getElementById("pop")
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("pop")
  if (event.target == modal) {
    closeModal();
  }
}









// const permission = [{
//     id: 1,
//     name: "abrir empresa"
// }]
// const alcada = [{
//     id: 1,
//     name: "naosei",
//     permission: []
// }]


function renderUsers(){
    const render_Users = document.querySelector(".container-userlist")
    render_Users.innerHTML = null
    
    users.forEach(function(user) {
        const nameUser = document.createElement("h1")
        nameUser.classList.add("tittle-users")
        nameUser.innerText = user.name
        render_Users.appendChild(nameUser)

        const ageUser = document.createElement("p")
        ageUser.classList.add("age-users")
        ageUser.innerText = user.age
        render_Users.appendChild(ageUser)

        const olhinho = document.createElement("i")
        olhinho.classList.add("fa-regular", "fa-eye")
        render_Users.appendChild(olhinho)
    })
}









































// function iniciarr(){
//     if(!users){
//         localStorage.setItem("users", JSON.stringify(users))
//     }
    
// }

// function saveLocal(usuario){
//     const Users = JSON.parse(localStorage.getItem("users"))
//     localStorage.setItem("usuarios", JSON.stringify(
//         ...Users,
//         users.concat(usuario)
//     ))
// }


