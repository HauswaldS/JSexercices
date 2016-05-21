var compte = {
    titulaire:"Axel",
    solde:0,
    
    crediter: function(montant){
        this.solde = this.solde + montant;
        return this.solde;
    },
    
    debiter: function(montant){
        this.solde = this.solde - montant;
        return this.solde;
    },
    
    decrire: function(){
        return console.log("Ce compte appartient à " + this.titulaire + " son solde est de : " + this.solde + "€ .");
    }
}

console.log(compte.crediter(100));
console.log(compte.decrire());
console.log(compte.debiter(50));
console.log(compte.decrire());