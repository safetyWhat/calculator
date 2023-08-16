let num1 = 0
let num2 = 0
let operator = "";
let numArray = [];
let solution = 0
let display = document.getElementById("display");
display.textContent = 0;

function buildNumber(numArray, digit) {
    numArray.push(digit) //adds clicked number to array
    let newNum = numArray.join(''); //converts array to complete number
    display.textContent = newNum;
}

function empty() {
    num1 = 0;
    num2 = 0;
    operator = "";
    numArray = [];
    solution = 0;
    display.textContent = 0;
    console.log(num1,num2,operator,numArray,solution,display.textContent);
}

function convertNum1(oper) {
    if (num1 > 0 || num1 < 0) {
        operate();
        display.textContent = solution;
        num1 = solution;
        operator = oper;
    } else {
    num1 = display.textContent;
    numArray = []; //clears the memory so a new number can be input
    //display.textContent = '';
    operator = oper;
    }
}

let operate = function() {
    num2 = display.textContent;
    numArray = []; //clears the memory so a new number can be input. Allows new calculation without page refresh.
    if (num2 === '0' && operator === 'divide') { //dividing by 0 creates infinity. We don't do that.
        return display.textContent = 'Umm, NO!';
    }else if (operator === "addition") {
        addition(+num1, +num2);
    } else if (operator === 'subtract') {
        subtract(num1, num2);
    } else if (operator === 'multiply') {
        multiply(num1, num2);
    } else { //all that's left is divide
        divide(num1, num2);
    }
    console.log(solution)
    solution = +solution.toFixed(2);
    display.textContent = solution;
    num1 = 0;
    num2 = 0;
    operator = '';
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