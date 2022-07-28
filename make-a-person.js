const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [first,last]=firstAndLast.split(' ');
  this.getFirstName=function(){
    return first;
  }
  this.getLastName=function(){
    return last;
  }
  this.getFullName = function() {
    return `${first} ${last}`;
  };
  this.setFirstName=function(firstName){
     first=firstName;
     return first;
  }
  this.setLastName=function(lastName){
     last=lastName;
     return last;
  }
  this.setFullName=function(firstAndLast){
     first=firstAndLast.split(' ')[0];
     last=firstAndLast.split(' ')[1];
     return `${first} ${last}`;
  }

};

const bob = new Person('Bob Ross');
bob.getFullName();