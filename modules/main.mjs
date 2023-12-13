import { buscarCharacter } from "./buscarCharacter.mjs"
import { generarCardCarrousel, getCharacters } from "./getCharacters.mjs"
import { getQuotes } from "./getQuotes.mjs"
import { map_character } from "./mapCharacters.mjs"

let frase = document.querySelector('.frase')

getQuotes(frase)

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