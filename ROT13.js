function rot13(str) {
  let codestr=str.split(/[^A-Z]/).join('');
  codestr=codestr.split(' ');
  let newstr="";
  let pos;
  for(let i=0;i<codestr[0].length;i++){
        pos=codestr[0][i].charCodeAt();
       
        if(pos<92 && pos>65){
          pos=pos-13;
          if(pos<65){
            pos=pos+26
          }
          newstr+=String.fromCharCode(pos);
        }
       
  }
   

  return newstr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
