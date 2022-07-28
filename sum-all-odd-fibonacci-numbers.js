function sumFibs(num) {
  let sum=0;
  let fib=1;
  let result=0;

    while(fib<=num){
        
        if(fib%2!==0){
            result+=fib;
               }
        fib+=sum;
        sum=fib-sum;
    }
  

  return result;
}

sumFibs(10);