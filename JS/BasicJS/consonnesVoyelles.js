var mot = prompt("Entrez le mot à inverser : ");
var minisculeMot = mot.toLowerCase();
var voyelle = 0;
var consonne = 0;
for (i = 0; i < mot.length; i++) {
    switch (minisculeMot[i]) {
        case "a": voyelle++;
        break;
        case "e": voyelle++;
        break;
        case "i": voyelle++;
        break;
        case "o": voyelle++;
        break;
        case "u": voyelle++;
        break;
        case "y": voyelle++;
        break;
        default: consonne++;
    }
}

alert("Le mot : " + mot + " contient : " + voyelle + (" voyelles et " + consonne + (" consonnes.")));