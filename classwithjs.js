class Answer{

    constructor(name,age){
       this.name=name;
       this.age=age;
    }
    
    getDateOFBirth(){
        return 2023-this.age
    }
    
}

let testAnswer1=new Answer("Yabsera",26);
let testAnswer2=new Answer("Boglae",60)
console.log(testAnswer1)
console.log(testAnswer2)
