// let number = Math.random();
// let i = Math.trunc(number * 100);

// console.log(i);

// let number2 = Math.random();
// let _i = Math.trunc(number2 * 100);
// console.log(_i);

//  if( i < 10 || _i < 10){
//    let M = i + _i;
//    let P = i * _i;
//    let m = i / _i;
//    let D = i - _i;
//    console.log(P)
//  } else{
//     let M = i * _i;
//    let P = i + _i;
//    let m = i - _i;
//    let D = i / _i;
//    console.log(P)
//  }
document.getElementById("btn").onclick = function() {
let a1 = Math.random();

if (a1 < 0.2) {
  first = "Crazy";
 } else if (a1 >= 0.2 && a1 < 0.4) {
  first = "Amazing"; 
 } else if (a1 >= 0.4 && a1 < 0.6) {
    first = "Best";
 } else if (a1 >= 0.6 && a1 < 0.8) {
    first = "Awesome";
 } else {
  first = "Fire";
 }

 let a2 = Math.random();

 if (a2 < 0.2) {
  second = "Engine";
 } else if (a2 >= 0.2 && a2 < 0.4) {
  second = "Food";
 } else if (a2 >= 0.4 && a2 < 0.6) {
  second = "Coffee";
 } else if (a2 >= 0.6 && a2 < 0.8) {
  second = "Technology";
 } else {
  second = "Garments";
 }

 let a3 = Math.random();

 if (a3 < 0.2) {
  Third = "Bros";
 } else if (a3 >= 0.2 && a3 < 0.4) {
  Third = "Limited";
} else if (a3 >= 0.4 && a3 < 0.6) {
 Third = "LLC";
} else if (a3 >= 0.6 && a3 < 0.8) {
 Third = "LTD";
 } else {
  Third = "Hub";
 }
// console.log(a1);
// console.log(a2);
// console.log(a3);
var companyName = first + " " + second + " " + Third;
// prompt(companyName)
document.getElementById("company").innerText= companyName ;
}

document.getElementById("lid").onclick = function() {
  window.location.href = "https://www.linkedin.com/in/md-rifat-dev";
};
document.getElementById("github").onclick = function() {
  window.location.href = "https://github.com/RifatParadoxical";
};
  