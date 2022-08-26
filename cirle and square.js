function permeter(l,num){
    let per;
    if(l=="s"){
        per=4*num;
        return per
    }
    else if(l=="c"){
        per= num* 6.28;
        return per;
    }
    else{
        return "Enter the correct letter";
    }
}
console.log(permeter("e",4));
