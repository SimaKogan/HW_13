function generateRandomTeudatZehut () {
    let arrTZ = getArrayTZ ();
    let arrTZforSum = arrDigitsForSum(arrTZ);
    let sum = sumElemArray(arrTZforSum);
    arrTZ [8] = getControlDigit(sum);
    let stringTZ = arrTZ.join ('');
    return stringTZ;
}
function checkTeudatZehut (numTZ) {
    console.log ('Teudat zehut: ' + numTZ);
    numTZ = checkInputTZ(numTZ); 
    if (!numTZ) {
        return 'Error of a number teudat zehut';
    } 
    let arrTZ = Array.from(numTZ);
    let arNumTZ = convStrToDig(arrTZ);
    arNumTZ = checkLengthOfArr(arNumTZ); 
    if (!arNumTZ){
        return 'Error of a number teudat zehut';
    } 
    let arTZForSum = arrDigitsForSum (arNumTZ);
    let sum = sumElemArray(arTZForSum);
   return checkIsValid(sum);
}
let a = generateRandomTeudatZehut();
console.log ("1. " + checkTeudatZehut(a));
// console.log ("1. " + checkTeudatZehut('322124744'));
// console.log ("2. " + checkTeudatZehut('336236771'));
// console.log ("3. " + checkTeudatZehut('336//236773'));
// console.log ("4. " + checkTeudatZehut('33623.6773'));
// console.log ("5. " + checkTeudatZehut('3362367732'));
// console.log ("6. " + checkTeudatZehut('012345674'));
function getArrayTZ () {
    let arrTZ = [];
    for(let i = 0; i < 8; i++) {
        arrTZ [i] = Math.round(Math.random() * 9);
    }
    return arrTZ;
}
function getControlDigit (sum) {
    let digit = 0;
    let rem = sum % 10;
    return rem > 0 ? digit = 10 - rem : digit;
 }
function convStrToDig (array) {
    return array.map(element => parseInt(element));
}
function arrDigitsForSum (array) {
    array = array.map((element, index) => index % 2 == 0 ? element : sumElemDigits (element) );
    return array;
}
function sumElemDigits (element) {
    if (element*2 >= 10) {
        element = Array.from (String(element*2), Number);
        element = element.reduce((res, elem) => res + elem, 0);
    } else element *= 2;
return element;
}
function sumElemArray (array) {
    return array.reduce ((res, cur) => res + cur , 0);
}
function checkIsValid (sum){
    if (sum % 10 != 0) {
        return 'is not valid';
    }
    return 'is valid';
}
function checkInputTZ (numTZ){
    if (isNaN(numTZ)) {
        return false;
    }
    return numTZ;
}
function checkLengthOfArr (array) {
    return array.length == 9 ? array : false;
}