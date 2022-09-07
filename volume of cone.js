/*
Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
Return approximate answer by rounding the answer to the nearest hundredth.
Use JavaScript's PI property, don't fall for 3.14 ;-)
If the cone has no volume, return 0.
*/
function cone(h,r){
    let volume=(Math.PI*r*r*h)/3;
    return volume.toFixed(2);
}
console.log(cone(0, 2));
