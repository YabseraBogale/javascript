function titleCase(str) {
  let result="";
  let words=str.split(" ");
  
  for(let i=0;i<words.length;i++){
      let word=words[i];
    for(let j=0;j<word.length;j++){
        if(j===0){
          result+=word[j].toUpperCase();
        }
        else{
            result+=word[j].toLowerCase();
        }
    }

    result+=" ";
  }
  return result.slice(0, result.length-1);
  }

titleCase("I'm a little tea pot");