function nextPalindrome(num) {
    // Helper function to check if a number is a palindrome
    const isPalindrome = (n) => {
        const str = n.toString();
        return str === str.split('').reverse().join('');
    };

    // Start from the next number
    let nextNum = parseInt(num) + 1;

    // Keep incrementing until we find a palindrome
    while (!isPalindrome(nextNum)) {
        nextNum++;
    }

    return nextNum;
}

// Do not change the code below
const input = prompt("Enter a palindrome number:");
alert(nextPalindrome(input));
