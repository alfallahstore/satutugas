// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    feather.replace();

    const cartIcon = document.getElementById('shopping-cart');
    const cartDropdown = document.getElementById('shopping-cart-dropdown');

    cartIcon.addEventListener('click', function () {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
        if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
            cartDropdown.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    feather.replace();

    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    searchIcon.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link action
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!searchIcon.contains(event.target) && !searchBar.contains(event.target)) {
            searchBar.style.display = 'none';
        }
    });
});

