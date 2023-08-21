"use strict";
// convert celsius to fahrenheit
var celsius = 5;
var fahrenheit = celsius * 9 / 5 + 32;
console.log(fahrenheit);
//answer is 41
// calculate percentage
var totalNumber = 520;
var obtainNumber = 438;
var percentage = obtainNumber / totalNumber * 100;
console.log(percentage);
//percentage obtained is 84.2307692307
//convert number of days into weeks
var days = 56;
var daysinweek = 7;
var weeks = days / daysinweek;
console.log(weeks);
//56 days is equal to 8 days
//discount procees
//list price - selling price
var price = 1000;
if (price >= 1000 && price > 1000) {
    var discountPrice = price * 5 / 100 - 1000;
    console.log('your discount price is ${discountPrice}');
}
else {
    var discountPrice1 = 1000 - price * 15 / 100;
    console.log(`your discount price is ${discountPrice1}`);
}
//discount is 15%
//temperature
var temperature = "cold";
if (temperature != "warm") {
    console.log("wear warm clothes");
}
else {
    console.log("wear normal clothes");
}
//age limit
var age = 24;
if (age >= 0 && age <= 12) {
    console.log("child");
}
else if (age >= 13 && age <= 24) {
    console.log("teenager");
}
else {
    console.log("adult");
}
//your are teenager
//program check of divisble
var num1 = 15;
if (num1 % 3 == 0 && num1 % 5 == 0) {
    console.log("number is divisble on 3 or 5");
}
else {
    console.log("it is nit divisble on 3 or 5");
}
//check leap year
var year = 2023;
if (year % 4 == 0) {
    console.log("it is leap year");
}
else {
    console.log("it is not leap year");
}
var days = 3;
if (days > 1) {
    console.log("monday");
    if (days > 2) {
        console.log("tuesday");
        if (days == 3) {
            console.log("wenesday");
            if (days > 4) {
                console.log("thursday");
                if (days > 5) {
                    console.log("friday");
                }
            }
        }
    }
}
//tax amount calculated of bill
var unit = 150;
var priceUnit = 43;
var totalAmount = unit * priceUnit;
if (unit < 110) {
    var bill = totalAmount - 10 / 100;
    console.log(`yur bill is ${bill} after adding 10% tax`);
}
else if (unit >= 150) {
    var bill = totalAmount - 15 / 100;
    console.log(`yur bill is ${bill}after adding 15% tax`);
}
else if (unit > 500) {
    var bill = totalAmount - 25 / 100;
    console.log(`tur bill is ${bill} after adding 25% tax`);
}
//yur bill calculated please pay on time otherwise your light is cuttoff
