/*
Given a string, reverse all the words which have odd length. 
The even length words are not changed.
*/
function oddstring(str){
    let newstr=str.split("");
    if(newstr.length%2!==0){
        newstr= newstr.reverse();
        return newstr.join("");
    }
    return newstr.join("");
}
console.log(oddstring("five"))
console.log(oddstring("fie"))

