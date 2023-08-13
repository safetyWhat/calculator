let num1 = 7 //prompt('Enter a number between 1 and 10', '');
let num2 = 2 //prompt('Enter a number between 1 and 10', '');
let oper = "";

let operate = function(a, b, c) {
    if (c === "addition") {
        addition(a, b);
    } else if (c === 'subtract') {
        subtract(a, b);
    } else if (c === 'multiply') {
        multiply(a, b);
    } else {
        divide(a, b);
    }
}

let addition = function(a, b) {
    let solution = a + b;
    return solution;
}

let subtract = function(a, b) {
    let solution = a - b;
    return solution;
}

let multiply = function(a, b) {
    let solution = a * b;
    return solution;
}

let divide = function(a, b) {
    let solution = a / b;
    return solution;
}

console.log(num1, num2);
console.log(addition(num1, num2));
console.log(subtract(num1, num2));
console.log(multiply(num1, num2));
console.log(divide(num1, num2));