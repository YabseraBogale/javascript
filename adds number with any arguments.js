function addTogether() {
  let arr=[].concat(...arguments);
  if(typeof(arr[0])==typeof(arr[1])){
      arr=arr[0]+arr[1];
  }
  else{
        return undefined;
  }
  return arr;
}

addTogether(2,3);

