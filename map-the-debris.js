function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  arr.map(obj=>{
    let op=Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+obj.avgAlt,3)/GM))
    delete obj.avgAlt;
    obj.orbitalPeriod=op;
  })
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);