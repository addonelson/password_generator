var generateBtn = document.querySelector("#generate");

var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];


function generatePassword() {
  var finalPassword = "";
  //prompt for a password
  var length = Number(prompt("How many characters would you like your password to be?"));
  //if the length is not a number it will read true and prompt for a length.
  //prompt will continue to ask for a number between 8-128 that is a number value and not a character
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  //this will prompt for an input by the user for each of the following cases. uppercase, lowercase, numbers & symbols.
  var upperCase = confirm("Would you like to use UPPERCASE letters?");
  var lowerCase = confirm("Would you like to use lowercase letters?");
  var numberCase = confirm("Would you like to use numbers?");
  var specialCase = confirm("Would you like to use special characters?");
  //if nothing is selected from the window prompts it will alert to select atleast one option
  while (!upperCase && !lowerCase && !numberCase && !specialCase) {
    alert("You must select at least one character type!");
    upperCase = confirm("Would you like to use uppercase letters?");
    lowerCase = confirm("Would you like to use lowercase letters?");
    numberCase = confirm("Would you like to use numbers?");
    specialCase = confirm("Would you like to use special characters?");
  }
  //var is empty until filled by user choice
  var yourPassword = [];
  //if the user chooses to use uppercase letters this will be added to the string of yourPassword
  if (upperCase === true) {
    var yourPassword = yourPassword.concat(uppers);
  }
  //if the user chooses to use lowercase letters this will be added to the string of yourPassword
   if (lowerCase === true) {
    var yourPassword = yourPassword.concat(lowers);
  }
  //if the user chooses to use numbercase letters this will be added to the string of yourPassword
  if (numberCase === true) {
    var yourPassword = yourPassword.concat(numbers);
  }
  //if the user chooses to use specialcase letters this will be added to the string of yourPassword
  if (specialCase === true) {
    var yourPassword = yourPassword.concat(special);
  }
  //var is empty until filled in the for loop
  var generate = " ";
// this will increment the password  and chosen characters with length
  for(var i = 0; i < length; i++){
    generate = generate += yourPassword[Math.floor(Math.random() * yourPassword.length)];

  }
  return generate;
  }

  function writePassword(){
    var generate = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = generate;
  }
    generateBtn.addEventListener("click", writePassword);