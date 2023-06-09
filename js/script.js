"use strict";

// DICHIARAZIONE ARRAY CONTENENTE TUTTE LE IMG
let imgList = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]

// DICHIARAZIONE CONSTANTE CONTENENTE IL CONTENITORE DELLE SLIDE CON CLASSE "SLIDER"
const sliderElement = document.querySelector('.slider');

// DICHIARAZIONE VARIABILE SLIDER CONTENT DA INSERIRE DENTRO SLIDER ELEMENT
let sliderContent = "";


// CICLO FOR CHE SCORRE TUTTI GLI ELEMENTI DELL'ARRAY IMG_LIST
for (let i = 0; i < imgList.length; i++){

    // DICHIARAZIONE VARIABILE CURRENT IMAGES
    let currentImages = imgList[i];

    // INSERIMENTO ELEMENTI HTML ALL'INTERNO DELLA VARIABILE SLIDER CONTENT
    sliderContent += `
    <div class="slide">
        <img src="${currentImages}" alt="slide-${i+1}">
    </div>`
}

// INSERIMENTO CONTENUTI SLIDER_CONTENT ALL'INTERNO DELLA CONSTANTE SLIDER_ELEMENT
sliderElement.innerHTML += sliderContent;

// DICHIARAZIONE CONSTANTE CONTENENTE TUTTI GLI ELEMENTI HTML CON CLASSE "SLIDE"
const allSlides = document.querySelectorAll('.slide');

// DICHIARAZIONE VARIABILE CONTATORE INDICI ELEMENTI HTML CON CLASSE "SLIDE" E CLASSE "ACTIVE"
let activeSlides = 0;

// INSERIMENTO CLASSE "ACTIVE" ALL'INTERNO DEL PRIMO ELEMENTO HTML CON CLASSE "SLIDE"
allSlides[activeSlides].classList.add('active');



// DICHIARAZIONE CONSTANTE CHE CONTIENE IL PREVIOUS BUTTON HTML
const previousButton = document.getElementById('previous');

// DICHIARAZIONE CONSTANTE CHE CONTIENE IL NEXT BUTTON HTML
const nextButton = document.getElementById('next');


// UTENTE CLICCA SUL PREVIOUS BUTTON
previousButton.addEventListener('click', function(){
    
    // RIMOZIONE CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
    allSlides[activeSlides].classList.remove('active');

    if (activeSlides > 0){  // LA VARIABILE CONTANTORE INDICI NON È ARRIVATA AL PRIMO INDICE
    
        // DECREMENTO VARIABILE CONTANTORE INDICI ELEMENTI HTML CON CLASSE "SLIDE" E CLASSE "ACTIVE"
        activeSlides--;
    }

    // INSERIMENTO CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
    allSlides[activeSlides].classList.add('active');
})


// UTENTE CLICCA SUL NEXT BUTTON
nextButton.addEventListener('click', function(){

    // RIMOZIONE CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
    allSlides[activeSlides].classList.remove('active');

    if (activeSlides < imgList.length - 1){ // LA VARIABILE CONTANTORE INDICI NON È ARRIVATA ALL'ULTIMO INDICE
    
        // INCREMENTO VARIABILE CONTANTORE INDICI ELEMENTI HTML CON CLASSE "SLIDE" E CLASSE "ACTIVE"
        activeSlides++;
    }

    // INSERIMENTO CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
    allSlides[activeSlides].classList.add('active');
})

