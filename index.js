function isPalindrome(word) {
  if(word.split("").reverse().join("") === word) {
    return true
  } else if(word.split("").reverse().join("") !== word) {
    return false
  }
}

/* 
if string is palindrome
  return true
if string is not palindrome
  return false
*/

/*
  split the string into an array, reverse the order of the array, rejoin the array into a string, 
  compare the rejoined string to the original to see if it matches
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("carry"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
