'use strict';

function getDigits(number) {
    let stringNumber = isNaN(number) ? '' : number.toString();
    return stringNumber.split('').map(Number);
}

function getDigitDistribution(number) {
    let digits = getDigits(number);
    let digitDistribution = [false, false, false, false, false, false, false, false, false, false];

    digits.forEach(function(digit) {
        digitDistribution[digit] = true;
    });
    return digitDistribution;
}

function isOdd(number) {
    return (number % 2) == 1;
}

function isEven(number) {
    return (number % 2) == 0;
}

function arrayProduct(array) {
    try {
        return array.reduce(function(a, b) {
            return a * b;                
        });
    } catch (e) {
        return null;
    }
}

function arraySum(array) {
    try {
        return array.reduce(function(a, b) {
            return a + b;
        });
    } catch (e) {
        return null;
    }
}

function isSumOfDigits(number) {
    let digitsSortedAsc = getDigits(number).sort(function(a,b) {return a-b});
    let highestDigit = digitsSortedAsc[digitsSortedAsc.length - 1];
    let lowestDigits = digitsSortedAsc.slice(0, -1);

    return lowestDigits.length ? arraySum(lowestDigits) === highestDigit : false;
}

function isDecreasingSequence(number) {
    let digits = getDigits(number);
    let digitsSortedDesc = digits.slice(0).sort(function(a,b) {return b-a});

    return digits.every(function(digit, index) {
        return digit === digitsSortedDesc[index];
    });
}

function hasAtLeastTwoOddDigits(number) {
    let digits = getDigits(number);

    return digits.filter(isOdd).length >= 2;
}

function areAllDigitsDifferent(number) {
    let digits = getDigits(number);

    return digits.length === new Set(digits).size;
}

function isFourthDigitEvent(number) {
    let digits = getDigits(number);
    return digits.length < 4 ? false : isEven(digits[3]);
}

function isDigitsProductNotMultipleOfFive(number) {
    let digits = getDigits(number);
    return arrayProduct(digits) % 5 !== 0;
}

function containsThreeOddDigitsInRow(number) {
    let digits = getDigits(number);
    let oddDigitInRow = 0;
    let threeOddDigitInRow = false;

    digits.forEach(function(digit) {
        if(isOdd(digit)) {
            oddDigitInRow++;
            if (oddDigitInRow >= 3) {
                threeOddDigitInRow = true;
            }
        } else  {
            oddDigitInRow = 0;
        }
    });
    return threeOddDigitInRow;
}

function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function hasAtLeastTwoEvenDigitInRow(number) {
    let digits = getDigits(number);
    let evenDigitInRow = 0;
    let twoEvenDigitInRow = false;

    digits.forEach(function(digit) {
        if(isEven(digit)) {
            evenDigitInRow++;
            if (evenDigitInRow >= 2) {
                twoEvenDigitInRow = true;
            }
        } else  {
            evenDigitInRow = 0;
        }
    });
    return twoEvenDigitInRow;
}

function isProductOfOddDigitASquareNumber(number) {
    let digits = getDigits(number);
    let oddDigits = digits.filter(isOdd);

    if (!oddDigits.length) {
        return false;
    } else {
        let productOddDigits = arrayProduct(oddDigits);
        return Math.sqrt(productOddDigits) % 1 === 0;
    }
}

module.exports = {
    getDigits: getDigits,
    isOdd: isOdd,
    isEven: isEven,
    getDigitDistribution: getDigitDistribution,
    arrayProduct: arrayProduct,
    arraySum: arraySum,
    isSumOfDigits: isSumOfDigits,
    isDecreasingSequence: isDecreasingSequence,
    areAllDigitsDifferent: areAllDigitsDifferent,
    hasAtLeastTwoOddDigits: hasAtLeastTwoOddDigits,
    isFourthDigitEvent: isFourthDigitEvent,
    isDigitsProductNotMultipleOfFive: isDigitsProductNotMultipleOfFive,
    containsThreeOddDigitsInRow: containsThreeOddDigitsInRow,
    isPrime: isPrime,
    hasAtLeastTwoEvenDigitInRow: hasAtLeastTwoEvenDigitInRow,
    isProductOfOddDigitASquareNumber: isProductOfOddDigitASquareNumber
};
