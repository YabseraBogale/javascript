function BubbleSort(arr){
	let newarr=arr;
	for(let i=0;i<arr.length-1;i++){
		for(let j=0;j<arr.length-1-i;j++){
			if(newarr[j]>newarr[j+1]){
				let temp=newarr[j+1]
				newarr[j+1]=newarr[j]
				newarr[j]=temp
			}
		}
	}
	return newarr
	}
function Randomarr(howmany,upto=10){
		let arr=[]
		for(let i=0;i<howmany;i++){
			arr.push(Math.round((Math.random(5)*upto)))
		}
	return arr
}	

console.log(BubbleSort(Randomarr(10,20)));
