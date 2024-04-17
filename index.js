function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  
  while (start < end) {
      if (str[start] !== str[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("robot")); // Output: false
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false

