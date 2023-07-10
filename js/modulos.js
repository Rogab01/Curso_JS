import saludar, { Saludar, PI, usuario } from "./constantes.js";

import { sumar, aritmetica as arit } from "./aritmeticas.js";

console.log("Archivos del modulo.js");

console.log(PI, usuario);

console.log(sumar(10, 5));

//console.log(aritmetica.multiplicar(10,5));

console.log(arit.multiplicar(10, 5));

saludar();

let saludo = new Saludar();
saludo;
