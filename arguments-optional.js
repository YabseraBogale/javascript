function addTogether() {
  let [first,sec]=arguments;
    if(typeof(first)!=="number"){
      return undefined;
    }
    if(arguments.length==1){
          return (sec)=>addTogether(first,sec);
    }
    if(typeof(sec)!=="number"){
      return undefined;
    }
    return first+sec;
  }

addTogether(2,3);
