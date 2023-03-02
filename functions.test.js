// To get import/export statements working properly with Jest
// https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm/61653104#61653104
import {
  capitalize,
  reverseString,
  capitalize,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

test("Sum test", () => {
  expect(sum(1, 2)).toBe(3);
});
