function leapYear(year){
    const remiander = year % 4;
if(remiander==0){
 console.log("that year is leap year");
}
else{
    console.log('that year is not leap year');
}

}

leapYear(2032);
leapYear(22222);
leapYear(2034);
