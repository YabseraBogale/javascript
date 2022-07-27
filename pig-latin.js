function translatePigLatin(str) {
   if(str.match(/^[aeiou]/)){
     return str + "way";
   }
  let con=str.match(/^[^aeiou]+/)[0];
  return str.substring(con.length)+con+"ay";
}

translatePigLatin("consonant");