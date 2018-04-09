'use strict';

// document.querySelector('.main-header__responsive-icon').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// document.querySelector('.main-header__overlay').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// fab button
var fabComponent = document.querySelector('.fab');
var fabButton = document.querySelector('.fab__trigger');

if (fabComponent) {
    fabButton.addEventListener('click', function () {
        fabComponent.classList.toggle('is-opened');
    });
};

// tabs
var tabsComponent = document.querySelector('.tab-bar');
var tabItems = document.querySelectorAll('.tab-bar__link');

if (tabsComponent) {
    [].forEach.call(tabItems, function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            var tabTarget = item.getAttribute("href");
            document.querySelector('.tab-bar__item--active').classList.remove('tab-bar__item--active');
            item.parentNode.classList.add('tab-bar__item--active');

            document.querySelector('.tab-item--active').classList.remove('tab-item--active');
            document.querySelector(tabTarget).classList.add('tab-item--active');
        });
    });
};
//# sourceMappingURL=scripts.js.map
