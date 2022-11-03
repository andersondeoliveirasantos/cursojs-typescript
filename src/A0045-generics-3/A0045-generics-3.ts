interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo2<string, number> = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Daniela Cristina',
  sobrenome: 'da Silva de Oliveira',
  idade: 30,
};

console.log(aluno1, aluno2, aluno3);

// Module mode
export default 1;
