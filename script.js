function firstChar(str) {
  // Iterate through the string to find the first non-space character
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i];
    }
  }
  // If only spaces are found, return an empty string
  return '';
}

// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
