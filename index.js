function isPalindrome(word) {
  // Write your algorithm here
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Initialize pointers for the first and last characters
    let left = 0;
    let right = cleanWord.length - 1;
    
    // Continue comparing characters until the pointers meet in the middle
    while (left < right) {
      if (cleanWord[left] !== cleanWord[right]) {
        return false; // If any characters don't match, it's not a palindrome
      }
      left++;
      right--;
    }
    
    return true;
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Create a function isPalindrome that takes a string word as input.
Remove non-alphanumeric characters and convert word to lowercase. Store the result in cleanWord
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
