class NomPrenom {
    constructor(pnom, pprenom) {
        this.nom = pnom;
        this.prenom = pprenom;
        this.films = [];
    }

    toString() {
        return "Nom : " + this.nom + " Prénom : " + this.prenom + "</br>";
    }

    ajouterFilm(film) {
        this.films.push(film);
    }

    afficherFilm() {
        return this.films;
    }
}


class Film {
    constructor(titre, dure, realisateur, categorie, pegi, stock, typeLocation) {
        this.titre = titre;
        this.dure = dure;
        this.realisateur = realisateur;
        this.categorie = categorie;
        this.pegi = pegi;
        this.stock = stock;
        this.acteurs = [];
        this.loueurs = [];
        this.typeLocation = typeLocation;

    }

    ajouterActeur(acteur) {
        this.acteurs.push(acteur);
    }

    toString() {
        return "</br>Titre : " + this.titre + "</br>Durée : " + this.dure + "h</br>Réalisateur : " + this.realisateur + "</br>Acteurs : " + this.acteurs +
            "</br> Catégorie : " + this.categorie + "</br> Pegi : " + this.pegi + "</br>En stock : " + this.stock; + "</br> Acteurs : " +
        this.acteurs.toString() + "</br> Loué par : " + this.loueurs.toString() + "</br> Disponible en : " + this.typeLocation;
    }

}

class Categorie {
    constructor(nomCategorie, description) {
        this.nomCategorie = nomCategorie;
        this.description = description;
        this.tabCategorie = [];
    }

    ajouterFilm(film) {
        this.tabCategorie.push(film);
    }
    afficherCategorie() {
        return this.tabCategorie;
    }

    afficherLength() {
        return this.tabCategorie.length;
    }
}

class Realisateur extends NomPrenom {
    constructor(nom, prenom) {
        super(nom, prenom);
        this.films = [];
    }
}

class Acteur extends NomPrenom {
    constructor(nom, prenom, sexe) {
        super(nom, prenom);
        this.sexe = sexe;
        this.films = [];
    }

    toString() {
        return "</br> Nom : " + this.nom + "</br> Prénom : " + this.prenom + "</br> Sexe : " + this.sexe;
    }
}


class Loueur extends NomPrenom {
    constructor(nom, prenom, pseudo, email, CB) {
        super(nom, prenom);
        this.pseudo = pseudo;
        this.email = email;
        this.CB = CB;
        this.films = [];
    }


}

class RechercherFilm {
    static main() {

        // Déclaration des catégories

        let western = new Categorie("Western", "ça trou le cul");
        let comique = new Categorie("Comique", "ça trou également le cul");

        // Déclaration des réalisateurs

        let realisateur1 = new Realisateur("Quentin", "Tarantino");

        // Déclaration des acteurs

        let acteur1 = new Acteur("Dude", "Dupont", "Homme");
        let acteur2 = new Acteur("Albert", "Dupontel", "Homme");

        // Déclaration des films

        let film1 = new Film("Django Unchained", 2.30, realisateur1, "Western", 18, 6);
        let film2 = new Film("Bernie", 1.30, realisateur1, "Comique", 18, 2);
        let film3 = new Film("SomeMovie", 2.30, realisateur1, "Comique", 18, 6);

        // Déclaration des loueurs

        let loueur1 = new Loueur("NClient", "PClient", "Hauswald", "dude@gmail.com", 987687)

        // Ajout des acteurs aux films

        film1.ajouterActeur(acteur2);
        film1.ajouterActeur(acteur1);

        // Ajout des films dans les catégories

        comique.ajouterFilm(film2);
        western.ajouterFilm(film1);
        comique.ajouterFilm(film3);

        // Ajout des films aux acteurs

        acteur1.ajouterFilm(film1);

        // Ajout des fils aux louers

        loueur1.ajouterFilm(film3);


        document.write(film1);
    }

}

RechercherFilm.main();
