function convertToRoman(num) {
 let number="";
 while(num>0){
    if(num<4){
        number+="I";
        num-=1;
      }
    else if(num==4){
          number+="IV";
          num=num-4;
    }
    else if(num>=5 && num<9){
          num=num-5;
          number+="V"
    }
    else if(num==9){
        num=num-9;
        number+="IX";
    }
    else if(num>=10 && num<40){
          num=num-10;
          number+="X";
    }
    else if(num>=40 && num<50){
          num=num-40;
          number+="XL";
    }
    else if(num>=50 && num<90){
        num=num-50;
        number+="L";
    }
    else if(num>=90 && num<100){
      num=num-90;
      number+="XC";
    }
    else if(num>=100 && num<400){
      num=num-100;
      number+="C";
    }
    else if(num>=400 && num<500){
      num=num-400;
      number+="CD";
    }
    else if(num>=500 && num<900){
        num=num-500;
        number+="D";
    }
    else if(num>=900 && num<1000){
      num=num-900;
      number+="CM";
    }
    else if(num>=1000){
      num=num-1000;
      number+="M";
    }
    else{
      num-=1
    }
 }
 return number;
}

convertToRoman(3);