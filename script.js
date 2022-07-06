// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This creates strings for the different options of the password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "$!#%&*)";

// This creates the prompt and confirms and ensures a specfic character length
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?\nMust be 8-128 characters in length");
  
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === false) {
    alert("That's a no go chief");
  } 

  else {
  var addNumbers = confirm("Do you want numbers in your password?");
  var addUpperCase = confirm("Do you want Uppercase characters in your password?");
  var addLowerCase = confirm("Do you want lowercase characters in your password?");
  var addSpecialCharacters = confirm("Do you want special characters in your password?");
  }


  // This creates functions to retrieve random characters from my character strings 
  
  var getLowerCase = function() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  var getNumbers = function() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  var getUpperCase = function() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  var getSpecialChar = function() {
    return specialChar[Math.floor(Math.random() * specialChar.length)];
  }
   
  // This creates empty values to be added to  
    var minimumCount = 0;
    var minimumNumbers = "";
    var minimumLowerCase = "";
    var minimumUpperCase = "";
    var minimumSpecial = "";
    var options = ""
 
    // This sets the conditions for if certain characters were selected and creates an options variable to be pulled from later
  if (addNumbers === true) {
    minimumNumbers = getNumbers();
    minimumCount ++;
    options += numbers;
  }

  if (addUpperCase === true) {
    minimumUpperCase = getUpperCase();
    minimumCount ++;
    options += upperCase;
  }

  if (addLowerCase === true) {
    minimumLowerCase = getLowerCase();
    minimumCount ++;
    options += lowerCase;
  }

  if (addSpecialCharacters === true) {
    minimumSpecial = getSpecialChar();
    minimumCount ++;
    options += specialChar
  }

  // This created an empty variable to be added to and later returned
  var PasswordCreated = "";

  // This creates a for loop to fill out the remaining characters selected minus the characters added from the previous functions
  for (var i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomSelection = options[Math.floor(Math.random() * options.length)];
    PasswordCreated += randomSelection;
  }

  // This combines the results from the previous functions and the result of the previous for loop
  var combo = minimumLowerCase + minimumNumbers + minimumSpecial + minimumUpperCase;
  PasswordCreated += combo;

  return PasswordCreated;

}



