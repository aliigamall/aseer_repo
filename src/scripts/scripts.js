// document.querySelector('.main-header__responsive-icon').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// document.querySelector('.main-header__overlay').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// fab button
const fabComponent = document.querySelector('.fab');
const fabButton = document.querySelector('.fab__trigger');

if (fabComponent) {
    fabButton.addEventListener('click', () => {
        fabComponent.classList.toggle('is-opened');
    });
};

$(function () {
    // tabs
    var tabsComponent = $('.tab-bar');
    if (tabsComponent) {
        $('.tab-bar__link').on('click', function (event) {
            event.preventDefault();
            var tabTarget = this.hash;
            $('.tab-bar__item').removeClass('tab-bar__item--active');
            $(this).parent().addClass('tab-bar__item--active');

            $('.tab-item').removeClass('tab-item--active');
            $(tabTarget).addClass('tab-item--active');
        });
    }
});



