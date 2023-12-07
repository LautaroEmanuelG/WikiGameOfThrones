const fs = require('fs');
let datosGuardados = {};
const rutaArchivo = './quotes.json';

const getDataApi = async () => {
    const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/characters`);
    const datos = await response.json();
    datosGuardados = await { ...datosGuardados, ...datos };
    const contenidoFinal = JSON.stringify(datosGuardados, null, 2);
    fs.writeFileSync(rutaArchivo, contenidoFinal);
}

getDataApi();