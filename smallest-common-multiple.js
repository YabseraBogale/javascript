function smallestCommons(arr) {
  arr=arr.sort((a,b)=>b-a);
  let [end,be]=arr;
  let com=end;
  for(let i=be;i<end;i++){
    if(com%i!==0){
      com+=end;
      i=be-1;
     
    }
    else if(i==end){
      
      return com;
    }
  }
  return com;
}

smallestCommons([1,5]);