function destroyer(arr) {
 let newarr=[...arguments].slice(1);
let arr1=[];
for(let i=0;i<arr.length;i++){
    if(newarr.indexOf(arr[i])==-1){
      arr1.push(arr[i]);
    }
}
  return arr1;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);