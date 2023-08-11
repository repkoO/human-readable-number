module.exports = function toReadable (number) {
    const basicDigits = {
        0:'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',   
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',   
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen'
    }
    const dozenDigits = {
        10:'ten',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty' ,
        70:'seventy',
        80:'eighty',
        90:'ninety'
    }

    const defArr = number.toString().split('');
    const numToString = number.toString();
    const firstDigit = Number(defArr[0]);
    const secondDigit = Number(defArr[1]);
    const thirdDigit = Number(defArr[2]);

    if (numToString.length === 1 || (number.toString().length == 2 && number < 20)) return basicDigits[number]; //числа от 1 до 19
        else if (numToString.length === 2 && secondDigit === 0) return dozenDigits[number]; // все десятичные
    if ((numToString.length === 2 && number >= 20) && secondDigit >= 1) return dozenDigits[firstDigit * 10] + ' ' + basicDigits[secondDigit]; //десятичные + одночисленные
    if (numToString.length === 3 && secondDigit === 0 && thirdDigit === 0) return basicDigits[firstDigit] + ' hundred'; //все сотни;
        else if (secondDigit === 0 && thirdDigit !== 0) return basicDigits[firstDigit] + ' hundred' + ' ' + basicDigits[thirdDigit];
        else if (secondDigit >= 1 && thirdDigit === 0) return basicDigits[firstDigit] + ' hundred' + ' ' + dozenDigits[Number(number.toString().slice(1))]; //сотни с десятками
        else if (secondDigit >= 1 && thirdDigit !== 0 && (secondDigit * 10 < 20)) return basicDigits[firstDigit] + ' hundred' + ' ' + basicDigits[10 + thirdDigit]; 
        else if (secondDigit >= 1 && thirdDigit !== 0) return basicDigits[firstDigit] + ' hundred' + ' ' + dozenDigits[secondDigit * 10] + ' ' + basicDigits[thirdDigit]; 
}