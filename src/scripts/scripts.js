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

// tabs
const tabsComponent = document.querySelector('.tab-bar');
const tabItems = document.querySelectorAll('.tab-bar__link');

if(tabsComponent){
    [].forEach.call(tabItems, function(item) {
        item.addEventListener('click', (event)=>{
            event.preventDefault();

            var tabTarget = item.getAttribute("href");
            document.querySelector('.tab-bar__item--active').classList.remove('tab-bar__item--active');
            item.parentNode.classList.add('tab-bar__item--active');

            document.querySelector('.tab-item--active').classList.remove('tab-item--active');
            document.querySelector(tabTarget).classList.add('tab-item--active');
        });
    });
};