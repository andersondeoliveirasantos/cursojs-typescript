// Array <T> - T[ ]

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenateString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result1 = multiplyArgs(1, 2, 3);
const concatenation = concatenateString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result1);
console.log(concatenation);
console.log(upper);
