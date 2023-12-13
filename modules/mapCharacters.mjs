import { getCharacters } from "./getCharacters.mjs";
const map_character = async (mapeo) => {
    const characters = await getCharacters();
    // for (let i = 0; i < characters.length; i++) {
    //     mapeo.innerHTML += `
    //         <label class="card" id="${characters[i].fullName}">
    //         <img src="${characters[i].imageUrl}" alt="${characters[i].fullName}">
    //         <div class="testimonials__info">
    //             <h3>${characters[i].fullName}</h3>
    //             <section class="testimonials__hover">
    //                 <h4>${characters[i].title}</h4>
    //                 <h5>${characters[i].family}</h5>
    //             </section>
    //         </div>
    //         </label>
    //     `
    // }
    mapCharacter(characters,mapeo);
}

let currentStartIndex = 0;
const charactersPerGroup = 6; // Ajusta este número a la cantidad de personajes que quieres mostrar a la vez

async function mapCharacter(allCharacters,mapeo) {
    mapeo.innerHTML = '';
    const characters = allCharacters.slice(currentStartIndex, currentStartIndex + charactersPerGroup);
    // Tu código existente para mapear y mostrar los personajes
    for (let i = 0; i < characters.length; i++) {
        mapeo.innerHTML += `
            <label class="card" id="${characters[i].fullName}">
            <img src="${characters[i].imageUrl}" alt="${characters[i].fullName}">
            <div class="testimonials__info">
                <h3>${characters[i].fullName}</h3>
                <section class="testimonials__hover">
                    <h4>${characters[i].title}</h4>
                    <h5>${characters[i].family}</h5>
                </section>
            </div>
            </label>
        `
    }
}


export { map_character}