/* eslint-disable */

// Tipos básicos ( aqui ocorre inferência de tipos )

let nome: string = 'Anderson';  // Qualquer tipo de strings: ' ', " ", ` `

let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744

let adulto: boolean = true; // true or false

let simbolo: symbol = Symbol( 'qualquer-symbol'); // symbol

// let big: bigint = 10n; // bigint


// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeStrings: Array<string> = ['a', 'b', 'c']
