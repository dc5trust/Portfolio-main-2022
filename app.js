const darkModeBtn = document.querySelector('.far');
const nav = document.querySelector('.nav-container');

const dotsContainer = document.querySelector('.dots-container');
const mobileMenu = document.querySelector('.mobile-nav-popup');
const mobileLinks = document.querySelectorAll('.mobile-nav-popup li');
const xBtnMobileMenu = document.querySelector('.x-btn');

dotsContainer.addEventListener('click', openMobileMenu);
xBtnMobileMenu.addEventListener('click', closeMobileMenu);

function openMobileMenu(){
    mobileMenu.style.display = 'flex';
    nav.setAttribute('style', 'display: none');
}

mobileLinks.forEach((link)=>{
    link.addEventListener('click', openMobileLinks)
});

function openMobileLinks(e){
    mobileMenu.style.display = 'none'
    nav.setAttribute('style', 'display: flex');

}

function closeMobileMenu(){
    mobileMenu.setAttribute('style', 'display: none');
    nav.setAttribute('style', 'display: flex');
}



