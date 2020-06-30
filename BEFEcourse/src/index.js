
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navBar');
  burger.addEventListener('click', () => {
    nav.classList.toggle('navBar-active');
  });
}

navSlide();
