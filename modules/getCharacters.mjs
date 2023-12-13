const getCharacters = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters')
    const data = await response.json()
    return data
}

const generarCardCarrousel = async (contenedor) => {
    let allCharacters = await getCharacters()
    let numeros = generarNumeros(allCharacters.length)
    let characters = []
    for (let i = 0; i < 5; i++) {
        characters.push(allCharacters[numeros[i]])
    }
        contenedor.innerHTML = `
            <input type="radio" name="testimonial" id="t-1">
            <input type="radio" name="testimonial" id="t-2">
            <input type="radio" name="testimonial" id="t-3" checked>
            <input type="radio" name="testimonial" id="t-4">
            <input type="radio" name="testimonial" id="t-5">
            <div class="testimonials">
                <label class="item" for="t-1">
                    <img src="${characters[0].imageUrl}" alt="${characters[0].fullName}">
                    <div class="testimonials__info">
                        <h3>${characters[0].fullName}</h3>
                        <section class="testimonials__hover">
                            <h4>${characters[0].title}</h4>
                            <h5>${characters[0].family}</h5>
                        </section>
                    </div>
                </label>
                <label class="item" for="t-2">
                    <img src="${characters[1].imageUrl}" alt="${characters[1].fullName}">
                    <div class="testimonials__info">
                        <h3>${characters[1].fullName}</h3>
                        <section class="testimonials__hover">
                        <h4>${characters[1].title}</h4>
                        <h5>${characters[1].family}</h5>
                        </section>
                    </div>
                </label>
                <label class="item" for="t-3">
                    <img src="${characters[2].imageUrl}" alt="${characters[2].fullName}">
                    <div class="testimonials__info">
                        <h3>${characters[2].fullName}</h3>
                        <section class="testimonials__hover">
                        <h4>${characters[2].title}</h4>
                        <h5>${characters[2].family}</h5>
                        </section>
                    </div>
                </label>
                <label class="item" for="t-4">
                    <img src="${characters[3].imageUrl}" alt="${characters[3].fullName}">
                    <div class="testimonials__info">
                        <h3>${characters[3].fullName}</h3>
                        <section class="testimonials__hover">
                        <h4>${characters[3].title}</h4>
                        <h5>${characters[3].family}</h5>
                        </section>
                    </div>
                </label>
                <label class="item" for="t-5">
                    <img src="${characters[4].imageUrl}" alt="${characters[4].fullName}">
                    <div class="testimonials__info">
                        <h3>${characters[4].fullName}</h3>
                        <section class="testimonials__hover">
                        <h4>${characters[4].title}</h4>
                        <h5>${characters[4].family}</h5>
                        </section>
                    </div>
                </label>
            </div>
            <div class="dots">
                <label for="t-1"></label>
                <label for="t-2"></label>
                <label for="t-3"></label>
                <label for="t-4"></label>
                <label for="t-5"></label>
            </div>
        `
}

function generarNumeros(largo) {
    let numeros = [];
    while (numeros.length < 5) {
        let numero = Math.floor(Math.random() * largo) + 1;
        if (numeros.indexOf(numero) === -1) {
            numeros.push(numero);
        }
    }
    return numeros;
}

export { getCharacters, generarCardCarrousel }