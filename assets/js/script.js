//variable for the button so it can listen for the click event
var generateBtn = document.querySelector("#generate");

//all the possible character sets
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
const specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //get input for the length of the password
  let pwordLength = getLength();
  
  //get the character list for the password
  let charList = getCharList()
  
  while (charList.length === 0){
    alert("The password must include at least one of these charsets! try again")
    charList = getCharList()
  }
  
  //now that we have the length and character set, build the password!
  let password = buildPassword(pwordLength, charList)
  
  return password
}

//gets the length of the password from the user
function getLength(){

  let isProperLength = false;
  //get input for the length of the password
  let pwordLength = parseInt(prompt("Enter a password length between 8 and 128 inclusive"));
  //if the user enters an invalid length, try again until it works
  while (!isProperLength){
    if (pwordLength < 8 || pwordLength > 128 || isNaN(pwordLength)){
      pwordLength = parseInt(prompt("Invalid length! Enter a password length between 8 and 128 inclusive"));
    } else {
      isProperLength = true;
    };
  };

  console.log(pwordLength)
  
  return pwordLength;
};

//gets the list of usable characters from the user (lowercase, uppercase, digits, special characters)
function getCharList(){
  //this will return with the arrays of each selected character set
  let charList = [lowerCaseLetters, upperCaseLetters, numericCharacters, specialCharacters];
  let userSelections = []
  const options = ["lower case letters", "upper case letters", "numbers", "special characters"];
  for (var i = 0; i < charList.length; i++){
    //for each set the user will decide which ones to include
    let response = confirm("Click ok if you would like to have " + options[i] + " in your password. Click cancel if not.")
    if (response){
      userSelections = userSelections.concat(charList[i])
    }
  }

  return userSelections
};

//builds the password based on the given parameters
function buildPassword(plength, charset){
  let completedPassword = ""

  for (var i = 0; i < plength; i++){

    //select a character from the charset
    var char = charset[Math.floor(Math.random() * charset.length)]

    //append it to the password
    completedPassword += char
  }

  return completedPassword
}

//spice up css if time
//PSEUDOCODE:

//the user now has the settings all set for the password. Time to build it

//for each character up to the length specified:

  //determine which characters are available

  //pick a random number to determine charatcer type

  //pick another random number to decide which character to add

  //concatenate that onto the new passowrd

//print password to the screen  