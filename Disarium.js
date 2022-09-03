/*
A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

Create a function that determines whether a number is a Disarium or not.

*/
function de(num){
    let strnum=num.toString();
    strnum=strnum.split('').reverse().join('');
    let newnum=0;
    for(let i=1;i<=strnum.length;i++){
        let f=parseInt(strnum[strnum.length-i]);
        newnum+=Math.pow(f,i);
    }
    return newnum===num ? "true":"false";
}
console.log(de(518));
