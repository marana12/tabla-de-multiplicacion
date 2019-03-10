const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(`================`.yellow);
console.log(`${comando}`.green);
console.log(`base: ${argv.base}`.blue);
console.log(`limite: ${argv.limite}`.magenta);
console.log(`================`.yellow);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Arhivo creado: `.yellow, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log(`El comando ${comando} es incorrecto`);
}


/*let base = "avb";
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]; */

// crearArchivo(argv.base)
//     .then(archivo => console.log(`Arhivo creado: ${archivo}`))
//     .catch(e => console.log(e));