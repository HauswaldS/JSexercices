/*Tableau standard des apprenants*/

var kercodeApp = ["Julien", "Marie", "Abou", "Marine", "Abdou", "Rose", "Jonathan", "Florence", "Killian", "Morgane", "Axel", "Sophie", "Anthony", "Marine", "Peter", "Annabelle", "William", "Charle"];

/*Tableau associatif des apprenants*/

var kercodeAppObj = {
    initApp: function (nom, note, abs) {
        this.nom = nom;
        this.note = note;
        this.abs = abs;
    },

    decrire: function () {
        var description = "<li>Prénom : " + this.nom + " | Note : " + this.note + " | Absence : " + this.abs + "</li></br>";
        return description;
    }
};

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function printArray(arrayToPrint, arrayName) {
    document.write("<h1>" + arrayName + "</h1>");
    for (value in arrayToPrint) {
        document.write("<li>" + arrayToPrint[value] + "</li>");
    }
}

function addToArrayAss(arrayToAdd) {
    var admis = [];
    var refus = [];
    var jury = [];
    var reoriente = [];
    var arrayLength = arrayToAdd.length;
    for (i = 0; i < arrayLength; i++) {
        this['app' + i] = Object.create(kercodeAppObj);
        this['app' + i].initApp(arrayToAdd[i], randomNumber(1, 20), randomNumber(0, 4));
        document.write(this['app' + i].decrire());
        var nom = this['app' + i].nom;
        var note = this['app' + i].note;
        var abs = this['app' + i].abs;

        if ((note => 8) && (abs < 2)) {
            jury.push(nom);
        } else if ((note => 8) && (abs > 2)) {
            reoriente.push(nom);
        } else if (note > 10) {
            admis.push(nom);
        } else {
            refus.push(nom);
        }
    }
    printArray(admis, "Admis");
    printArray(refus, "Refus");
    printArray(jury, "Jury");
    printArray(reoriente, "Réorienté")
}

addToArrayAss(kercodeApp);
