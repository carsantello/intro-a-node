//var cowsay = require('cowsay');

//console.log('hola');
//console.log('Soy un archivo de JS');

var cowsay = require('cowsay');
const inicio = require('./inicio');
const nudo = require('./nudo');

//var nombre = "carsantello";
let personaje = "carsantello";
const edad = Math.random() * 100;
//Math.round(); redondea
//Math.floor(); a la cifra baja
//Math.ceil();  a la cifra alta

//const edad = 80;
let villano = "peje";
let lugar = "cdmx";
let hobby = "bailar";
//const cabello = "oscuro";

//let nombre = "carsantello";
//let fraseVaquita = "Comere todo el pasto del mundo";
//let historia = "Hola mi nombre es " + nombre + ". Y hoy me encontre con una vaquita pirata que decia";

console.log(inicio.historia(personaje, lugar, edad, villano, hobby));
console.log(nudo.historia(villano, hobby));
//console.log(final.historia(villano, hobby));

console.log(cowsay.say({
	text : "I'm a moooodule called within the terminal",
	e : "x-o",
	T : "u "
}));

// or cowsay.think()
