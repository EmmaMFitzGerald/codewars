function arrayDiff(a, b) {
    return a.filter((letter) => !b.includes(letter));
}