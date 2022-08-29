/*
    Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
    If there are no strings containing numbers, return an empty array.
*/
function string(arr){
    let newarr=[];
    for( i in arr){
      if(arr[i].match(/[0-9]/gi)){
          newarr.push(arr[i]);
      }
    }
    return newarr;
}
console.log(string(["1a","2","3b"]));
