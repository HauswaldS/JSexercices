function calculer(chiffre1, signe, chiffre2) {
    var resultat;
    switch (signe) {
    case "+":
        resultat = chiffre1 + chiffre2;
        break;
    case "-":
        resultat = chiffre1 - chiffre2;
        break;
        case "*":
            resultat = chiffre1*chiffre2;
            break;
        case "/":
            resultat = chiffre1/chiffre2;
            break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity