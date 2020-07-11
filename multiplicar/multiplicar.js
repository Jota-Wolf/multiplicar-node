//existen 3 tipos de require en node
//los require que son nativos de node , los require externos (ej: express)
//y los require que nosotros creamos en el proyecto
//const fs = require('./static/fs');
const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {

	console.log('===================='.green);
	console.log(`====Tabla del ${base}====`.red);
	console.log('===================='.green);

	for (let i = 1; i <= limite; i++) {
		console.log(`${base}*${i} = ${base * i}`);
	}
}

const crearArchivo = (base,limite =10) => {
	return new Promise((resolve, reject) => {

		if (!Number(base)) {
			//el reject no finaliza el programa , por eso al ocupar un return lo finaliza
			reject(`El valor introducido ${base} no es un número`);
			return;
		}
		let data = '';
		for (let i = 1; i <= limite; i++) {
			data += (`${base}*${i} = ${base * i}\n`);
		}

		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
			if (err)
				reject(err)
			else
				resolve(`tabla-${base}-al-${limite}.txt`)
		});
	});
}

//Node tiene un objeto global llamado module , que esta disponible en toda la app
module.exports = {
	crearArchivo, listarTabla
}
