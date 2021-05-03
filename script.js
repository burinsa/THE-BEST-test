// @ts-nocheck

// слайдер дети

(function () {
  let childSlides = document.querySelectorAll('.child');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);
  

  function nextSlide() {
    childSlides[currentSlide].classList.remove('show');
      currentSlide = (currentSlide+1)%childSlides.length;
      childSlides[currentSlide].classList.add('show');
  }
})();

// nav-stick
let navStick = document.querySelector('.wrap-nav-stick');
let headerContacts = document.querySelector('.header__contacts');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 210) {
    headerContacts.style.opacity = '0';
    navStick.style.top = '0px';

  } else {
    navStick.style.top = '-1000px';
    headerContacts.style.opacity = '1';
  }
});

// ----------


let coursesList = document.querySelectorAll('.courses__item');
let steps = document.querySelectorAll('.month__pagination');

checkToList(coursesList, "active");
checkToList(steps, 'active-step')

function checkToList (list, mod) {
  list.forEach((item) => {
    item.addEventListener('click', (evt) => {
      list.forEach((item) => {
            item.classList.remove(mod);
        });
        item.classList.add(mod);
    })
  });
}

// статУи
(function () {
  let statuettes = document.querySelectorAll('.statuettes__item');
  let currentSlide = 0;
  setInterval(nextSlide, 5000);
  

  function nextSlide() {
    statuettes[currentSlide].classList.remove('statuette__show');
      currentSlide = (currentSlide+1)%statuettes.length;
      statuettes[currentSlide].classList.add('statuette__show');
  }
})();


