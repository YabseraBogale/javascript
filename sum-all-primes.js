function sumPrimes(num) {
  let prime=[];
  for(let i=2;i<=num;i++){
    if(prime.every((prime)=>i%prime!==0)){
      console.log(prime.push(i));
    }
  }
  return prime.reduce((sum,prime)=>sum+prime, 0);
}
sumPrimes(977);