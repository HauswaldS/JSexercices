function countWords() {
    var word = prompt("Entrez une phrase : ");
    var wordCount = [];
    for (i = 0; i < word.length + 1; i++) {
        var indice = i;
        if (indice == " " || indice == ",") {
            console.log(indice);
        }
    }
}
countWords();
