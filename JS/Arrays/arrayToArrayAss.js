/*Tableau standard des apprenants*/

var kercodeApp = ["Julien", "Marie", "Abou", "Marine", "Abdou", "Rose", "Jonathan", "Florence", "Killian", "Morgane", "Axel", "Sophie", "Anthony", "Marine", "Peter", "Annabelle", "William", "Charle"];

/*Tableau associatif des apprenants*/

var kercodeAppAss = {};

/*Fonction destinée à mélanger les chiffre */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

/*Ajoute le nom des apprenants & un numéro aléatoire associé dans le tableau associatif depuis le tableau standard*/

function addToAss(arrayToAdd, arrayAss) {

    var arrayLength = arrayToAdd.length;
    var arrayNumber = [];

    /*Place les nombres dans un tableau*/

    for (i = 1; i < arrayLength + 1; i++) {
        arrayNumber.push(i);
    }
    /*Mélange les nombres*/

    shuffle(arrayNumber);

    /*Ajoute la clé : nom et la valeur : nombre au tableau associatif KercodeAppAss(=arrayToAdd)*/

    for (i = 0; i < arrayLength; i++) {
        var nom = arrayToAdd[i];
        arrayAss[nom] = arrayNumber[i];
    }

    /*Affiche le tableau associatif KercodeAppAss*/

    for (value in arrayAss) {
        document.write("<li>" + value + " = n° " + arrayAss[value] + "</li>");
    }
}

addToAss(kercodeApp, kercodeAppAss);
