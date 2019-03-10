//requireds
const fs = require('fs');
let multiplicar = (base, limite = 10) => {

    let dato = "";

    for (let i = 1; i <= limite; i++)
        dato += `${base}  *  ${i}   =  ${base * i} \n`;

    return dato;
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            if (!Number(limite))
                reject(`El valor ${limite} no es un numero`);
            return;
        }
        resolve(multiplicar(base, limite));

    });
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            if (!Number(limite))
                reject(`El valor ${limite} no es un numero`);
            return;
        }
        let data = multiplicar(base, limite);

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}