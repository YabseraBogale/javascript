function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for(let propty in canary){
    if(canary.hasOwnProperty(propty)){
      ownProps.push(propty);
    }
}
// Only change code below this line