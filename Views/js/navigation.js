const addClassFn = (element, className) => {
    element.classList.toggle(className);
}

const addClassToNav = () => {
    const btn = document.querySelector('.hamburger--main');
    const nav = document.querySelector('.navigation--items');
    const overlay = document.querySelector('.overlay');
    const getItemHandler = () => {
        addClassFn(nav, 'back--items');
        addClassFn(overlay, 'overlay--back');
    }
    btn.addEventListener('click', getItemHandler);
    overlay.addEventListener('click', getItemHandler);
}

addClassToNav();