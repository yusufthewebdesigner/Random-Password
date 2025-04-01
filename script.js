let inputBox = document.getElementById("inputBox");
let copyButton = document.getElementById("copyBtn");
let passwordButton = document.getElementById("passBtn");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%&*_-.";
let allChars = upperCase + lowerCase + number + symbol;

passwordButton.onclick = function () {
  let userInput = document.getElementById("userInput").value;

  passLength = userInput;
  let password = "";
  if (userInput < 5) {
    inputBox.value = "Sorry! Length must be greater than 4.";
  } else if (userInput < 6) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // Char-1
    while (passLength > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)]; // Char-rest
    }
    inputBox.value = password;
  } else {
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // Char-1
    password += allChars[Math.floor(Math.random() * allChars.length)]; // Char-2
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // Char-3
    password += symbol[Math.floor(Math.random() * symbol.length)]; // Char-4
    password += number[Math.floor(Math.random() * number.length)]; // Char-5
    while (passLength > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)]; // Char-rest
    }
    inputBox.value = password;
  }
};
//
// Copy function
copyButton.onclick = function () {
  inputValue = inputBox.value;
  navigator.clipboard.writeText(inputValue);
};
