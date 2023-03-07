const openMenu = document.getElementById('hamBtn');
const closeMenu = document.getElementById('close');

openMenu.addEventListener('click', () => {
    console.log('hi')
    const menu = document.querySelector('.mobMenu');
    menu.style.transform = 'translateY(0)'
});
closeMenu.addEventListener('click', () => {
    console.log('hi')
    const menu = document.querySelector('.mobMenu');
    menu.style.transform = 'translateY(-100vh)'
});