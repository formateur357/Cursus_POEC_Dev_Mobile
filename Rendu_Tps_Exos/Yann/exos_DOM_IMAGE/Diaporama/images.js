const itemsSlide = document.querySelectorAll('.container-slides img');
const nbSlides = itemsSlide.length;
const suivant = document.querySelector('.nav-suivant');
const precedent = document.querySelector('.nav-precedent');
let count = 0;

suivant.addEventListener('click', slideSuivante);

function slideSuivante(){
    itemsSlide[count].classList.remove('active');

    if(count < nbSlides - 1){
        count++
    }else{
        count = 0;
    }

    itemsSlide[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedent);

function slidePrecedent(){
    itemsSlide[count].classList.remove('active');

    if(count > 0){
        count--
    }else{
        count = nbSlides -1;
    }

    itemsSlide[count].classList.add('active');
}
