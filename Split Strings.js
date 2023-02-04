/*
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 * Examples:
 * 'abc' =>  ['ab', 'c_']
 * 'abcdef' => ['ab', 'cd', 'ef']
 * */
function solution(str){
  let arr=[]
  let newstr=""
  let count=0
   if(str.length%2===0){
     for(let i=0;i<str.length;i++){
       count+=1
       newstr+=str[i]
       if(count==2){
         arr.push(newstr)
         newstr=""
         count=0
       }
     }
   }
  else{
    let sstr=str+"_"
    for(let i=0;i<sstr.length;i++){
       count+=1
       newstr+=sstr[i]
       if(count==2){
         arr.push(newstr)
         newstr=""
         count=0
       }
     }
  }
  return arr
}

console.log(solution('abc'))
