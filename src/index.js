// header
const responsiveButton = document.getElementById('responsive-menu-icon');

responsiveButton.addEventListener('click', () => {
    showMenu()
})

function showMenu() {
    const navList = document.getElementById('nav-list')
    navList.classList.toggle('active')
}