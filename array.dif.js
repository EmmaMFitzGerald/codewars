function arrayDiff(a, b) {
    let filteredArray = a.filter((letter) => !b.includes(letter));
    return filteredArray;
}