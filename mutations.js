function mutation(arr) {
 let check=arr[0].toLowerCase();
 let checked=arr[1].toLowerCase();
 for(let i=0;i<checked.length;i++){
   if(check.indexOf(checked[i])<0) return false;
 }
 return true;
}
mutation(["voodoo", "no"]);