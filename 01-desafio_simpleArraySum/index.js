function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i += 1) {
    sum += ar[i];
  }
  console.log(sum);
}

simpleArraySum([1, 2, 3]);
