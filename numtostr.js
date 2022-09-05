/*
changs number to letter word
*/
function numtostr(num){
    let strnum;
    switch(num){
        case 0:
            strnum="zero";
            break;
        case 1:
            strnum="one";
            break;
        case 2:
            strnum="two";
            break;
        case 3:
            strnum="three";
            break;
        case 4:
            strnum="four";
            break;
        case 5:
            strnum="five";
            break;
        case 6:
            strnum="six";
            break;
        case 7:
            strnum="seven";
            break;
        case 8:
            strnum="eight";
        case 9:
            strnum="nine";
            break;
    }
    return strnum;
}
