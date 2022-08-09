
function randomwords(){
let letter,ascword;
ascword=[];
let word;
for(let i=0;i<10000;i++){
    letter=Math.round(Math.random()*(92-65)+65);
    if(letter>=65 && letter <91){
            ascword.push(String.fromCharCode(letter));
    }
    else{
        ascword.push(" ");
    }
   
}
word=ascword.join(" ");
    
    return word;
}
let words=randomwords();
let newords=words.replace(/\W+/g,'');
console.log(newords);




