function findLongestWordLength(str) {
    let word=str.split(' ');
    let maxnum=0;
    for(let i=0;i<word.length;i++){
        if(word[i].length>maxnum){
            maxnum=word[i].length;
        }
    }
    return maxnum;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");