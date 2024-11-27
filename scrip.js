// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// saat humburger-menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk ngilangin navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.constains(e.target) && !navbarNav.contains(e.target)){ 
    navbarNav.classList.remove('active');
}
});