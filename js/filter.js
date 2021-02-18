(function(){
const elem = document.querySelector('.puducts__list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.products__item'
});

const controlls = document.querySelectorAll('.filter__link');
const activeClass = 'filter__item--active';

controlls.forEach(function(control){
control.addEventListener('click', function(e){
    e.preventDefault();
controlls.forEach(link =>{
    link.closest('.filter__item').classList.remove(activeClass)
})

control.closest('.filter__item').classList.add(activeClass);
})
})
})();