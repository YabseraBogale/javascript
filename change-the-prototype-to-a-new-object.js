function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs:4,
  eat:function(){
    return "This Dog eats meat";
  },
  describe:function(){
      return "This is my Dog";
  }

};