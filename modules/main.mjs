import { buscarCharacter } from "./buscarCharacter.mjs"
import { generarCardCarrousel, getCharacters } from "./getCharacters.mjs"
import { getQuotes } from "./getQuotes.mjs"
import { map_character } from "./mapCharacters.mjs"

let otraFraseButton = document.querySelector('.another-frase');
let frase = document.querySelector('.frase')

getQuotes(frase)
otraFraseButton.addEventListener('click', () => {
    getQuotes(frase);
});




let carrousel = document.querySelector('.slider')

generarCardCarrousel(carrousel)

let submit = document.querySelector("#buscar")
let input = document.querySelector("#input")
let resultado = document.querySelector("#resultado");

// Añadir un event listener al botón de enviar
submit.addEventListener('click', () => {
    if (input.value.length >= 3) {
        buscarCharacter(resultado);
    }
});

// Añadir un event listener al input para detectar la tecla Enter
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && input.value.length >= 3) {
        e.preventDefault();
        buscarCharacter(resultado);
    }
});

//mapeo de personajes traidos de las api con getcharacters
let mapeo = document.querySelector('#map_characters')
map_character(mapeo);

//scroll de los personajes
let map_characters = document.querySelector('#map_characters');
let scrollLeft = document.querySelector('#scrollLeft');
let scrollRight = document.querySelector('#scrollRight');

function smoothScroll(element, change, duration) {
    let start = element.scrollLeft,
        startTime = performance.now(),
        val, now, elapsed, t;

    function animateScroll(){
        now = performance.now();
        elapsed = (now - startTime) / 1000;
        t = (elapsed/duration);

        element.scrollLeft = start + change * easeInOutQuad(t);

        if(t < 1)
            requestAnimationFrame(animateScroll);
    };

    function easeInOutQuad(t) { 
        return t ;
    };

    animateScroll();
}

let scrollInterval;
let scrollAmount = 300;

scrollLeft.addEventListener('mouseover', () => {
    scrollInterval = setInterval(() => {
        smoothScroll(map_characters, -scrollAmount, 0.5);
    }, 100); // Repite cada 500 milisegundos
});

scrollRight.addEventListener('mouseover', () => {
    scrollInterval = setInterval(() => {
        smoothScroll(map_characters, scrollAmount, 0.5);
    }, 100); // Repite cada 500 milisegundos
});

scrollLeft.addEventListener('mouseout', () => {
    clearInterval(scrollInterval); // Detiene la repetición cuando el mouse sale del botón
});

scrollRight.addEventListener('mouseout', () => {
    clearInterval(scrollInterval); // Detiene la repetición cuando el mouse sale del botón
});

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        // Si se está desplazando hacia arriba, muestra el formulario
        document.querySelector('.form').style.display = 'flex';
    } else {
        // Si se está desplazando hacia abajo, oculta el formulario
        document.querySelector('.form').style.display = 'none';
    }
    lastScrollTop = scrollTop;
});