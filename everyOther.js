const everyOther = (string) => {
    if (string.length === 0) {
        return;
    }
    let newString = string[0];
    let otherStrings = everyOther(string.slice(2));

    if (otherStrings) {
        return newString + everyOther(string.slice(2));
    }
    else {
        return newString;
    }

    
}

console.log(everyOther("hello"));