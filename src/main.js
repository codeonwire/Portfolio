const homeBtn = document.querySelector('.homeBtn');
const contactBtn = document.querySelector('.contactBtn');
const contactBtn2 = document.querySelector('.contactBtn2');
const githubBtn = document.querySelector('.githubBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const skillsBtn = document.querySelector('.skillsBtn');
const gameBtn = document.querySelector('.gameBtn');
const bg = document.querySelector('.bg');

homeBtn.addEventListener('mouseover', () => {
    bg.src = 'img/homeBg.png'
    mouseover()
});
homeBtn.addEventListener('mouseout', () => {
    mouseout()
});

contactBtn.addEventListener('mouseover', () => {
    bg.src = 'img/contactBg.png'
    mouseover()
});
contactBtn.addEventListener('mouseout', () => {
    mouseout()
});

contactBtn2.addEventListener('mouseover', () => {
    bg.src = 'img/contactBg.png'
    mouseover()
});
contactBtn2.addEventListener('mouseout', () => {
    mouseout()
});

githubBtn.addEventListener('mouseover', () => {
    bg.src = 'img/githubBg.png'
    mouseover()
});
githubBtn.addEventListener('mouseout', () => {
    mouseout()
});

aboutBtn.addEventListener('mouseover', () => {
    bg.src = 'img/aboutBg.png'
    mouseover()
});
aboutBtn.addEventListener('mouseout', () => {
    mouseout()
});

skillsBtn.addEventListener('mouseover', () => {
    bg.src = 'img/skillsBg.png'
    mouseover()
});
skillsBtn.addEventListener('mouseout', () => {
    mouseout()
});

gameBtn.addEventListener('mouseover', () => {
    bg.src = 'img/gameBg.png'
    mouseover()
});
gameBtn.addEventListener('mouseout', () => {
    mouseout()
});

function mouseover(){
    bg.classList.add('lg:opacity-100');
    bg.classList.remove('lg:opacity-0');
}

function mouseout(){
    bg.classList.add('lg:opacity-0');
    bg.classList.remove('lg:opacity-100');
}





