var personnage = {
    nom:     "Dude",
    race: "Orc",
    niveau: 10,
    force: 25,
    sante: 150,
    xp: 0,
    
    decrire: function() {
    var description = this.nom + " a " + this.sante + " points de vie et " + this.xp + " points d'xp.";
    return description;
}
};




console.log(personnage.decrire());

// Aurora est blessée par une flèche
personnage.sante = personnage.sante - 20;

// Aurora trouve un bracelet de force
personnage.force = personnage.force + 10;

// Aurora apprend une nouvelle compétence
personnage.xp = personnage.xp + 15;

console.log(personnage.decrire());
