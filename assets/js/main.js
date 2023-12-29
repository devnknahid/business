$('.counter').counterUp({
   delay: 10,
   time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('span').addClass('animated fadeIn');

$md = 768;
$lg = 992;
// elements
const headerBottom = document.querySelector('.header_bottom');
const menu = document.querySelector('.menu');
const navbarToggler = document.querySelector('.navbar-toggler');
const topBtn = document.getElementById('top');



window.addEventListener('scroll', () => {

   if (window.innerWidth > $md) {

      if (window.scrollY > 100) {
         headerBottom.classList.add('fixedHeaderBottom');
      } else {
         headerBottom.classList.remove('fixedHeaderBottom');

      }
   }
   if (window.innerWidth <= $md) {
      if (window.scrollY > 100) {
         menu.classList.add('fixed');
         navbarToggler.classList.add('fixedTogger');

      } else {
         menu.classList.remove('fixed');
         navbarToggler.classList.remove('fixedTogger');
      }
   }
   if (window.scrollY > 100) {
      topBtn.classList.add('activeTop');
   } else {
      topBtn.classList.remove('activeTop');
   }
   let scrollTimeout;
   clearTimeout(scrollTimeout);
   topBtn.classList.add("hidden");
   scrollTimeout = setTimeout(function () {
      topBtn.classList.remove("hidden");
   }, 500);
})