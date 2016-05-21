
var chien = {
    nom: "hauswald",
    race: "Teckel",
    taille: 100,
    
    aboyer: function() {
        var grogner =" Grr Grr ";
        return grogner;
    }
}

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());