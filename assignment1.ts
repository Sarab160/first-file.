// convert celsius to fahrenheit
var celsius:number = 5;
var fahrenheit:number = celsius*9/5 + 32;
console.log(fahrenheit);
//answer is 41
 // calculate percentage
 var totalNumber:number = 520;
 var obtainNumber:number = 438;
 var percentage:number = obtainNumber/totalNumber *100;
 console.log(percentage);
 //percentage obtained is 84.2307692307

 //convert number of days into weeks

var days:number = 56;
var daysinweek:number = 7;
var weeks:number = days/daysinweek;
console.log(weeks);
//56 days is equal to 8 days
//discount procees
//list price - selling price
 var price:number = 1000;
 if(price>=1000 && price>1000){
   var  discountPrice:number = price*5/100-1000;
console.log('your discount price is ${discountPrice}')
 }
 else {
   var discountPrice1:number = 1000-price*15/100;
    console.log(`your discount price is ${discountPrice1}`)
 }
 //discount is 15%
 //temperature
 var temperature:string = "cold";
 if(temperature!="warm"){
console.log("wear warm clothes")
 }
 else{
    console.log("wear normal clothes")
 }
 //age limit
 var age:number = 24;
 if(age>=0 && age<=12){
   console.log("child")
 }
 else if(age>=13 && age<=24){
   console.log("teenager")
 }
 else{
   console.log("adult")
 }
 //your are teenager

 //program check of divisble
 var num1:number = 15;
 if(num1%3==0 && num1%5==0){
   console.log("number is divisble on 3 or 5")
 }
 else{
   console.log("it is nit divisble on 3 or 5")
 }
 //check leap year
 var year:number = 2023
 if(year%4==0){
   console.log("it is leap year")
}
else{
   console.log("it is not leap year")
}
var days:number = 3;
if(days>1){
   console.log("monday")
   if(days>2){
      console.log("tuesday")
      if(days==3){
         console.log("wenesday")
         if(days>4){
            console.log("thursday")
            if(days>5){
               console.log("friday")
            }
         }
      }
   }
}
//tax amount calculated of bill
var unit:number = 150;
var priceUnit:number = 43;
var totalAmount:number = unit*priceUnit;
if(unit<110){
var bill:number = totalAmount-10/100;
console.log(`yur bill is ${bill} after adding 10% tax`)
}
else if (unit>=150){
   var bill:number = totalAmount - 15/100;
   console.log(`yur bill is ${bill}after adding 15% tax`)
}
else if (unit>500){
   var bill:number = totalAmount - 25/100;
   console.log(`tur bill is ${bill} after adding 25% tax`)
}
//yur bill calculated please pay on time otherwise your light is cuttoff

   
 

