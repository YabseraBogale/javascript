/
*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

*/
function minMax(arr) {
	let newarr=[];
	newarr[0]=Math.min(...arr);
	newarr[1]=Math.max(...arr);
	return newarr;
}
