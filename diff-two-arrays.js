function diffArray(arr1, arr2) {
  const newArr =arr1.concat(arr2).filter(num=>!arr1.includes(num) || !arr2.includes(num)) ;
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);