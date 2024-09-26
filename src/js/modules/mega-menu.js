function megaMenu() {
    document.addEventListener('DOMContentLoaded', () => {
        const megaMenuBtn = document.querySelector('.header__button-megaMenu')
        const megaMenu = document.querySelector('.mega-menu');
        const isOpen = () => {
            megaMenu.classList.toggle('is-active');
            document.body.classList.toggle("no-scroll")
        }

        megaMenuBtn.addEventListener('click', isOpen);
    });
}

export default megaMenu;