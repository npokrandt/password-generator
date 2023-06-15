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

function generatePassword(){
  return "password"
}

//spice up css if time
//PSEUDOCODE:

//user pushes button to generate password
//the function generatePassword runs
//it starts with the following prompts: 

//prompt: select the length of the password, between 8 and 128 inclusive

//confirm: do you want lowercase letters in your password?

//confirm: do you want uppercase letters in your password?

//confirm: do you want numbers in your password?

//confirm: do you want special characters in your password?

//for each character up to the length specified:

  //determine which characters are available

  //pick a random number to determine charatcer type

  //pick another random number to decide which character to add

  //concatenate that onto the new passowrd

//print password to the screen  