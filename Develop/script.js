// Assignment code here

//-----Character List
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = "!@#$%^&*()-_+=[]{};:,<>?./|"

//-----Pop up
function generatePassword() {
  var randomPassword = ""
  passwordLength = prompt("Please choose the length of your password (between 8-128 characters.)")

  //-----Cancel check
  if (passwordLength == null) {
    return null
  }

  //-----Convert PassLength to Int
  passwordLength = parseInt(passwordLength)

  //-----Checks to see that PassLength is valid
  if (!(passwordLength > 7 && passwordLength < 129)) {
    alert("Not a valid input.")
    return generatePassword()
  }

  //-----Password Builder
  var characterList = ""
  var hasLowerCase = confirm("Do you want your password to have lower case letters?")
  var hasUpperCase = confirm("Do you want your password to have upper case letters?")
  var hasNumbers = confirm("Do you want your password to have numbers?")
  var hasSymbols = confirm("Do you want your password to have symbols?")
  //-----Adds each type of character to password
  if (hasLowerCase) {
    characterList += lowerCase
    randomPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
  }
  if (hasUpperCase) {
    characterList += upperCase
    randomPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length))
  }
  if (hasNumbers) {
    characterList += numbers
    randomPassword += numbers.charAt(Math.floor(Math.random() * numbers.length))
  }
  if (hasSymbols) {
    characterList += symbols
    randomPassword += symbols.charAt(Math.floor(Math.random() * symbols.length))
  }

  //-----Generator
  for (var i = randomPassword.length; i < passwordLength; i++) {
    randomPassword += characterList.charAt(Math.floor(Math.random() * characterList.length))
  }
  return randomPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
