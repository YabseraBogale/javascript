function chunkArrayInGroups(arr, size) {
  let newarr=[];
 
  for(let i=0;i<arr.length;i+=size){
    newarr.push(arr.slice(i,i+size));
         
  }
  return newarr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);