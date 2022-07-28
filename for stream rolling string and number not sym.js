function steamrollArray(arr) {
  
  let newarr=String(arr).split(',').map(Number);
  return console.log(newarr);
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]])
