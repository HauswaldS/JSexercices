var mot = prompt("Entrez un mot à inverse : ");

function inverser(mot) {
    var motInverse = "";
    for (var i = mot.length - 1 ; i >= 0 ; i--) {
        motInverse += mot.charAt(i);
    }
    return motInverse;
}

if ( (inverser(mot)).toLowerCase == mot.toLowerCase) {
    console.log("C'est un palindrome.");
}
else {    console.log("Ce n'est pas un palindrome.");
}

console.log("Le mot original est : " +mot+ " inversé il donne " + inverser(mot));
