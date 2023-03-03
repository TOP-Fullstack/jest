// To get import/export statements working properly with Jest
// https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm/61653104#61653104
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

it("should capitalize the first letter in a string", () => {
  expect(capitalize("string")).toBe("String");
});

it("should reverse a string", () => {
  expect(reverseString("papers")).toBe("srepap");
});

it("should perform calculations on two numbers", () => {
  expect(calculator.add(2, 6)).toBe(8);
  expect(calculator.subtract(10, 5)).toBe(5);
  expect(calculator.multiply(4, 5)).toBe(20);
  expect(calculator.divide(10, 5)).toBe(2);
});

it("should encrypt a message with the caesar cypher", () => {
  expect(caesarCipher("xena", 5)).toBe("cjsf");
});

it("should return an object with an average, min, max, and length", () => {
  const obj = analyzeArray([4, 5, 10]);
  expect(obj.average).toBe(6.33);
  expect(obj.min).toBe(4);
  expect(obj.max).toBe(10);
  expect(obj.length).toBe(3);
});
