function inchToFeet(inch){
    var feet=inch/12;
    return feet;
}

var array=[23,24,45,67,65];

var nanaFeet= inchToFeet(array[0]);
console.log(nanaFeet);

var dadiFeet=inchToFeet(array[2]);
console.log(dadiFeet);

var naniFeet=inchToFeet(356);
console.log(naniFeet);

var dadaFeet=inchToFeet(256);
console.log(dadaFeet);
