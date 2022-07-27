function pairElement(str) {
 let newstr=[];
 for(let i=0;i<str.length;i++){
   if(str[i]=="A"){
     newstr.push([str[i],"T"]);
   }
   else if(str[i]=="T"){
     newstr.push([str[i],"A"]);
   }
   else if(str[i]=="G"){
     newstr.push([str[i],"C"]);
   }
   else if(str[i]=="C"){
     newstr.push([str[i],"G"]);
   }
 }
 
  return newstr;
}

pairElement("ATCGA");