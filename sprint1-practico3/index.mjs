import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

//Leer y mostrar la lista de superheroes ordenada
const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

//Agregar nuevos superhéroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//Leer y mostrar la lista de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Lista superheroes ordenados:');
console.log(superheroes);