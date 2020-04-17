//Date Function
var today=new Date();
console.log("Date :"+today.toDateString());

//Time
var time=today.getTime();

// Date- 1 to 31
var date=today.getDate();

// Day- 0 to 6
var day=today.getDay();

// Month- 0 to 11
today.setMonth(today.getMonth()+1);
var month=today.getMonth();

// Year
var year=today.getFullYear();

// Hours 0 to 23
var hour=today.getHours();

// Minutes 0 to 59
var min=today.getMinutes();

// Seconds 0 to 59
var sec=today.getSeconds();

console.log("Today :"+date+"/"+month+"/"+year+" "+hour+":"+min+":"+sec);

//for setting date use set Method like setDay(2) etc.