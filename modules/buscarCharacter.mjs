import { getCharacters } from "./getCharacters.mjs";

const buscarCharacter = async (resultado) => {
    let characters = await getCharacters()
    let buscar = input.value.toLowerCase().trim();
    input.value = '';
    resultado.innerHTML = '';
    // Buscar personajes que coincidan con el valor del input
    await characters.forEach((personaje) => {
        if (personaje.fullName.toLowerCase().includes(buscar)) {
            //Generar presentacion del personaje en resultado
            resultado.innerHTML = `
        <div class="presentacion">
            <img src="${personaje.imageUrl}" alt="${personaje.fullName}">
            <div class="testimonials__info">
                <h3>${personaje.fullName}</h3>
                    <h4>${personaje.title}</h4>
                    <h5>${personaje.family}</h5>
            </div>
        </div>
        `
            resultado.scrollIntoView({ behavior: 'smooth' });
        } else if (resultado.innerHTML === '') {
            resultado.innerHTML = `
            <div class="presentacion__notfound btn">
                <h3>Character not found</h3>
            </div>
            `
        }
    })
}

export { buscarCharacter }