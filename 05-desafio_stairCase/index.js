function staircase(n) {
  //loop for externo para acompanhar o número total de linhas (n)
  for (let line = 1; line <= n; line += 1) {
    const res = [];
    //loop for interno para acompanhar os espaços anteriores em cada linha
    //space deve começar em n-1
    //space deve ser maior ou igual a i porque o número de espaços diminui à medida que i aumenta
    /// diminui space bc o número de espaços diminui à medida que i aumenta
    for (let space = n - line; space >= 1; space -= 1) {
      res.push(' ');
    }
    // loop for interno para acompanhar os #hash em cada linha
    // hash deve começar em um porque a primeira linha sempre terá um #
    // hash deve ser menor ou igual à linha em que estamos, pois hash se aproximará e eventualmente será igual a n
    //hash aumenta, pois incrementamos hash para igual a i, que eventualmente será igual a n
    for (let hash = 1; hash <= line; hash++) {
      res.push('#');
    }
    console.log(res.join(''));
  }
}

staircase(6);
