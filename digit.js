function digit(num){
    let numstr=num.toString()
    if(numstr[0]==="-"){
        return numstr.length-1
    }
    return numstr.length
}
console.log(digit(123));
