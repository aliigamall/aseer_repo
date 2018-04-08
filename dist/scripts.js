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
//# sourceMappingURL=scripts.js.map
