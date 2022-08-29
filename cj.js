/*
 * Create a function that, given a string with at least three characters, returns an array of its:

	Length.
	First character.
	Last character.
	Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
	Index of the second occurrence of the second character in the format "@ index #" 
	and "not found" if the second character doesn't occur again.
 * */
function allstring(str){
    let arr=[];
    let mi="";
    arr[0]=str.length;
    arr[1]=str[0];
    arr[2]=str[str.length-1];
    if ((str.length%2)!==0){
         arr[3]=str[Math.round(str.length/2)-1];
    }
    else{
       mi+=str[(str.length/2)-1];
       mi+=str[str.length/2];
       arr[3]=mi;
    }
    for(let i=0;i<str.length;i++){
       if(str[1]==str[i] && i!==1){
           arr[4]="@ index "+ i.toString();
           return arr;
       }
       else{
           arr[4]="not found";
       }
    }
    return arr;
}
console.log(allstring("computer"));
