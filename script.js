const MenuBtn = document.getElementById("Menu")
const menuItem = document.getElementById("Items")
MenuBtn.addEventListener('click',()=>{
menuItem.classList.toggle("max-md:block")
MenuBtn.classList.toggle("fa-xmark")
menuItem.classList.toggle("-left-0")
})