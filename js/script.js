"use strict";

// DICHIARAZIONE ARRAY CONTENENTE TUTTE LE IMG
let img_list = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]

// DICHIARAZIONE CONSTANTE CONTENENTE IL CONTENITORE DELLE SLIDE CON CLASSE SLIDER
const sliderElement = document.querySelector('.slider');

// DICHIARAZIONE VARIABILE SLIDER CONTENT DA INSERIRE DENTRO SLIDER ELEMENT
let sliderContent = "";


// CICLO FOR CHE SCORRE TUTTI GLI ELEMENTI DELL'ARRAY IMG_LIST
for (let i = 0; i < img_list.length; i++){

    // DICHIARAZIONE VARIABILE CURRENT IMAGES
    let currentImages = img_list[i];
    console.log(currentImages)

    // INSERIMENTO ELEMENTI HTML ALL'INTERNO DELLA VARIABILE SLIDER CONTENT
    sliderContent += `
    <div class="slide active">
        <img src"./img/01.webp" alt="slide-${i+1}">
    </div>`
}

sliderElement.innerHTML = sliderContent;