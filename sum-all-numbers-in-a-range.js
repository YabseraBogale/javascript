function sumAll(arr) {
  let newarr=arr.sort();
  let sum=0;
 if(newarr[0]<newarr[1]){
      
      while(arr[0]<=arr[1]){
            sum+=arr[0];
            arr[0]++;
      }
      return sum;

 }else{
      while(arr[0]>=arr[1]){
              sum+=arr[1];
              arr[1]++;       
      }
 }
  return sum;
}

sumAll([1, 4]);