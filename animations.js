const menudivmustonclick = document.querySelector('.menulateral');
const menulogonav = document.querySelector('.barlogomenu');

menulogonav.addEventListener('click', () => {
    if(menulogonav.click) {
        menudivmustonclick.classList.toggle('menuonview');
    }
});