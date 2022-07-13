function factorialize(num) {
  let n=1;
  for(let i=1;i<=num;i++){
    n*=i;
  }
  num=n;
  return num;
}

factorialize(5);