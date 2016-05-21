function min(chiffre1, chiffre2) {
    if (chiffre1 > chiffre2) {
        return chiffre2;
    }
    else if (chiffre1 < chiffre2){
        return chiffre1;
    }
    else {
        return chiffre1;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1