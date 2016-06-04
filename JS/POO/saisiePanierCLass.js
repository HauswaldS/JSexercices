"use strict";
/*										SaisiePanier.js
	exercice saisie d'un panier
	Initiation à la programmation objet
										Emmanuel 25/05/2016
*/

/* Classe Client
 */

class ObjetNumero {
    constructor(pnumero, pnom) {
        this.numero = pnumero;
        this.nom = pnom;
    }

    toString() {
        return (this.numero + " -- " + this.nom);
    }

}

class Client extends ObjetNumero {
    // Déclaration du constructeur

    constructor(numero, prenom, nom) {
        super(numero, nom);
        this.prenom = prenom;
        this.email = null;
    }

    // retourne les propriétés principales (ce qui identifie l'objet)
    toString() {
        return ("Client numero:" + this.numero +
            ", prenom:" + this.prenom + ", nom:" + this.nom);
    }
}

/* classe article
 */
class Article {
    constructor(code, desc, prixht) {
        this.code = code;
        this.desc = desc;
        this.prixht = prixht;
        this.tva = null;
    }

    getTva() {
        return this.tva;
    }
    setTva(tva) {
        this.tva = tva;
    }

    //getter taux de tva
    get txTva() {
        return SaisiePanier.tauxTva[this.tva];
    }

    toString() {
        return ("article code,:" + this.code + ", desc:" +
            this.desc + ",txTva=" + this.txTva +
            ", index tva = " + this.getTva());
    }
}

class LignePanier {
    constructor(article, qte) {
        this.article = article;
        this.qte = qte;
    }

    afficher() {
        console.log("ligne:" + this.article.code + "**" + this.article.desc +
            "**" + this.qte);
    }

    toString() {
        return ("ligne:" + this.article.toString());
    }
}

class Panier extends ObjetNumero {
    constructor(numero, nom, zclient) {
        super(numero, nom);
        this.client = zclient;
        this.tableauPanier = new Array();
    }

    ajouterLigne(ligne) {
        this.tableauPanier.push(ligne);
    }

    afficherContenu() {
        console.log(this.toString());
        for (let i = 0; i < this.tableauPanier.length; i++) {
            this.tableauPanier[i].afficher();
        }

    }

    toString() {
        return ("Panier :" + super.toString());
    }
}

class SaisiePanier {

    //affichage tableau par introspection
    static afficherTableau(tab) {
        for (let i = 0; i < tab.length; i++) {
            console.log(tab[i].toString());
        }
    }

    static main() {
        let client = new Array();
        let article = new Array();
        let panier, ligne;
        console.log("SaisiePanier.main");

        //alimentation table client
        client[0] = new Client(1, 'Charles', 'Duval');
        client[1] = new Client(2, 'Camille', 'Lefevre');
        client[2] = new Client(3, 'Jean', 'Kermorvan');
        client[3] = new Client(4, 'Thomas', 'De la Faillotte');

        //affichage de tous les clients
        SaisiePanier.afficherTableau(client);
        /*
        for (let i=0;i<client.length;i++) {
        	console.log(client[i].toString());
        }*/

        //alimentation table article
        article[0] = new Article('5612', 'Chaussures noires', 89);
        article[1] = new Article('6712', 'Veste bleue', 135);
        article[2] = new Article('9078', 'Casquette verte', 29);
        article[0].tva = "1";
        article[1].setTva("2");

        //affichage de tous les articles
        SaisiePanier.afficherTableau(article);
        /*
        for (let i=0;i<article.length;i++) {
        	console.log(article[i].toString());
        }*/

        //creation d'un panier
        panier = new Panier(1, "En cours", client[0]);
        //console.log(panier.toString());

        //creation lignePanier
        ligne = new LignePanier(article[0], 5);

        //ajout de la ligne dans le panier
        panier.ajouterLigne(ligne);

        //affichage du panier
        panier.afficherContenu();
        document.write(panier.toString());


    }
}

//variables static de SaisiePanier
SaisiePanier.tauxTva = {
    "1": 20,
    "2": 10,
    "3": 5.5,
    "4": 2.5
};

SaisiePanier.main();
