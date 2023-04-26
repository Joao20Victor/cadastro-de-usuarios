let users = JSON.parse(localStorage.getItem("users")) || []
const alcadas = JSON.parse(localStorage.getItem("alcada"))
console.log(alcadas);
const permissions = JSON.parse(localStorage.getItem("permission"))
let addAlcadaa = 0

function openModal() {
    const modal = document.getElementById("pop")
    modal.style.display = "flex";
    renderAlcadas()
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
    renderUsers()

function SetItem(){
    localStorage.setItem("users", JSON.stringify(users))
}
function addUsers(){
    const name = document.querySelector(".inputName")
    const age = document.querySelector(".input-pequeno")
    const email = document.querySelector(".inputEmail")
    const password = document.querySelector(".inputPassword")
    const id = users.length
    users.push(
            {name: name.value,
            age: age.value,
            email: email.value, 
            password:password.value,
            id: id,
            alcada: addAlcadaa})
    name.value = ""
    age.value = ""
    email.value = ""
    password.value = ""
    closeModal()
    SetItem()
    renderUsers()
}

function findUser(id) {
    return userList.filter((i) => i.id === id)[0]
}

function selectAlcada(id) {
    return alcadas.filter((i) => i.id == id)[0]
}

function selectPermissions(ids) {
    return permissions.filter((i) => ids.includes(i.id))
}
function renderUsers(alcadas){
        const render_Users = document.querySelector(".itens")
        render_Users.innerHTML = null
        users.forEach(function(user) {
            const UsersElements = document.createElement("div")
            UsersElements.classList.add("elemento-usuario")
            
            const nameUser = document.createElement("h1")
            nameUser.classList.add("title-users")
            nameUser.innerText = user.name
            UsersElements.appendChild(nameUser)
    
            const ageUser = document.createElement("p")
            const UserAlcada = selectAlcada(user.alcada)
            ageUser.classList.add("age-users")
            ageUser.innerText = UserAlcada.name
            UsersElements.appendChild(ageUser)
    
            const viewUsers = document.createElement("i")
            viewUsers.classList.add("fa-regular", "fa-eye")
            viewUsers.addEventListener("click", function(){
                userPermission.style.display = "flex";
            })
            UsersElements.appendChild(viewUsers)

            const EditUsers = document.createElement("i")
            EditUsers.classList.add("fa-solid", "fa-pen")
            UsersElements.appendChild(EditUsers)

            const userPermission = document.createElement("div")
            userPermission.classList.add("user-permission")
            // selectPermissions(alcadas.permissions).forEach(function(permission){
            //     userPermission.innerHTML = `<span>${permission.name}</span></br>`
            // })
            UsersElements.appendChild(userPermission)
    
            render_Users.appendChild(UsersElements)
        })
    
}

function renderAlcadas(){
    const select = document.querySelector(".opcoes")
    select.addEventListener("change", function(){
        addAlcadaa = parseInt(this.options[this.selectedIndex].id)
    })
    alcadas.forEach((alcada) => {
        const option = document.createElement("option")
        option.innerText = alcada.name
        option.id = alcada.id
        select.appendChild(option)
    })
}

document.addEventListener("DOMContentLoaded", function() {
    renderUsers()
})

