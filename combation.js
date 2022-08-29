/*
Create a function that takes a variable number of arguments, each argument representing the number of items in a group. 
The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
*/
function arr(){
    let combnation=1;
    for(let i=0;i<arguments.length;i++){
        combnation*=arguments[i];
    }
    return combnation;
}
console.log(arr(3, 7, 4))
