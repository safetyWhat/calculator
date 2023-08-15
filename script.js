let num1 = 0
let num2 = 0
let operator = "";
let numArray = [];
let solution = 0

function buildNumber(numArray, digit) {
    numArray.push(digit)
    //console.log(numArray)
    let newNum = numArray.join('');
    //console.log(newNum);
    let display = document.getElementById("display");
    display.textContent = newNum;
    //return newNum;
}

function convertNum1(oper) {
    let display = document.getElementById("display");
    num1 = display.textContent;
    numArray = [];
    display.textContent = '';
    console.log(typeof +num1);
    operator = oper;
}

function checkNum1() {
    console.log(num1, operator);
}

let operate = function() {
    let display = document.getElementById("display");
    num2 = display.textContent;
    numArray = [];
    if (operator === "addition") {
        addition(+num1, +num2);
    } else if (operator === 'subtract') {
        subtract(num1, num2);
    } else if (operator === 'multiply') {
        multiply(num1, num2);
    } else {
        divide(num1, num2);
    }
    display.textContent = solution;
}

let addition = function(a, b) {
    solution = a + b;
}

let subtract = function(a, b) {
    solution = a - b; 
}

let multiply = function(a, b) {
    solution = a * b;  
}

let divide = function(a, b) {
    solution = a / b;
}