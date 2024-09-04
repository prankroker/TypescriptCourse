function sayLouder(text: string){

    return text.toUpperCase();

}

function sum2nums(num1: number, num2: number){

    return num1 + num2;

}

function multiplication(num1: number, num2: number){

    return num1 * num2;

}

function divide(num1: number, num2: number){

    return num1 / num2;

}

function substraction(num1: number, num2: number){

    return num1 - num2;

}

function findMax(arr) {

    if (arr.length === 0) return 'Array is empty';

    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);

}

function celsiusToFahrenheit(celsius: number) {

    return (celsius * 9/5) + 32;

}

function fahrenheitToCelsius(fahrenheit: number){

    return (fahrenheit / (9/5)) - 32;

}

function getRandomInt(min: number, max: number) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function mergeArrays(arr1, arr2) {

    return arr1.concat(arr2);

}

function isPrime(num: number) {

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) return false;

    }

    return true;

}

function factorial(n: number) {

    if (n < 0) return 'Invalid input';

    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);

}

function double(value: number){

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

function square(num: number) {

    return num * num;

}

function isEven(num: number) {

    return num % 2 === 0;

}

function stringLength(str: number) {

    return str.length;

}

function isPositive(num: number) {

    return num > 0;

}

function isNegative(num: number){

    return num < 0;

}

function isZero(num: number){
    
    return num == 0;

}

function absoluteValue(num: number)) {

    return Math.abs(num);

}

function isOne(num: number)){
    
    return num == 1;

}

function isBiggerThanOne(num: number)){

    return num > 1;

}

function isBiggerThanOneHundred(num: number)){
    return num > 100;
}
