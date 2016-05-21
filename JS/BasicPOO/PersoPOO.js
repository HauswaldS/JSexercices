var Personnage = {
    initPerso: function (nom, sante, force, or, cle) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.or = 10;
        this.cle = 1;
    },

    attaquer: function (cible) {
        if (this.sante > 0) {
            console.log(this.nom + " attaque " + cible.nom + " et lui inflique " + this.force + " points de dégâts.");
            cible.sante = cible.sante - this.force;   
            if (cible.sante > 0) {
                console.log(cible.nom + " perd " + this.force + " points de vie.");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort sous l'assaut de " + this.nom);
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer car il est mort.");
        }
    }

};


var Joueur = Object.create(Personnage);

Joueur.initJoueur = function (nom, sante, force, or, cle) {
    this.initPerso(nom, sante, force, or, cle);
    this.xp = 0;
};

Joueur.decrire = function () {
    return this.nom + " a " + this.sante + " points de vie et " + this.force + " points de force. Son expérience vaut : " + this.xp + "xp. Sa bourse contient " + this.or + "pieces d'or et " + this.cle + " clé(s).";
};

Joueur.combattre = function(adversaire) {
    this.attaquer(adversaire);
        if (adversaire.sante === 0) {
            console.log(this.nom + " a gagné " + adversaire.valeur + " points d'xp ! Il a récupéré " + adversaire.or + " pièces d'or et " + adversaire.cle + " clé(s) sur son cadavre !");
            this.or += adversaire.or;
            this.cle += adversaire.cle;
            this.xp = this.xp + adversaire.valeur;
        }
}

var Adversaire = Object.create(Personnage);

Adversaire.initAdversaire = function (nom, sante, force, or, cle, race, valeur) {
    this.initPerso(nom, sante, force, or, cle);
    this.race = race;
    this.valeur = valeur;
};

Adversaire.decrire = function () {
    return "Un " + this.race + " appelé " + this.nom + " vous attaque ! Il a " + this.sante + " pv.";
};


var joueur1 = Object.create(Joueur)
joueur1.initJoueur("Axel", 100, 20, 10, 1);


var joueur2 = Object.create(Joueur)
joueur2.initJoueur("Sherbil", 120, 18, 10, 1);


var monstre = Object.create(Adversaire)
monstre.initAdversaire("Thrall", 25, 15, 20, 1, "Orc", 20);

console.log(joueur1.decrire());
console.log(monstre.decrire());
console.log(monstre.attaquer(joueur1));
console.log(monstre.attaquer(joueur2));
console.log(joueur1.combattre(monstre));
console.log(joueur2.combattre(monstre));
console.log(joueur2.decrire());
