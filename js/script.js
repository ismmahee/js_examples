function showtext(){

document.getElementById("st").innerHTML = "Java Script is one of the amazing language. "
}


let x, y, z;  // Statement 1
x = 9;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4
k = x - y;

document.getElementById("sum").innerHTML = "The value of z is " + z;  
document.getElementById("sub").innerHTML = "The value of k is " + k;  

function sorrytext(){
	document.getElementById("sorry").innerHTML = "Minhaz bhaiya sorry for late submission."
}



const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("time").innerHTML = greeting;



let day;let date = new Date().getDay();

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("dt").innerHTML = "Today is " + day;

function loopCase(){
	const cars = ["BMW ","SAFARI ","AUDI ","LAND CRUSER ","VOLVO "];
	let len =cars.length;
	let text ="";
	for (let i = 0; i < len; i++){
		text += cars[i] + "<br>";

	}
	document.getElementById("lp").innerHTML = text;
	
}


function sumCase(){
	let sum = 0;
	for (let i = 1; i <= 10; i++) {
		sum += i;
	}
	document.getElementById("plus").innerHTML = sum;
}

function mutiCase(){
  let output = "";

  for (let i = 1; i <= 10; i++) {
    let multi = 4 * i;
    output += "4 x " + i + " = " + multi + "<br>";
  }

  document.getElementById("multiply").innerHTML = output;
}

function number(){
 let text = "";

let i = 0;
while (i <= 100) {
  text += "The number is " + i + "<br>";
  i++;
}
  

  document.getElementById("nm").innerHTML = text;
}


function stringCase(){
  
  opanion1 ="BMW is"
opanion2 = "my favoite car"



  document.getElementById("sg").innerHTML = opanion1 + " " + opanion2 ;
}

function showDay() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
let output = "";

  for (let i = 0; i < days.length; i++) {
    output += days[i] + "<br>";
  }
  
  document.getElementById("da").innerHTML = output;
}

function rectangleArea() {
  let lengths = [5, 10, 7, 8, 6, 9, 4];
  let widths  = [2, 3, 4, 5, 6, 2, 3];

  let output = "";

  for (let i = 0; i < lengths.length; i++) {
    let area = lengths[i] * widths[i];
    output += "Rectangle " + (i+1) + " → Area = " + area + "<br>";
  }

  document.getElementById("result").innerHTML = output;
}


function circleArea() {
  let radius = [1, 2, 3, 4, 5, 6, 7];
  let output = "";

  for (let i = 0; i < radius.length; i++) {
    let area = Math.PI * radius[i] * radius[i];
    output += "Circle " + (i+1) + " → Area = " + area.toFixed(2) + "<br>";
  }

  document.getElementById("circle").innerHTML = output;
}

function checkEvenOdd() {
  let num = 7;

  if (num % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}


function numberType() {
  let num = -3;

  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

function gradeSystem() {
  let marks = 75;

  if (marks >= 80) {
    console.log("A+");
  } else if (marks >= 70) {
    console.log("A");
  } else if (marks >= 60) {
    console.log("B");
  } else {
    console.log("Fail");
  }
}


function areaCheck() {
  let length = 5;
  let width = 4;
  let area = length * width;

  if (area > 20) {
    console.log("Large area");
  } else {
    console.log("Small area");
  }
}

function findLargest() {
  let a = 10, b = 25, c = 15;

  if (a > b && a > c) {
    console.log("A is largest");
  } else if (b > a && b > c) {
    console.log("B is largest");
  } else {
    console.log("C is largest");
  }
}