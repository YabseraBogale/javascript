/*
Create a function that returns the frequency distribution of an array.
This function should return an object, 
where the keys are the unique elements and the values are the frequency in which those elements occur.
*/
function fre(arr){
    let count={};
    let sum=0;
    for(i in arr){
        if(!count[arr[i]]){
            count[arr[i]]=1;
        }
        else{
            sum+=1;
            count[arr[i]]=sum+1
        }
    }
    return count;
}
console.log(fre([1,2,2,2,2,2]));
    
