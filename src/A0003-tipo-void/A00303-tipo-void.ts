function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
export { pessoa };

const pessoa = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Anderson', 'de Oliveira Santos');
pessoa.exibirNome();
