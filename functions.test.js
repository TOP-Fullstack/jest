// To get import/export statements working properly with Jest
// https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm/61653104#61653104
import {
  capitalize,
  //   reverseString,
  //   capitalize,
  //   caesarCipher,
  //   analyzeArray,
} from "./functions.js";

// Write capitalize function that takes a string and
// returns it with the first character capitalized
it("Capitalize", () => {
  expect(capitalize("string")).toBe("String");
});

// reverseString: take string and return reversed

// calculator that contains add, subtract, divide, multiply
