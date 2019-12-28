const mobileMenuIcon = document.querySelector('.mobile_menu_icon');
const mobileMenuDrawer = document.querySelector('.mobile_menu_drawer');


mobileMenuIcon.addEventListener('click', () => {
    mobileMenuDrawer.classList.toggle('showMenu');
}, false);