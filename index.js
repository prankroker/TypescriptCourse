function sayLouder(text){

    return text.toUpperCase();

}

function sum2nums(num1, num2){

    return num1 + num2;

}

function multiplication(num1, num2){

    return num1 * num2;

}

function divide(num1, num2){

    return num1 / num2;

}

function substraction(num1, num2){

    return num1 - num2;

}

function findMax(arr) {

    if (arr.length === 0) return 'Array is empty';

    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);

}

function celsiusToFahrenheit(celsius) {

    return (celsius * 9/5) + 32;

}

function fahrenheitToCelsius(fahrenheit){

    return (fahrenheit / (9/5)) - 32;

}

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function mergeArrays(arr1, arr2) {

    return arr1.concat(arr2);

}

function isPrime(num) {

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) return false;

    }

    return true;

}

function factorial(n) {

    if (n < 0) return 'Invalid input';

    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);

}

function double(value){

    return value*2;

}

function getRandomColor() {

    const letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

function square(num) {

    return num * num;

}

function isEven(num) {

    return num % 2 === 0;

}

function stringLength(str) {

    return str.length;

}

function isPositive(num) {

    return num > 0;

}

function isNegative(num){

    return num < 0;

}

function isZero(num){
    
    return num == 0;

}

function absoluteValue(num) {

    return Math.abs(num);

}

function isOne(num){
    
    return num == 1;

}

function isBiggerThanOne(num){

    return num > 1;

}

function isBiggerThanOneHundred(num){
    return num > 100;
}
