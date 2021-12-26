const menu = document.querySelector('.menu')
const menunav = document.querySelector('.menu-navegacion')

/*Método para que al hacer click sobre el icono de menu, se muestre o se oculte*/
menu.addEventListener('click',()=>{
    menunav.classList.toggle("spread")
})

/*Condicion para cerrar el menu cuando se de click en cualquier parte de la pagina o en un item*/
window.addEventListener('click', e=>{
    if(menunav.classList.contains('spread') && e.target != menunav && e.target != menu){
        menunav.classList.toggle("spread")
    }
})

