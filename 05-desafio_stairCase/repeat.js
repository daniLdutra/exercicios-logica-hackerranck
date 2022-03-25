function staircase(n) {
  // aqui usamos apenas um loop for onde eu rastreia o número de linhas
  // o número de linhas (i) deve ser menor ou igual a n
  for (let i = 1; i <= n; i++) {
    // imprima um " " n-i vezes e acrescente um # i vezes
    // console log adds a new line by default
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}
staircase(6);
