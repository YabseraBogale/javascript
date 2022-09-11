/*

A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, 
returning true if the integer is pandigital, and false otherwise.


*/

function pal(num){
    let Pal=num.toString();
    let count={"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0};
    for( i in Pal){
        switch(Pal[i]){
            case "0":
                count["0"]=1;
                break;
            case "1":
                count["1"]=1;
                break;
            case "2":
                count["2"]=1;
                break;
            case "3":
                count["3"]=1;
                break;
            case "4":
                count["4"]=1;
                break;
            case "5":
                count["5"]=1;
                break;
            case "6":
                count["6"]=1;
                break;
            case "7":
                count["7"]=1;
                break;
            case "8":
                count["8"]=1;
                break;
            case "9":
                count["9"]=1;
                break;
        }
    }
  for([i,j] of Object.entries(count)){
      if(j==0){
          return false;
      }
    }
    return true;
}
console.log(pal(12341111111110));
