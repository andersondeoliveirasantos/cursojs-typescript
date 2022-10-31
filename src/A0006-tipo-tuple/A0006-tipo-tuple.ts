// Tuple
const customerData1: [number, string] = [1, 'Anderson']; // se usar o readonly = Não deixa fazer alteração
const customerData2: [number, string, string] = [
  1,
  'Anderson',
  'de Oliveira Santos',
];
const customerData3: [number, string, string?] = [
  1,
  'Alice',
  'Silva de Oliveira',
];
const customerData4: [number, string, ...string[]] = [
  1,
  'Daniela',
  'Crisntina da Silva de Oliveira',
];

customerData1[0] = 100;
customerData1[1] = 'Daniela';

console.log(customerData1);
console.log(customerData2);
console.log(customerData3);
console.log(customerData4);

// readonly array
const array1: readonly string[] = ['Tomaz', 'Rogrigues dos Santos'];
const array2: ReadonlyArray<string> = ['Narny', 'de Oliveira Santos'];

console.log(array1);
console.log(array2);
