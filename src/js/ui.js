// We need the #navbar to put or remove search class
const navbar = document.getElementById('navbar');
// We need elements which are triggers of the change
const searchIcon = document.getElementById('navbar-search');
const closeIcon = document.getElementById('navbar-close');

const toggle = element => (removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
}

const navbarVariable = toggle(navbar);

searchIcon.addEventListener('click', () =>{
    navbarVariable('no-search', 'search');
});

closeIcon.addEventListener('click', () =>{
    navbarVariable('search', 'no-search');
});

