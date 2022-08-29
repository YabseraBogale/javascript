/*
        Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
*/
function boom(arr){
  if(arr.indexOf(7)!==-1){
      return "Boom";
  }
  return "there is no 7 in the array";
}
console.log(boom([1,3,7]))
