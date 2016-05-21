var Chien = {
    init: function(nom, taille, race) {
        this.nom = nom;
        this.taille = taille;
        this.race = race;
    },
    
    aboyer: function() {
        var gueule = "Ouaf ouaf";
        return gueule;
    },
}

var crokdur = Object.create(Chien);
crokdur.init("Crockdur", 100, "Con");
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", 56, "Nope");

pupuce.aboyer = function(){
    var gueule = "Kai kai";
    return gueule;
};

console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());