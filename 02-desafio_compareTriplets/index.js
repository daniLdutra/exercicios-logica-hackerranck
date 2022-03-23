function compareTriplets(a, b) {
  let pontosAlice = 0;
  let pontosBob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) pontosAlice += 1;
    if (a[i] < b[i]) pontosBob += 1;
  }
  return `${pontosAlice} ${pontosBob}`;
}

compareTriplets([1, 2, 3], [3, 3, 1]);
