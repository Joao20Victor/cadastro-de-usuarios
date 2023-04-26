let alcada = JSON.parse(localStorage.getItem("alcada"))
let permissions = JSON.parse(localStorage.getItem("permission"))
let selectedPermissions = []



function SetItem(){
    localStorage.setItem("alcada", JSON.stringify(alcada))
}

function addAlcada(){
    const nameAlcada = document.querySelector(".inputalcada")
    const id = alcada.length
    alcada.push({name: nameAlcada.value, id: id, permissions: selectedPermissions})
    nameAlcada.value = ""
    closeModal()
    SetItem()
    renderAlcada()
}

function selectPermissions(ids) {
    return permissions.filter((i) => ids.includes(i.id))
}

function renderAlcada(){
    const renderAlcadas = document.querySelector(".cargos-ativados")
    renderAlcadas.innerHTML = null
    alcada.forEach(function(alcada) {
       const AlcadaElements = document.createElement("div")
       AlcadaElements.classList.add("cargos")
       AlcadaElements.addEventListener("click", function(){
        openModalAlcada(alcada)
       }) 

       const nameAlcada = document.createElement("h1")
       nameAlcada.classList.add("title-alcada")
       nameAlcada.innerText = alcada.name
       AlcadaElements.appendChild(nameAlcada) 

        const deleteAlcada = document.createElement("i")
        deleteAlcada.classList.add("fa-solid", "fa-x")
        AlcadaElements.appendChild(deleteAlcada)

        renderAlcadas.appendChild(AlcadaElements)
    })

}

function sendPermission(){
    const selectpermission = document.querySelector(".caixa-Email")

    permissions.forEach(function(perm){
        const renderPermission = document.createElement("span")
        renderPermission.classList.add("renderPermission")
        renderPermission.innerText = perm.name
        renderPermission.addEventListener("click", function(){
            if(!selectedPermissions.includes(perm.id)){
                selectedPermissions.push(perm.id)
                console.log(selectedPermissions);
            }

        })

        selectpermission.appendChild(renderPermission)
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

function openModalAlcada(alcada) {
    const ModalAlcadas = document.getElementById("pop2")
    ModalAlcadas.style.display = "flex"
    selectPermissions(alcada.permissions).forEach(function(permission){
        ModalAlcadas.innerHTML = `<span>${permission.name}</span>`
    })
    

}

function closeModalAlcada() {
    const ModalAlcadas = document.getElementById("pop2")
    ModalAlcadas.style.display = "none";
}

window.onclick = function(event) {
        const ModalAlcadas = document.getElementById("pop2")
      if (event.target == ModalAlcadas) {
        closeModalAlcada();
      }
    }

window.onclick = function(event) {
    const modal = document.getElementById("pop")
  if (event.target == modal) {
    closeModal();
  }
  }
  document.addEventListener("DOMContentLoaded", function() {
    renderAlcada()
    sendPermission()
})