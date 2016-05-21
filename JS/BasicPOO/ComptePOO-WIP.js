//Initialise l'object Compte
var compteBancaire = {
    initCB: function (titulaire, argent) {
        this.titulaire = titulaire;
        this.argent = argent;
    },

    debiter: function (montant) {
        return this.argent -= montant;
    },

    crediter: function (montant) {
        return this.argent += montant;
    },

    decrire: function () {
        return this.titulaire + " a " + this.argent + "€ sur son compte."
    },
};

//Initialise l'object compteEparge qui hérite des propriétés de Compte.
var compteEpargne = Object.create(compteBancaire);

compteEpargne.initCE = function (titulaire, argent, taux) {
    this.initCE(titulaire, argent);
    this.taux = taux;
}
    compteEpargne.ajouterInterets = function () {
        return this.argent *= this.taux;
    };


var compte1 = Object.create(compteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(compteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
