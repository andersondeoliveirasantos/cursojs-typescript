const objectA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyA = 'Other value';
objectA.keyC = 'new key';
objectA.keyD = 'new key';

console.log(objectA);
