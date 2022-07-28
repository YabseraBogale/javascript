function convertHTML(str) {
  let newstr=str.split('');
  for(let i=0;i<newstr.length;i++){
    switch(newstr[i]){
      case "&":
        newstr[i]="&amp;";
        break;
      case ">":
        newstr[i]="&gt;";
        break;
      case '"':
        newstr[i]="&quot;";
        break;
       case "'":
        newstr[i]="&apos;";
        break;
       case "<":
        newstr[i]="&lt;";
        break;
    }
  }
  newstr=newstr.join('');
  return newstr;
}

convertHTML("Dolce & Gabbana");