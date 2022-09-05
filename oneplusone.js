/
*
Create a function that outputs the result of a math expression from strings
*
/
function wordtonum(str){
    str=str.toLowerCase();
    let arr=str.split(" ");
    let num=[];
    let answer=0;
    for(i in arr){
        switch(arr[i]){
            case "zero":
                num.push(0);
                break;
            case "one":
                num.push(1);
                break;
            case "two":
                num.push(2);
                break;
            case "three":
                num.push(3);
                break;
            case "four":
                num.push(4);
                break;
            case "five":
                num.push(5);
                break;
            case "six":
                num.push(6);
                break;
            case "seven":
                num.push(7);
                break;
            case "eight":
                num.push(8);
                break;
            case "nine":
                num.push(9);
                break;
            case "plus":
                num.push("+");
                break;
            case "minus":
                num.push("-");
                break;
        }
        
    }
    if(num[1]=="+"){
            answer=num[0]+num[2];
            return answer;
    }
    else if(num[1]=="-"){
            answer=num[0]-num[2];
            return answer;
    }
}

console.log(wordtonum("five minUs OnE"));

