function repeatStringNumTimes(str, num) {
      let newstr="";
      while(num>0){
        newstr+=str;
        num--;
      }
  return newstr;
}

repeatStringNumTimes("abc", 3);