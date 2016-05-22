/*Tableau standard des apprenants*/

var kercodeApp = ["Julien", "Marie", "Abou", "Marine", "Abdou", "Rose", "Jonathan", "Florence", "Killian", "Morgane", "Axel", "Sophie", "Anthony", "Marine", "Peter", "Annabelle", "William", "Charle"];

/*Tableau associatif des apprenants*/

var kercodeApp = {
    initApp: function (nom, note, abs) {
        this.nom = nom;
        this.note = note;
        this.abs = abs;
    }
};

function addToArrayAss(arrayToAdd) {
    var arrayLength = arrayToAdd.length;
    for (i = 0; i <= arrayLength; i++) {
        var app(i) = Object.create(kercodeApp);
        app(i).initApp(arrayToAdd[i], 2, 2);
    }
}
