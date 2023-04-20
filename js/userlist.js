let users = JSON.parse(localStorage.getItem("users")) || []
let alcada = JSON.parse(localStorage.getItem("alcada")) || []


// Funções para o modal
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
///////////////////////

// Função de iniciar
function start(){
    renderUsers()
}

start()
///////////////////////

function SetItem(){
    localStorage.setItem("users", JSON.stringify(users))
}

function addUsers(){
    const name = document.querySelector(".inputName")
    const age = document.querySelector(".input-pequeno")
    const email = document.querySelector(".inputEmail")
    const password = document.querySelector(".inputPassword")
    const id = users.length
    users.push({name: name.value, age: age.value, email: email.value, password:password.value, id: id})
    name.value = ""
    age.value = ""
    email.value = ""
    password.value = ""
    closeModal()
    SetItem()
    renderUsers()
}

function renderUsers(){
    document.addEventListener("DOMContentLoaded", function() {
        const render_Users = document.querySelector(".itens")
        render_Users.innerHTML = null
        
        users.forEach(function(user) {
            const UsersElements = document.createElement("div")
            UsersElements.classList.add("elemento-usuario")
            
            const nameUser = document.createElement("h1")
            nameUser.classList.add("tittle-users")
            nameUser.innerText = user.name
            UsersElements.appendChild(nameUser)
    
            const ageUser = document.createElement("p")
            ageUser.classList.add("age-users")
            ageUser.innerText = user.age
            UsersElements.appendChild(ageUser)
    
            const viewUsers = document.createElement("i")
            viewUsers.classList.add("fa-regular", "fa-eye")
            UsersElements.appendChild(viewUsers)
    
            const EditUsers = document.createElement("i")
            EditUsers.classList.add("fa-solid", "fa-pen")
            UsersElements.appendChild(EditUsers)
    
            // const ExcluirUsers = document.createElement("i")
            // ExcluirUsers.classList.add("fa-regular", "fa-user-xmark")
            // UsersElements.appendChild(ExcluirUsers)
            // ExcluirUsers.addEventListener("click", function(){
            //     localStorage.removeItem()
            // })
    
            render_Users.appendChild(UsersElements)
        })
    })
}

renderUsers()

