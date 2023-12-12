import { buscarCharacter } from "./buscarCharacter.mjs"
import { generarCardCarrousel } from "./getCharacters.mjs"
import { getQuotes } from "./getQuotes.mjs"

let frase1 = document.querySelector('.frase1')
let frase2 = document.querySelector('.frase2')

getQuotes(frase1)
getQuotes(frase2)

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