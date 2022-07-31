function rot13(str) {
 let newstr="";
 let halfstr="ABCDEFGHIJKLM";
 let otherstr="NOPQRSTUVWXYZ";
 for(let i=0;i<str.length;i++){
   let letter=str[i];
   
   if(halfstr.indexOf(letter)>=0){
          newstr+=otherstr[halfstr.indexOf(letter)]
   }
   else if(otherstr.indexOf(letter)>=0){
     newstr+=halfstr[otherstr.indexOf(letter)]
   }
   else{
     newstr+=letter
   }
 }

  return newstr;
}

rot13("SERR PBQR PNZC");
