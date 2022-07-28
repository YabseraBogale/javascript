function uniteUnique(arr) {
  let arr2=[...arguments];
  let newarr=[];
  for(let i=0;i<arr2.length;i++){
    for(let j=0;j<arr2[i].length;j++){
      if(!newarr.includes(arr2[i][j])){
        newarr.push(arr2[i][j]);
      }
    }
  }
  return newarr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);