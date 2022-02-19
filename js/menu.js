const bxmenu = document.querySelector('.bxmenu');
const menu = document.querySelector('.menu-navegacion');

console.log(bxmenu)
console.log(menu)

bxmenu.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != bxmenu) {

        menu.classList.toggle('spread')
    }
})
