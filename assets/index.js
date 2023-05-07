// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
// add lowercase
// add lowercase
// add numbers
// add special characters
var upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var numberChars = ['1','2','3','4','5','6','7','8','9','0',]
var specialChars = ['.','#','$','!',]
var passwordJumble = []

//randomize password
function generatePassword() {
  var password ="";
  for(var i = 0; i < characterLength; i++){
    var randomLetter = Math.floor(Math.random() * passwordJumble.length);
    password = password + passwordJumble[randomLetter]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = promptUser();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
  passwordText.value = "";
  }
}

function promptUser() {
  passwordJumble = [];
  //resets password array when function is called
  characterLength = parseInt(prompt('How many characters would you like to include within your password? (8 - 128 characters)'));
// isNaN makes sure a number is being typed into the alert prompt
  if (isNaN(characterLength) || characterLength <8 || characterLength >128) { 
    alert("Character length has to be a number and consist of a length of 8 - 128 characters.");
    return false; //password length 8-128
  }
  if (confirm("Would you like to add lowercase letters in your password?")) {
    passwordJumble = passwordJumble.concat(lowerCaseChars);
  }
  if (confirm("Would you like to add uppercase letters in your password?")) {
    passwordJumble = passwordJumble.concat(upperCaseChars);
  }
  if (confirm("Would you like to add numbers in your password?")) {
    passwordJumble = passwordJumble.concat(numberChars);
  }
  if (confirm("Would you like to add special characters in your password?")) {
    passwordJumble = passwordJumble.concat(specialChars);
  }
  return true;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
