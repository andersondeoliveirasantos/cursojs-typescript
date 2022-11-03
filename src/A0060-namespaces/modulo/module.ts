/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Anderson';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Anderson');
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Anderson');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;
