enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
  ROXO = 10, // 10
  LARANJA = 200, // 200
}

// Podemos criar outro enum e ele vai unir um com o outro.
enum Cores {
  DOURADO = 1,
  PRATA = 2,
  OURO = 3,
}

console.log(Cores);

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);
