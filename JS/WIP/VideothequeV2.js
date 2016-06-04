class NPFilms {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.films = new Array();
    }

    afficherFilm() {
        return this.films;
    }

    ajouterFilm(film) {
        this.film.push(film);
        console.log(film + " a bien été ajouté.")
    }
}

class Categorie {
    constructor(categorie, description) {
        this.categorie = categorie;
        this.description = description;
        this.films = [];
    }

    afficherCatFilm() {
        let catFilm = new Array();
        for (let i = 0; i < this.films.length; i++) {
            "</br>" + catFilm.push(this.films[i].titre)
        }
        return "Les films de la catégorie " + this.categorie + " sont : " + catFilm;

    }

    ajouterFilmToCat(film) {
        this.films.push(film);
    }
}
class Film {ttk, categorie) {
        this.titre = titre;
        this.dure = dure;
        this.stock = stock;
        this.categorie = categorie;
    }

    toString() {
    return "<h1>Titre : " + this.titre + "</h1><h2>Durée : " + this.dure + "</br>Stock : " + this.stock.stockTT + "</br><hr>";
}
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    toString() {
        return "</br>Type de location: " + this.type;
    }
}

class Stock {
    constructor(quantite, type) {
        this.quantite = quantite;
        this.type = type;
    }

    toString() {
        return this.type + " Quantité : " + this.quantite;
    }
}

class TotalStock {
    constructor() {
        this.stockTT = new Array();
    }
    ajouterTypeStock(stock) {
        this.stockTT.push(stock);
    }

    afficherStock() {
        return this.stockTT;
    }

    calculerTotal() {
        let tt = 0;
        for (let i = 0; i < this.stockTT.length; i++) {
            tt = this.stockTT[i].quantite + tt;
        }
        return tt;
    }

}

class Client extends NPFilms {
    constructor(nom, prenom, id) {
        super(nom, prenom);
        this.id = id;
    }

    louerFilm(film, type) {
        let BR = film.stock.stockTT[0].quantite;
        let DVD = film.stock.stockTT[1].quantite;
        let VHS = film.stock.stockTT[2].quantite;

        if (type == "BR" && BR > 0) {
            this.films.push(film);
            film.stock.stockTT[0].quantite -= 1;

        } else if (type == "DVD" && DVD > 0) {
            this.films.push(film);
            film.stock.stockTT[1].quantite -= 1;

        } else if (type == "VHS" && VHS > 0) {
            this.films.push(film);
            film.stock.stockTT[2].quantite -= 1;

        } else {
            return film.titre + " n'est pas disponible en " + type;
        }

        return "Vous avez bien loué " + film.titre + " en " + type;
    }
}

class Acteur extends NPFilms {
    constructor(nom, prenom) {
        super(nom, prenom);
    }
}

class Realisateur extends NPFilms {
    constructor(nom, prenom) {
        super(nom, prenom);
    }
}

class Videotheque {
    static main() {

        // Déclaration des types de locations

        let br = new TypeLocation(1, "Blu ray");
        let dvd = new TypeLocation(2, "DVD");
        let vhs = new TypeLocation(3, "VHS");

        // Déclaration des types et quantité de location

        let film1BR = new Stock(4, br);
        let film1DVD = new Stock(6, dvd);
        let film1VHS = new Stock(2, vhs);

        let film2BR = new Stock(1, br);
        let film2DVD = new Stock(2, dvd);
        let film2VHS = new Stock(9, vhs);

        let film3BR = new Stock(9, br);
        let film3DVD = new Stock(2, dvd);
        let film3VHS = new Stock(0, vhs);

        // Déclaration des stocks totaux

        let film1TTS = new TotalStock;
        let film2TTS = new TotalStock;
        let film3TTS = new TotalStock;

        // Ajout des types et quantité de location à un array dédié au film spécifié

        film1TTS.ajouterTypeStock(film1BR);
        film1TTS.ajouterTypeStock(film1DVD);
        film1TTS.ajouterTypeStock(film1VHS);

        film2TTS.ajouterTypeStock(film2BR);
        film2TTS.ajouterTypeStock(film2DVD);
        film2TTS.ajouterTypeStock(film2VHS);

        film3TTS.ajouterTypeStock(film3BR);
        film3TTS.ajouterTypeStock(film3DVD);
        film3TTS.ajouterTypeStock(film3VHS);

        // Déclaration des catégories

        let comique = new Categorie("Comique", "On se fend la gueule !");
        let scifi = new Categorie("Science-Fiction", "On se prend la tête");

        // Déclaration des films

        let film1 = new Film("Bernie", "2H30", film1TTS, comique);
        let film2 = new Film("Diner de con", "1H30", film2TTS, comique);
        let film3 = new Film("Star Wars 5", "8h23", film3TTS, scifi)

        // Déclaration des clients

        let client1 = new Client("Dude", "Dupont", 1);

        // Ajout des films dans les catégories

        comique.ajouterFilmToCat(film1);
        comique.ajouterFilmToCat(film2);
        scifi.ajouterFilmToCat(film3);

        // Le client loue un film

        document.write(client1.louerFilm(film1, "DVD"));

        // Affiche les films loués par le client

        document.write(client1.afficherFilm());

        // Affiche les films présents dans les catégories

        document.write(comique.afficherCatFilm());
        document.write(scifi.afficherCatFilm());
    }
}


Videotheque.main();
