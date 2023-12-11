const getCharacters = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters')
    const data = await response.json()
    return data
}

const generarCardCarrousel = async (contenedor) => {
    let characters = await getCharacters()
    let numeros = generarNumeros(characters.length)
    for(let i = 0; i < 5; i++) {
        contenedor.innerHTML += `
        <div class="carrousel__character">
            <img src="${characters[numeros[i]].imageUrl}" alt="${characters[numeros[i]].fullName}">
            <h3>${characters[numeros[i]].fullName}</h3>
            <h4>${characters[numeros[i]].title}</h4>
            <h5>${characters[numeros[i]].family}</h5>
        </div>
        `
    }
}

function generarNumeros(largo) {
    let numeros = [];
    while(numeros.length < 5) {
        let numero = Math.floor(Math.random() * largo) + 1;
        if(numeros.indexOf(numero) === -1) {
            numeros.push(numero);
        }
    }
    return numeros;
}

export {getCharacters , generarCardCarrousel}