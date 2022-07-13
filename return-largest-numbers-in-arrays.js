function largestOfFour(arr) {
  let num=0;
  let lgnum=[];
  for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>num){
              num=arr[i][j];
        }
     }
     lgnum.push(num);
     num=-1000;
  }
  return lgnum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);