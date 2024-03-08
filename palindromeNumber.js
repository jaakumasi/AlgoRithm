/* Problem 2 */
/* checks if a number is a palindrome */

var isPalindrome = function (x) {
    let isPalindrome = true;
    const stringified = x.toString().split('')
    const iterations = Math.floor(stringified.length / 2)
    for (let i = 0; i < iterations; i++) {
        if (stringified[i] !== stringified[stringified.length - 1 - i]) {
            isPalindrome = false
            break
        }
    }

    return isPalindrome
};