const isPalindrome = (string) => {
    if (string.length === 0) {
        return true;
    }
    let newString = string.slice(1, -1);
    let otherTests = isPalindrome(newString);

    if ((string[0] === string[string.length-1]) && otherTests) {
        return true;
    }
    return false;
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("tacodog"));