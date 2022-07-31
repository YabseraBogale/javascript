function palindrome(str) {
 let word=str.replace(/\W+/g,"").toLowerCase();
  word=word.replace(/[^a-zA-Z0-9]/,"");
  let t;
  for(let i=0,j=word.length-1;i<=word.length && j>=0;i++,j--){
        if(word[i]===word[j]){
              t=true;
              
        }
        else{
            return false;

        }
  }
 return t===true;
}

palindrome("almostomla");