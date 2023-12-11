const getQuotes = async (frase) => {
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random/2')
    const data = await response.json()
    frase.innerHTML = `
    <h3 class="frase__sentence">${data[0].sentence}</h3>
    <span class="frase__name">${data[0].character.name}, </span> <span>${data[0].character?.slug}</span>
    <div class="frase__house">
        <p>${data[0].character.house.name}</p>
    </div>
    `
}
export { getQuotes }