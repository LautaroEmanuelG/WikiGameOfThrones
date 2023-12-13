import { getCharacters } from "./getCharacters.mjs";
const map_character = async (mapeo) => {
    const characters = await getCharacters();
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