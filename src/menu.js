const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('menu__btn--active');
  menuList.classList.toggle('menu__list--active');
  menu.classList.toggle('active');
})
console.log('111')

// $('.menu__btn').on('click', function () {
//     console.log('ggfdddd')
//   $('.menu__list').toggleClass('menu__list--active');
//   $('.menu__btn').toggleClass('menu__btn--active');
// })