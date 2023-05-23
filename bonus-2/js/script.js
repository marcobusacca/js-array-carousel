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
const sliderThumbnailElement = document.querySelector('.slider_thumbnail');

// DICHIARAZIONE VARIABILE SLIDER CONTENT DA INSERIRE DENTRO SLIDER ELEMENT
let sliderContent = "";

// DICHIARAZIONE VARIABILE SLIDER THUMBNAIL CONTENT DA INSERIRE DENTRO SLIDER THUMBNAIL ELEMENT
let sliderThumbnailContent = "";



// CICLO FOR CHE SCORRE TUTTI GLI ELEMENTI DELL'ARRAY IMG_LIST
for (let i = 0; i < imgList.length; i++){

    // DICHIARAZIONE VARIABILE CURRENT IMAGES
    let currentImages = imgList[i];

    // INSERIMENTO ELEMENTI HTML ALL'INTERNO DELLA VARIABILE SLIDER CONTENT
    sliderContent += `
    <div class="slide">
        <img src="${currentImages}" alt="slide-${i+1}">
    </div>`

    // INSERIMENTO ELEMENTI HTML ALL'INTERNO DELLA VARIABILE SLIDER THUMBNAIL CONTENT
    sliderThumbnailContent+= `
    <div class="slide_thumbnail opacity">
        <img src="${currentImages}" alt="slide-thumbnail-${i+1}">
    </div>`
}

// INSERIMENTO CONTENUTI SLIDER_CONTENT ALL'INTERNO DELLA CONSTANTE SLIDER_ELEMENT
sliderElement.innerHTML += sliderContent;

// INSERIMENTO CONTENUTI SLIDER_THUMBNAIL_CONTENT ALL'INTERNO DELLA CONSTANTE SLIDER_THUMBNAIL_ELEMENT
sliderThumbnailElement.innerHTML += sliderThumbnailContent;

// DICHIARAZIONE CONSTANTE CONTENENTE TUTTI GLI ELEMENTI HTML CON CLASSE "SLIDE"
const allSlides = document.querySelectorAll('.slide');

// DICHIARAZIONE CONSTANTE CONTENENTE TUTTI GLI ELEMENTI HTML CON CLASSE "SLIDE_THUMBNAIL"
const allSlidesThumbnail = document.querySelectorAll('.slide_thumbnail');

// DICHIARAZIONE VARIABILE CONTATORE INDICI ELEMENTI HTML
let activeSlides = 0;

// INSERIMENTO CLASSE "ACTIVE" ALL'INTERNO DEL PRIMO ELEMENTO HTML CON CLASSE "SLIDE"
allSlides[activeSlides].classList.add('active');

// INSERIMENTO CLASSE "SELECTED_SLIDE" ALL'INTERNO DEL PRIMO ELEMENTO HTML CON CLASSE "SLIDE_THUMBNAIL"
allSlidesThumbnail[activeSlides].classList.add('selected_slide');

// RIMOZIONE CLASSE "OPACITY" ALL'INTERNO DEL PRIMO ELEMENTO HTML CON CLASSE "SLIDE_THUMBNAIL"
allSlidesThumbnail[activeSlides].classList.remove('opacity');


// DICHIARAZIONE CONSTANTE CHE CONTIENE IL PREVIOUS BUTTON HTML
const previousButton = document.getElementById('previous');

// DICHIARAZIONE CONSTANTE CHE CONTIENE IL NEXT BUTTON HTML
const nextButton = document.getElementById('next');


// UTENTE CLICCA SUL PREVIOUS BUTTON
previousButton.addEventListener('click', function(){

    if (activeSlides > 0){  // LA VARIABILE CONTANTORE INDICI NON È ARRIVATA AL PRIMO INDICE

        // RIMOZIONE CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.remove('active');

        // RIMOZIONE CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('selected_slide');

        // INSERIMENTO CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('opacity');
    
        // DECREMENTO VARIABILE CONTANTORE INDICI ELEMENTI HTML
        activeSlides--;
    
        // INSERIMENTO CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.add('active');

        // INSERIMENTO CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('selected_slide');

        // RIMOZIONE CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('opacity');

    } else{ // LA VARIABILE CONTANTORE INDICI È ARRIVATA AL PRIMO INDICE, LA FACCIAMO RIPARTIRE DALL'ULTIMO INDICE

        // RIMOZIONE CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.remove('active');

        // RIMOZIONE CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('selected_slide');

        // INSERIMENTO CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('opacity');
    
        // RESET VARIABILE CONTANTORE INDICI ELEMENTI HTML
        activeSlides = imgList.length - 1;
    
        // INSERIMENTO CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.add('active');

        // INSERIMENTO CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('selected_slide');

        // RIMOZIONE CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('opacity');
    }
})


// UTENTE CLICCA SUL NEXT BUTTON
nextButton.addEventListener('click', function(){


    if (activeSlides < imgList.length - 1){ // LA VARIABILE CONTANTORE INDICI NON È ARRIVATA ALL'ULTIMO INDICE

        // RIMOZIONE CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.remove('active');

        // RIMOZIONE CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('selected_slide');

        // INSERIMENTO CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('opacity');
    
        // INCREMENTO VARIABILE CONTANTORE INDICI ELEMENTI HTML
        activeSlides++;
    
        // INSERIMENTO CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.add('active');

        // INSERIMENTO CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('selected_slide');

        // RIMOZIONE CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('opacity');

    } else{ // LA VARIABILE CONTANTORE INDICI È ARRIVATA ALL'ULTIMO INDICE, LA FACCIAMO RIPARTIRE DAL PRIMO INDICE

        // RIMOZIONE CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.remove('active');

        // RIMOZIONE CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('selected_slide');

        // INSERIMENTO CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('opacity');
    
        // RESET VARIABILE CONTANTORE INDICI ELEMENTI HTML
        activeSlides = 0;
    
        // INSERIMENTO CLASSE "ACTIVE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE"
        allSlides[activeSlides].classList.add('active');

        // INSERIMENTO CLASSE "SELECTED_SLIDE" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.add('selected_slide');

        // RIMOZIONE CLASSE "OPACITY" ALL'ELEMENTO HTML ATTUALE CON CLASSE "SLIDE_THUMBNAIL"
        allSlidesThumbnail[activeSlides].classList.remove('opacity');
    }
})

