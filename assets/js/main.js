$md = 768;
$lg = 992;
// elements
const headerBottom = document.querySelector('.header_bottom');
const menu = document.querySelector('.menu');
const navbarToggler = document.querySelector('.navbar-toggler');



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

})