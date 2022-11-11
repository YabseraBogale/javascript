let responses = [ 1, 2, 5, 4, 3, 5, 2, 1, 3, 3, 1, 4, 3, 3, 3,2, 3, 3, 2,14]
function test_try(arr){
	let freq={"1":0,"2":0,"3":0,"4":0,"5":0}
	for(let i in responses){
		if(responses[i] in freq){
			freq[responses[i]]+=1
		}
		else{
			console.log("not in")
		}
		
	}
	return freq
	}
console.log(test_try(responses))
