export function capitalize(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      newString += string[i].toUpperCase();
      continue;
    }
    newString += string[i];
  }
  return newString;
}

export function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

export function caesarCipher(string, value) {
  let encryptedString = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < string.length; i++) {
    let position = findPosition(string[i], alphabet);
    if (position + value > 26) position = position + value - 26;
    else {
      position = position + value;
    }
    encryptedString += alphabet[position];
  }
  return encryptedString;
}

function findPosition(char, alphabet) {
  for (let i = 0; i < alphabet.length; i++) {
    if (char == alphabet[i]) return i;
  }
}

export function analyzeArray(array) {
  let obj = {
    average: 0,
    min: array[0],
    max: array[0],
    length: 0,
  };
  for (let number of array) {
    obj.average += number;
    if (number < obj.min) obj.min = number;
    if (number > obj.max) obj.max = number;
    obj.length++;
  }
  obj.average = Number((obj.average / obj.length).toFixed(2));

  return obj;
}
