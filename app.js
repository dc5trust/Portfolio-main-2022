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
//global variables 
// let darkModeSwitch = false;

// darkModeBtn.addEventListener('click', (e)=>{
//     //Switch Background Color to Black
//     document.body.classList.toggle('dark-mode-background');
    
//     //check if Dark Mode is ON, 'false' or 'true'  will triggler the appropriate Shadow 
//     if(!darkModeSwitch){
//         //switch icon; from the Moon to the Sun 
//         darkModeBtn.classList.remove('fa-moon');
//         darkModeBtn.classList.add('fa-sun');
//         nav.style.boxShadow = '0 15px 25px rgba(255, 255, 255, 0.07), 0 4px 4px 0 rgba(255, 255, 255, 0.05)';
//         darkModeSwitch = !darkModeSwitch;
//     }else if(darkModeSwitch){
//         //switch icon; from the Sun to the Moon 
//         darkModeBtn.classList.add('fa-moon');
//         darkModeBtn.classList.remove('fa-sun');
//         nav.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.07), 0 4px 4px 0 rgba(0, 0, 0, 0.05)';
//         darkModeSwitch = !darkModeSwitch;
//     }
    
// });

