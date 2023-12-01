const findIndex = (arr, string) => {
    if (arr.length === 0) {
        return -1;
    };

    if (arr[0] === string) {
        return 0;
    };

    let indexFinder = findIndex(arr.slice(1), string);
    if (indexFinder === -1) {
        return -1;
    };

    return indexFinder + 1;
}


let animals = ["duck", "cat", "pony"];

console.log(findIndex(animals, "cat"));