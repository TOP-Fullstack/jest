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
