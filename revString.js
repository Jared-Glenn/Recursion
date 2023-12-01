const revString = (string) => {
    if (string.length === 0) {
        return "";
    };
    return revString(string.slice(1)) + string[0]
}

console.log(revString("porcupine"));