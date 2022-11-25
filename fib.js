function fib(num_range){
	let arr=[0]
	let j=1
	for(let i=0;i<num_range;i++){
		j=j+arr[i-1]
		console.log(i)
		arr.push(j)
	}
	return arr
	}
console.log(fib(5))
