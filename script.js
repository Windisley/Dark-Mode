const boxLigthOf = document.querySelector(".box_ligth_of")
const ligthOf = document.querySelector(".ligth_of")
const contDarkMode = document.querySelector(".cont_dark_mode_of")
const containerOn = document.querySelector(".container")

boxLigthOf.addEventListener("click", ()=>{
    ligthOf.classList.toggle("ligth_on")
    contDarkMode.classList.toggle("cont_dark_mode_on")
    containerOn.classList.toggle("container_on")

})