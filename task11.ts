/*Write a program that takes the number of units consumed by a user if it is greater than 100
then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then
add 25% of tax Where the tax amount will be calculated by the amount of bill*/

var unitRate:number = 100
var totalUnits:number=1000
var billAmount:number = unitRate*totalUnits
if(totalUnits>=100 && totalUnits<200){
    var taxAmount = 0.10*billAmount
    var totalBill=billAmount+taxAmount
    console.log(`The total bill is Rs ${totalBill}/- where the tax amount is Rs ${taxAmount}/-`)
}
else if(totalUnits>=200 && totalUnits<500){
    var taxAmount = 0.15*billAmount
    var totalBill=billAmount+taxAmount
    console.log(`The total bill is Rs ${totalBill}/- where the tax amount is Rs ${taxAmount}/-`)
}
else if(totalUnits>=500){
    var taxAmount = 0.25*billAmount
    var totalBill=billAmount+taxAmount
    console.log(`The total bill is Rs ${totalBill}/- where the tax amount is Rs ${taxAmount}/-`)
}