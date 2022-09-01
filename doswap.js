/*
Write a function to replace all instances of character c1 with character c2 and vice versa.

*/
function doswap(str,char1,char2){
    let newstr=str.split("");
    for(let i=0;i<newstr.length;i++){
        if(newstr[i]==char1){
            newstr[i]=char2;
        }
        else if(newstr[i]==char2){
            newstr[i]=char1;
        }
    }
    return newstr.join("");
}
console.log(doswap("2aabb","a","b"))
