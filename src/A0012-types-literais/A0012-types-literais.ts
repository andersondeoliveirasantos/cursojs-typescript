let x = 10; // estint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // estint-disable-line

const person = {
  nome: 'Anderson' as const,
  sobrenome: 'de Oliveira Santos',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
