'use strict';

let utils = require('./utils');

exports = module.exports = MagicNumber;

function MagicNumber() {
    this.properties = [
        utils.isSumOfDigits,
        utils.isDecreasingSequence,
        utils.hasAtLeastTwoOddDigits,
        utils.areAllDigitsDifferent,
        utils.isFourthDigitEvent,
        utils.isDigitsProductNotMultipleOfFive,
        utils.containsThreeOddDigitsInRow,
        utils.isPrime,
        utils.hasAtLeastTwoEvenDigitInRow,
        utils.isProductOfOddDigitASquareNumber,
    ];
    this.upperLimit = 10000;
}

MagicNumber.prototype.getSmallest = function() {
    let i = 0;
    while (!this.isMagic(i) && i<this.upperLimit) {
        i++;
    }
    return i === this.upperLimit ? null : i;
};

MagicNumber.prototype.isMagic = function(number) {
    let self = this;
    let digitDistribution = utils.getDigitDistribution(number);

    return digitDistribution.every(function(digitIsPresent, digit) {
        return digitIsPresent === self.properties[digit](number);
    });
};