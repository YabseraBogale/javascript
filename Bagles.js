function Bagles(){
	let Guess=Math.floor(Math.random()*(999-100+1))
	let num=Math.floor(Math.random()*(999-100+1))
	Guess=num.toString()
	let life=10
	while(life>0){
		switch(num){
			case num==Guess:
				return "You Win"
			case num[0]!=Guess[0]:
				num=Math.floor(Math.random()*(999-100+1))
				console.log("Pico")
				break
			case num[1]!=Guess[1]:
				num=Math.floor(Math.random()*(999-100+1))
				console.log("Pico")
				break
			case num[2]!=Guess[2]:
				num=Math.floor(Math.random()*(999-100+1))
				console.log("Pico")
				break
			case num[0]==Guess[0]:
				num=Math.floor(Math.random()*(999-100+1))
				console.log("Fermi")
				break
			case num[1]==Guess[1]:
				num=Math.floor(Math.random()*(999-100+1))
				console.log("Fermi")
				break
			case num[2]==Guess[2]:
				num=Math.floor(Math.random()*(999-100+1))
				console.log("Fermi")
				break
			default:
				num=Math.floor(Math.random()*(999-100+1))
				console.log("Bagels")
				break;
		}
		life-=1
	}
	return "You Loss"	
}

console.log(Bagles())

