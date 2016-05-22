/*Tableau des apprenants*/

var kercodeApp = ["Julien", "Marie", "Abou", "Marine", "Abdou", "Rose", "Jonathan", "Florence", "Killian", "Morgane", "Axel", "Sophie", "Anthony", "Marine", "Peter", "Annabelle", "William", "Charle"];
/*Second tableau, utilisé pour la comparaison*/
var kercodeApp = ["Julien", "Marie", "Abou", "Marine", "Abdou", "Rose", "6Jonathan", "Florence", "Killian2", "Morgane", "Axel", "Sophie", "5Anthony", "Marine", "Peter", "Annabelle", "William", "4Charle"];


/*Fonction qui demande à l'utilisateur d'entrer une valeur. Boucle jusqu'à ce que la valeur ne soit ni undefined/ni empty.*/

function askValue(where) {
    while (value === undefined || value == "") {
        var value = prompt("Entrez la valeur/string à placer en " + where + " de tableau : ");
    }
    return value;
}

/*Function qui liste les apprenants*/

function listApp() {
    kercodeApp.forEach(function (apprenant) {
        document.write("<li>" + apprenant + "</li>");
    });
}

/*Function qui ajoute en début de tableau la valeur demandée*/

function addBeginning() {
    var toBeginning = askValue("début");
    kercodeApp.unshift(toBeginning);
    listApp();
}

/*Function qui ajoute au millieu du tableau la valeur demandée*/

function addToMiddle() {
    var toMiddle = askValue("millieu");
    var toMiddleIndex = parseInt(kercodeApp.length / 2);
    kercodeApp.splice(toMiddleIndex, 0, toMiddle);
    listApp();
}

/*Function qui ajoute en fin de tableau la valeur demandée*/

function addEnd() {
    var toEnd = askValue("fin");
    kercodeApp.push(toEnd);
    listApp();
}

/*Function qui compare le contenu de 2 tableau pour savoir si ils sont identiques*/

function arrayCompare(ar1, ar2) {
    if (ar1.length = !ar2.length) {
        alert("Les tableaux ne sont pas identiques.")
    } else {
        var stringAr1 = ar1.toString();
        var stringAr2 = ar2.toString();
        console.log(stringAr1);
        if (stringAr1 !== stringAr2) {
            alert("Les tableaux ne sont pas identiques.");
        } else {
            alert("Les tableaux sont identiques.")
        }
    }
}

alert(kercodeApp.length);
