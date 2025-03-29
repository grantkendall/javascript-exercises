const palindromes = function (word) {
    const punctuation = ["!", ",", ".", "?"];
    const lower = word.toLowerCase();
    const noSpaces = lower.replaceAll(" ", "");
    const arr = Array.from(noSpaces);

    for (let i = 0; i < arr.length; i++) {
        if (punctuation.includes(arr[i])) {
            arr.splice(i, 1);
        }
    };

    const reversed = arr.toReversed();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != reversed[i]) {
            return false;
        }
    };
    return true;
};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
