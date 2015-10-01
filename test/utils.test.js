'use strict';

let expect = require('chai').expect;
let utils = require('../utils');

describe('utils', function() {
  describe('getDigitDistribution()', function() {
    it('should set true only on the first position if 0', function() {
      expect(utils.getDigitDistribution(0)).to.eql([true, false, false, false, false, false, false, false, false, false]);
    });
    it('should set true only on the second position if 1', function() {
      expect(utils.getDigitDistribution(1)).to.eql([false, true, false, false, false, false, false, false, false, false]);
    });
    it('should set true only on the tenth position if 9', function() {
      expect(utils.getDigitDistribution(9)).to.eql([false, false, false, false, false, false, false, false, false, true]);
    });
    it('should set true on the position of every digit of the number', function() {
      expect(utils.getDigitDistribution(10)).to.eql([true, true, false, false, false, false, false, false, false, false]);
    });
    it('should set true on the position of every digit of the number', function() {
      expect(utils.getDigitDistribution(17490)).to.eql([true, true, false, false, true, false, false, true, false, true]);
    });
    it('should set true on every position if the number contains every digits', function() {
      expect(utils.getDigitDistribution(1234567890)).to.eql([true, true, true, true, true, true, true, true, true, true]);
    });
  });
  describe('isOdd()', function() {
    it('should return false as zero is even', function() {
      expect(utils.isOdd(0)).to.be.false;
    });
    it('should return false with even number', function() {
      expect(utils.isOdd(2)).to.be.false;
    });
    it('should return false with even number', function() {
      expect(utils.isOdd(100)).to.be.false;
    });
    it('should return true with odd number', function() {
      expect(utils.isOdd(1)).to.be.true;
    });
    it('should return true with odd number', function() {
      expect(utils.isOdd(3)).to.be.true;
    });
    it('should return true with odd number', function() {
      expect(utils.isOdd(101)).to.be.true;
    });
  });
  describe('isEven()', function() {
    it('should return true as zero is even', function() {
      expect(utils.isEven(0)).to.be.true;
    });
    it('should return true with even number', function() {
      expect(utils.isEven(2)).to.be.true;
    });
    it('should return true with even number', function() {
      expect(utils.isEven(100)).to.be.true;
    });
    it('should return false with odd number', function() {
      expect(utils.isEven(1)).to.be.false;
    });
    it('should return false with odd number', function() {
      expect(utils.isEven(3)).to.be.false;
    });
    it('should return false with odd number', function() {
      expect(utils.isEven(101)).to.be.false;
    });
  });
  describe('arrayProduct()', function() {
    it('should return null if parameter is a number', function() {
      expect(utils.arrayProduct(1)).to.be.null;
    });
    it('should return null if parameter is a string', function() {
      expect(utils.arrayProduct('foo')).to.be.null;
    });
    it('should return null if parameter is an object', function() {
      expect(utils.arrayProduct({foo: 'bar'})).to.be.null;
    });
    it('should return null if empty array', function() {
      expect(utils.arrayProduct([])).to.be.null;
    });
    it('should return 0 if the array contain a 0', function () {
      expect(utils.arrayProduct([1, 4, 0])).to.be.equal(0);
    });
    it('should return the sum of numbers in the array', function () {
      expect(utils.arrayProduct([1, 4])).to.be.equal(4);
    });
    it('should return the sum of numbers in the array', function () {
      expect(utils.arrayProduct([5, 5])).to.be.equal(25);
    });
  });
  describe('arraySum()', function() {
    it('should return null if parameter is a number', function() {
      expect(utils.arraySum(1)).to.be.null;
    });
    it('should return null if parameter is a string', function() {
      expect(utils.arraySum('foo')).to.be.null;
    });
    it('should return null if parameter is an object', function() {
      expect(utils.arraySum({foo: 'bar'})).to.be.null;
    });
    it('should return null if empty array', function() {
      expect(utils.arraySum([])).to.be.null;
    });
    it('should return the sum of the number of the array', function () {
      expect(utils.arraySum([1, 4, 0])).to.be.equal(5);
    });
    it('should return the sum of the number of the array', function () {
      expect(utils.arraySum([1, 4])).to.be.equal(5);
    });
    it('should return the sum of the number of the array', function () {
      expect(utils.arraySum([5, 5, 9, 1])).to.be.equal(20);
    });
  });
  describe('getDigits()', function() {
    it('should return an empty Array if parameter is a string', function () {
      let digits = utils.getDigits('foo');
      expect(digits.length).to.be.equal(0);
    });
    it('should return one digit if parameter is lower than 10', function () {
      let digits = utils.getDigits(0);
      expect(digits.length).to.be.equal(1);
    });
    it('should return all the digits of a number', function () {
      let digits = utils.getDigits(1234567890);
      for (let i=0; i<=9; i++) {
        expect(digits.indexOf(i)).not.equal(-1);
      }
    });
    it('should not deduplicate digits', function () {
      let digits = utils.getDigits(111);
      expect(digits.length).to.be.equal(3);
    });
  });
  describe('isSumOfDigits()', function() {
    it('should return false if 0', function() {
      expect(utils.isSumOfDigits(0)).to.be.false;
    });
    it('should return false if only one digit', function() {
      expect(utils.isSumOfDigits(1)).to.be.false;
    });
    it('should return true when the bigest digit is the sum of the others', function() {
      expect(utils.isSumOfDigits(369)).to.be.true;
    });   
    it('should return true when the bigest digit is the sum of the others', function() {
      expect(utils.isSumOfDigits(6321)).to.be.true;
    });   
    it('should return true when the bigest digit is the sum of the others', function() {
      expect(utils.isSumOfDigits(633)).to.be.true;
    });
    it('should return true when the bigest digit is the sum of the others', function() {
      expect(utils.isSumOfDigits(33)).to.be.true;
    });
    it('should return false when the bigest digit is not the sum of the others', function() {
      expect(utils.isSumOfDigits(8321)).to.be.false;
    });
    it('should return false when the bigest digit is not the sum of the others', function() {
      expect(utils.isSumOfDigits(26)).to.be.false;
    });
  });
  describe('isDecreasingSequence()', function() {
    it('should return true if only one digit', function() {
      expect(utils.isDecreasingSequence(0)).to.be.true;
    });
    it('should return true if only one digit', function() {
      expect(utils.isDecreasingSequence(1)).to.be.true;
    });
    it('should return true if number is a decresing sequence', function() {
      expect(utils.isDecreasingSequence(963)).to.be.true;
    });
    it('should return true if number is a decresing sequence with duplicates', function() {
      expect(utils.isDecreasingSequence(966311)).to.be.true;
    });   
    it('should return false if number is not a decreasing sequence', function() {
      expect(utils.isDecreasingSequence(69)).to.be.false;
    });
    it('should return false if number is not a decreasing sequence', function() {
      expect(utils.isDecreasingSequence(969)).to.be.false;
    });
  });
  describe('hasAtLeastTwoOddDigits()', function() {
    it('should return false if only one digit', function() {
      expect(utils.hasAtLeastTwoOddDigits(0)).to.be.false;
    });
    it('should return false if only one digit', function() {
      expect(utils.hasAtLeastTwoOddDigits(1)).to.be.false;
    });
    it('should return true if the two digits are odd', function() {
      expect(utils.hasAtLeastTwoOddDigits(33)).to.be.true;
    });
    it('should return true if two digits are odd', function() {
      expect(utils.hasAtLeastTwoOddDigits(433)).to.be.true;
    });
    it('should return true if two digits are odd', function() {
      expect(utils.hasAtLeastTwoOddDigits(43434)).to.be.true;
    });
    it('should return true if more than two digits are odd', function() {
      expect(utils.hasAtLeastTwoOddDigits(43974)).to.be.true;
    });
    it('should return false if zero is odd', function() {
      expect(utils.hasAtLeastTwoOddDigits(44)).to.be.false;
    });
    it('should return false if only one is odd', function() {
      expect(utils.hasAtLeastTwoOddDigits(43)).to.be.false;
    });
    it('should return false if only the first digit is odd', function() {
      expect(utils.hasAtLeastTwoOddDigits(34)).to.be.false;
    });
  });
  describe('areAllDigitsDifferent()', function() {
    it('should return true if only one digit', function() {
      expect(utils.areAllDigitsDifferent(0)).to.be.true;
    });
    it('should return true if only one digit', function() {
      expect(utils.areAllDigitsDifferent(1)).to.be.true;
    });
    it('should return true all digits are different', function() {
      expect(utils.areAllDigitsDifferent(34)).to.be.true;
    });
    it('should return true all digits are different', function() {
      expect(utils.areAllDigitsDifferent(1234567890)).to.be.true;
    });
    it('should return false if all the digits are the same', function() {
      expect(utils.areAllDigitsDifferent(44)).to.be.false;
    });
    it('should return false if a digit appears several times', function() {
      expect(utils.areAllDigitsDifferent(696)).to.be.false;
    });
    it('should return false if several digits appear several times', function() {
      expect(utils.areAllDigitsDifferent(69696)).to.be.false;
    });
  });
  describe('isFourthDigitEvent()', function() {
    it('should return false if only one digit', function() {
      expect(utils.isFourthDigitEvent(0)).to.be.false;
    });
    it('should return false if only one digit', function() {
      expect(utils.isFourthDigitEvent(1)).to.be.false;
    });
    it('should return false if only two digits', function() {
      expect(utils.isFourthDigitEvent(10)).to.be.false;
    });
    it('should return false if only three digits', function() {
      expect(utils.isFourthDigitEvent(101)).to.be.false;
    });
    it('should return false if the fourth digit is odd', function() {
      expect(utils.isFourthDigitEvent(1001)).to.be.false;
    });
    it('should return false if the fourth digit is odd', function() {
      expect(utils.isFourthDigitEvent(10010)).to.be.false;
    });
    it('should return true if the fourth digit is even', function() {
      expect(utils.isFourthDigitEvent(1000)).to.be.true;
    });
    it('should return true if the fourth digit is even', function() {
      expect(utils.isFourthDigitEvent(11121)).to.be.true;
    });
  });
  describe('isDigitsProductNotMultipleOfFive()', function() {
    it('should return false if 0', function() {
      expect(utils.isDigitsProductNotMultipleOfFive(0)).to.be.false;
    });
    it('should return false if 5', function() {
      expect(utils.isDigitsProductNotMultipleOfFive(5)).to.be.false;
    });
    it('should return true if only one digit and neither 0 nor 5', function() {
      [1, 2, 3, 4, 6, 7, 8, 9].forEach(function(digit) {
        expect(utils.isDigitsProductNotMultipleOfFive(digit)).to.be.true;
      });
    });
    it('should return false if product of the digits is a multiple of 5', function() {
      expect(utils.isDigitsProductNotMultipleOfFive(55)).to.be.false;
    });
    it('should return false if product of the digits is a multiple of 5', function() {
      expect(utils.isDigitsProductNotMultipleOfFive(145)).to.be.false;
    });
    it('should return false if one of the digit is 0', function() {
      expect(utils.isDigitsProductNotMultipleOfFive(1440)).to.be.false;
    });
    it('should return true if product of the digits is not a multiple of 5', function() {
      expect(utils.isDigitsProductNotMultipleOfFive(144)).to.be.true;
    });
  });
  describe('containsThreeOddDigitsInRow()', function() {
    it('should return false if one digits', function() {
      expect(utils.containsThreeOddDigitsInRow(0)).to.be.false;
    });
    it('should return false if one digits', function() {
      expect(utils.containsThreeOddDigitsInRow(1)).to.be.false;
    });
    it('should return false if two digits', function() {
      expect(utils.containsThreeOddDigitsInRow(33)).to.be.false;
    });
    it('should return false if not three odd digits', function() {
      expect(utils.containsThreeOddDigitsInRow(323)).to.be.false;
    });
    it('should return false if not three odd digits in a row', function() {
      expect(utils.containsThreeOddDigitsInRow(3437)).to.be.false;
    });
    it('should return true if only three odd digits', function() {
      expect(utils.containsThreeOddDigitsInRow(357)).to.be.true;
    });
    it('should return true if three odd digits in row starting with even digit', function() {
      expect(utils.containsThreeOddDigitsInRow(4357)).to.be.true;
    });
    it('should return true if three odd digits in row ending with even digit', function() {
      expect(utils.containsThreeOddDigitsInRow(3574)).to.be.true;
    });
    it('should return true if three odd digits in row in a middle of a number', function() {
      expect(utils.containsThreeOddDigitsInRow(3325374)).to.be.true;
    });
    it('should return true if more than three odd digits in row', function() {
      expect(utils.containsThreeOddDigitsInRow(4579180)).to.be.true;
    });
  });
  describe('isPrime()', function() {
    it('should return false as 0 is not a prime number', function() {
      expect(utils.isPrime(0)).to.be.false;
    });
    it('should return false as 1 is not a prime number', function() {
      expect(utils.isPrime(1)).to.be.false;
    });
    it('should return false as 100 is not a prime number', function() {
      expect(utils.isPrime(100)).to.be.false;
    });
    it('should return false as 1234 is not a prime number', function() {
      expect(utils.isPrime(1234)).to.be.false;
    });
    it('should return true as 2 is a prime number', function() {
      expect(utils.isPrime(2)).to.be.true;
    });
    it('should return true as 3 is a prime number', function() {
      expect(utils.isPrime(3)).to.be.true;
    });
    it('should return true as 23 is a prime number', function() {
      expect(utils.isPrime(23)).to.be.true;
    });
    it('should return true as 449 is a prime number', function() {
      expect(utils.isPrime(449)).to.be.true;
    });
  });
  describe('hasAtLeastTwoEvenDigitInRow()', function() {
    it('should return false if one digits', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(0)).to.be.false;
    });
    it('should return false if one digits', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(1)).to.be.false;
    });
    it('should return false if only two odd digits', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(33)).to.be.false;
    });
    it('should return false if only one even digit', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(343)).to.be.false;
    });
    it('should return false if two even number not in row', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(3434)).to.be.false;
    });
    it('should return true if only two even digits', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(22)).to.be.true;
    });
    it('should return true if two even digits in row starting with an odd digit', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(346)).to.be.true;
    });
    it('should return true if two even digits in row ending with an odd digit', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(823)).to.be.true;
    });
    it('should return true if two even digits in row in a middle of a number', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(234986990)).to.be.true;
    });
    it('should return true if more than two even digits in row', function() {
      expect(utils.hasAtLeastTwoEvenDigitInRow(50201)).to.be.true;
    });
  });
  describe('isProductOfOddDigitASquareNumber()', function() {
    it('should return false if one even digit', function() {
      [0, 2, 4, 6, 8].forEach(function(evenDigit) {
        expect(utils.isProductOfOddDigitASquareNumber(evenDigit)).to.be.false;
      });
    });
    it('should return false if no odd digit', function(){
      expect(utils.isProductOfOddDigitASquareNumber(2668)).to.be.false;
    });
    it('should return false if one odd digit that is not a squared number', function(){
      expect(utils.isProductOfOddDigitASquareNumber(26568)).to.be.false;
    });
    it('should return false if the product of odd digits is not a squared number', function(){
      expect(utils.isProductOfOddDigitASquareNumber(2985)).to.be.false;
    });
    it('should return true if one squared odd digit ', function(){
      expect(utils.isProductOfOddDigitASquareNumber(26968)).to.be.true;
    });
    it('should return true if 1', function() {
      expect(utils.isProductOfOddDigitASquareNumber(1)).to.be.true;
    });
    it('should return true if the product of odd digits is a square number', function(){
      expect(utils.isProductOfOddDigitASquareNumber(1299)).to.be.true;
    });
  });
});

