console.log("Welcome to Programiz!");
function rock(from_user){
    let throwen=Math.floor(Math.random()*(2 - 0 + 1))
    if(from_user==throwen){
            str=throwen.toString()
			return "Draw "+str;
		}
	else if(from_user==1 && throwen==0){
	    str=throwen.toString()
		return "Computer wins "+ str;
	}
	else if(from_user==0 && throwen==1){
	    str=throwen.toString()
		return "Humanity wins "+str;
	}
	else if(from_user==2 && throwen==0){
	    str=throwen.toString()
		return "Humanity wins "+str;
	}
	else if(from_user==0 && throwen==2){
	    str=throwen.toString()
		return "Computer wins "+str;
	}
	else if(from_user==1 && throwen==2){
	    str=throwen.toString()
		return "Computer wins "+str;
	}
	else if(from_user==2 && throwen==1){
	    str=throwen.toString()
		return "Humanity wins "+str;
	}
}

function testrock(number_of_times){
    
    for(let i=0;i<number_of_times;i++){
        num=Math.floor(Math.random()*(2 - 0 + 1))
        console.log("num:",num,rock(num))
    }
    return "Over"
}
console.log(testrock(13))
