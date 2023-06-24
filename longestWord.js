function longestWord(strWord) {
    let Word = strWord.split(" ");
    let maxLength = 0;
    let longestWord = "";
    for (let i = 0; i < Word.length; i++) {
        if (Word[i].length >= maxLength) {
            maxLength = Word[i].length;
            longestWord = Word[i];
        }
    }
    return longestWord;
}

function shortestWord(strWord) {
    let Word = strWord.split(" ");
    let minLength = Word[0].length;
    let shortestWord = "";
    for (let i = 0; i < Word.length; i++) {
        if (Word[i].length <= minLength) {
            minLength = Word[i].length;
            shortestWord = Word[i];
        }
    }
    return shortestWord;
}

function wordLengths(strWord) {
    var sum = 0;
    var splitStrWord = strWord.split(" ");
    for (var i = 0; i < splitStrWord.length; i++) {
        sum += splitStrWord[i].length;
    }
    return sum;
}
