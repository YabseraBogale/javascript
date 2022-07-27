function whatIsInAName(collection, source) {
  let arr = [];
  // Only change code below this line
  arr=collection.filter(e=>Object.entries(source).every(([k,v])=>e?.[k]==v));

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });