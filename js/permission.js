let permission = JSON.parse(localStorage.getItem("permission"))
function SetItem(){
    localStorage.setItem("permission", JSON.stringify(permission))
}
function addPermission(){
    const namePermission = document.querySelector(".inputName")
    const id = permission.length
    permission.push({name: namePermission.value, id: id})
    namePermission.value = ""
    renderPermissions()
    closeModal()
    SetItem()
}

function renderPermissions(){
    const RenderPermissions = document.querySelector(".permissoes-ativadas")
    RenderPermissions.innerHTML = null
    permission.forEach(function(permission) {
        const div = document.createElement("div")
        div.classList.add("permissao-ativada")

        const namePermission = document.createElement("span")
        namePermission.classList.add("permisao-texto")
        namePermission.innerText = permission.name
        div.appendChild(namePermission)
        RenderPermissions.appendChild(div)
    })

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


document.addEventListener("DOMContentLoaded", function() {
    renderPermissions()
})