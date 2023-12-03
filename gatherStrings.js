const gatherStrings = (object) => {
    const stringList = [];
    
    for (value of Object.values(object)) {
        if (typeof value === "object") {
            stringList.push(...gatherStrings(value));
        }
        else if (typeof value === "string") {
            stringList.push(value);
        }
    }
    return stringList;
}

let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };

console.log(gatherStrings(nestedObj))