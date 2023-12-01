const longest = (wordList) => {
    if (wordList.length === 0) {
        return 0
    }
    let thisWord = wordList[0].length;
    let otherWords = longest(wordList.slice(1))

    if (thisWord > otherWords) {
        return thisWord;
    }
    else {
        return otherWords
    }
}

console.log(longest(["hello", "hi", "hola"]))