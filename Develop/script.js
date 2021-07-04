// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSymbol;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

//prompt to confirm number of characters
function generatePassword(){
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  //if answer is outside parameters 
  while(confirmLength <= 7) {
    alert("Password length must be 8 characters long")
  }

  //confirm password characters
  var confirmSymbol = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  // if they say no to one of these
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbol === false && confirmNumber === false) {
    alert("You must choose at least one option");
    var confirmSymbol = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }
}
//assign the characters 
var passwordCharacters = []

if (confirmSymbol) {
  passwordCharacters = passwordCharacters.concat(symbol)
}
if (confirmNumber) {
  passwordCharacters = passwordCharacters.concat(number)
}
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}
if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}
console.log(passwordCharacters);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
