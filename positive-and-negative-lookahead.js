let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,}\D*\d)(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);