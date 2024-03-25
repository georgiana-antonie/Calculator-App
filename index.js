//Digits
const digit0 = document.querySelector('#digit0');
const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const digit4 = document.querySelector('#digit4');
const digit5 = document.querySelector('#digit5');
const digit6 = document.querySelector('#digit6');
const digit7 = document.querySelector('#digit7');
const digit8 = document.querySelector('#digit8');
const digit9 = document.querySelector('#digit9');
//Operations
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');

let firstNumber = 0;
let secondNumber = 0;
let operation = '';
let startBuildingSecondNumber = false;

const buildNumber = digit => {
    if (startBuildingSecondNumber) {
        secondNumber = secondNumber * 10 + digit;
        result.innerHTML = secondNumber;
    }
    else {
        firstNumber = firstNumber * 10 + digit;
        result.innerHTML = firstNumber;
    }
}

const handleMultiplyClick = () => {
    operation = 'multiply';
    startBuildingSecondNumber = true;
}

const handleDivideClick = () => {
    operation = 'divide';
    startBuildingSecondNumber = true;
}

const handleSubtractClick = () => {
    operation = 'subtract';
    startBuildingSecondNumber = true;
}

const handleAddClick = () => {
    operation = 'add';
    startBuildingSecondNumber = true;
}

const handleClearClick = () => {
    operation = 'clear';
    result.innerHTML = '0';
    //reset calculator
    firstNumber = 0;
    secondNumber = 0;
    operation = '';
    startBuildingSecondNumber = false;
}

const handleEqualsClick = () => {
    if (operation === 'multiply') {
        const multiplication = firstNumber * secondNumber;
        result.innerHTML = multiplication;
        firstNumber = multiplication;
    } else if (operation === 'divide'){
        const division = firstNumber / secondNumber;
        result.innerHTML = division;
        firstNumber = division;
    } else if (operation === 'subtract') {
        const subtraction = firstNumber - secondNumber;
        result.innerHTML = subtraction;
        firstNumber = subtraction;
    } else if (operation === 'add') {
        const addition = firstNumber + secondNumber;
        result.innerHTML = addition;
        firstNumber = addition;
    }

    //reset calculator
    secondNumber = 0;
    operation = '';
    startBuildingSecondNumber = false;
}

digit0.addEventListener('click', () => buildNumber(0));
digit1.addEventListener('click', () => buildNumber(1));
digit2.addEventListener('click', () => buildNumber(2));
digit3.addEventListener('click', () => buildNumber(3));
digit4.addEventListener('click', () => buildNumber(4));
digit5.addEventListener('click', () => buildNumber(5));
digit6.addEventListener('click', () => buildNumber(6));
digit7.addEventListener('click', () => buildNumber(7));
digit8.addEventListener('click', () => buildNumber(8));
digit9.addEventListener('click', () => buildNumber(9));

multiply.addEventListener('click', handleMultiplyClick);
divide.addEventListener('click', handleDivideClick);
subtract.addEventListener('click', handleSubtractClick);
add.addEventListener('click', handleAddClick);
equals.addEventListener('click', handleEqualsClick);
clear.addEventListener('click', handleClearClick);