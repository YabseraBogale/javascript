// Online Javascript Editor for free

function ckeckarr(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===true){
            count+=1;
        }
    }
    return count;
}
console.log(ckeckarr([true,true,"false",true]))
