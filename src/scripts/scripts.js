// document.querySelector('.main-header__responsive-icon').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// document.querySelector('.main-header__overlay').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// fab button
const fabComponent = document.querySelector('.fab');
const fabButton = document.querySelector('.fab__trigger');
if(fabComponent){
    fabButton.addEventListener('click', ()=>{
        fabComponent.classList.toggle('is-opened');
    });
};