const darkModeBtn = document.querySelector('.far');
const nav = document.querySelector('.nav-container');


//global variables 
let darkModeSwitch = false;

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
