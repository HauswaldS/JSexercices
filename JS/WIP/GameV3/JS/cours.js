"use strict"

// Déclaration de la classe Carte, qui sert à attribuer de multiples variable à chaque objet carte qui seront utiles par la suite.
class Carte {
    constructor(position, source) {
        this.position = position;
        this.source = source;
        this.status = false;
    }
}
// Déclaration de la classe CarteInteration, contenant le static main qui permet d'executer toutes les functions et d'intéragir avec les objets carte.
class CarteInteraction {
    static main() {
        /*******************VARIABLE GLOBALES START*******************/
        // imageTab est un tableau qui contient les 14 sources des images, 2 sources identiques pour la même image.
        let imageTab = ["images/ane.jpg", "images/chat.jpg", "images/chien.jpg", "images/lama.jpg", "images/lapins.jpg", "images/lionne.jpg",
            "images/ours.jpg", "images/ane.jpg", "images/chat.jpg", "images/chien.jpg", "images/lama.jpg", "images/lapins.jpg", "images/lionne.jpg",
            "images/ours.jpg"
        ];

        // divImageTab est un tableau qui contient tous les éléments <img> situé dans les <div>.
        let divImageTab = document.querySelectorAll("div > img");
        // divTab est un tableau qui contient tous les élements <div>
        let divTab = document.querySelectorAll("div");
        // tanLength set de référence pour la taille des boucles, qui vont majoritairement êtres effectuées sur les tableaux qui viennent d'être déclarés
        let tabLength = divImageTab.length;
        // cartTab est un tableau qui va contenir tous les objets carte
        let cardTab = new Array();
        // activeCard est un tableau qui va contenir les 2 cartes retournées que l'on va comparer
        let activeCard = new Array();
        // validCard est un tableau qui va contenir les cartes "validées" et qu'on ne peut plus retourner.
        let validCard = new Array();
        //gameScore est une variable qui va contenir le score du joueur pour une partie et servira pour déterminer THE BEST SCORE ! Palpitant, nan ?
        let gameScore = 0;
        //time est une variable qui fait le même travail que gameScore mais pour le temps de la partie.
        let time = 0;
        //counter est une variable qui sera incrémentée lors du lancement du chrono
        let counter = 0;
        // chronoToggle est une variable va servir à déterminer le status du chrono (on/off)
        let chronoToggle = false;
        // reset est une variable qui va permettre de déterminer quand le chrono doit être reset
        let reset = false;
        // bestScore est une variable qui va permettre de déterminer le meilleur score.
        let bestScore = undefined;
        // bestTime, même chose que bestScore mais pour le temps
        let bestTime = undefined;
        /*******************VARIABLE GLOBALE END*******************/

        // shuffleImgSrc est une fonction qui sert à mélanger les objets d'un tableau, je ne parle pas encore le robot, je ne saurais pas l'expliquer !

        function shuffleImgSrc(a) {
            let j, x, i;
            for (i = a.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        }

        // createCards() permet de créé des objects à partir de la class Carte avec comme "position" l'élément <img> du tableau [divImageTab] et comme "source" l'une des sources du tableau [imageTab]

        function createCards() {
            for (let i = 0; i < tabLength; i++) { //La boucle sert à créer autant d'object Carte que de tag <img> présents sur la page
                cardTab[i] = new Carte(divImageTab[i], imageTab[i]); //Créer des objects directement dans un tableau est le seul moyen que j'ai trouvé pour pouvoir automatiser la création d'objets et ensuite pouvoir intéragir sur eux.

            }
        }

        //addSrcToImg permet d'atttribuer aux <img> un src correspondant à la source de chacunes des objets Carte

        function addSrcToImg() {
            for (let i = 0; i < tabLength; i++) {
                divImageTab[i].src = cardTab[i].source;
            }
        }

        // addOnClickToDivs permet d'ajouter addEventListener à chacunes des divs et à leur attribuer une id, qui sera utiliser par la suite dans la function qui est appelée lors du click

        function addOnClickToDivs() {
            for (let i = 0; i < tabLength; i++) {
                divTab[i].id = i;
                divTab[i].addEventListener("click", event);
            }
        }

        // /!\*/!\*/!\*/!\*ça commence à devenir tordu à partir d'ici, je vais essayer de rendre ça digérable !*/!\*/!\*/!\*/!\

        // event est la function qui est appelée lors du click sur une des images

        function event() {
            let i = this.id; //On recupère l'id du bloc sur lequel le addEventListener a été appliqué
            let card = cardTab[i]; //On récupère l'un des objets Carte grâce à l'id du bloc
            let imgClass = card.position; // On récupère l'élèment <img> que possède l'objet Carte
            card.status = true; //Le status de l'objet Carte devient true
            gameScore++; //On ajoute 1 au score car un click a été enregistré
            if (card.status === true) { //Si l'objet Carte a le status true
                imgClass.classList.add("active") //On donne à l'<img> lié à la Carte la classe .active, qui permet de la révéler
                this.removeEventListener("click", event); //On enlève l'addEventListener sur la <div>
            }
            activeCard.push(card); //On place la Carte dans [activeCard]
            if (activeCard.length === 2) { //Si on possède 2 Cartes dans [activeCard]
                setTimeout(checkActiveCard, 200); //On lance la fonction checkActiveCard pour vérifier la similarité des Cartes
                //setTimeout sert à retarder le lancement de la fonction, pour laisser 200ms à l'utisateur pour voir la deuxième image cliquée en cas d'erreur
            }
        }

        // checkActiveCard permet de vérifier la validité des deux Cartes retournées

        function checkActiveCard() {
            let firstCard = activeCard[0]; //On récupère la première Carte
            let secondCard = activeCard[1]; //Puis la deuxième
            let parentDiv1 = firstCard.position.parentElement; //On récupère la <div> de l'<img> grâce à la position de l'objet Carte
            let parentDiv2 = secondCard.position.parentElement; //Puis la deuxième
            if (firstCard.source != secondCard.source) { //Si les sources des deux Cartes sont différentes
                firstCard.status = false; //Leur status devient false
                secondCard.status = false;
                firstCard.position.classList.remove("active"); //On leur retire la classe "active", elle sont donc (display:none)
                secondCard.position.classList.remove("active");
                parentDiv1.addEventListener("click", event); //On leur remet le addEventListener pour qu'elles soient à nouveau clickable
                parentDiv2.addEventListener("click", event);
                activeCard = new Array(); //[activeCard] est vidé,frais et dispo ! Pour recevoir deux nouvelles Cartes à comparer
            } else { //Si les Cartes ont des sources identiques identiques
                validCard.push(firstCard); //On envoi les deux Cartes dans [activeCard]
                validCard.push(secondCard);
                parentDiv1.removeEventListener("click", event); //On s'assure que les <div> ne sont plus clickables
                parentDiv2.removeEventListener("click", event);
                activeCard = new Array(); //On vide [activeCard] pour continuer les vérifications
                if (validCard.length === 14) { //Si toutes les Cartes se trouvent dans [validCard]
                    endGame(); //On va dans la fonction endGame
                }
            }
        }

        //btnEvent contient les addEventListener des deux bouttons resetBtn (Pour reset le jeu, NO WAY ?) et chronoBtn, vous avez compris !

        function btnEvent() {
            let resetBtn = document.getElementById("reset"); //On récupère le <button> qui va servir au reset
            let chronoBtn = document.getElementById("chrono"); //Et celui responsable pour le Chrono
            let chronoTime = document.getElementById("chronoTime"); //On récupère le <span> pour afficher le temps restant

            //Ajoute addEventListener au <button> situé dans la variable resetBtn

            resetBtn.addEventListener("click", function() { //Lorsqu'on clique sur le <button> reset
                resetCards(); //Envoie dans la fonction reset
            });

            //Ajoute addEventListener au <button> situé dans la variable chronoBtn

            chronoBtn.addEventListener("click", function() {
                if (activeCard.length === 0 && validCard.length === 0 && chronoToggle === false) { //Si les tableaux [activeCard], [validCard] sont vides (Donc qu'aucune partie est lancée) et que le Chrono n'est pas déjà lancé (false)
                    chronoBtn.classList.add("chronoOn"); //On ajoute la classe .chronoOn au <span> qui contient le logo sur chrono (color:red)
                    counter = 60; //On initialise le compter à 60
                    chronoToggle = true; //Le chrono est activé (true)
                    reset = false; //Permet de réinitialisé le status du reset après un reset
                    let chronoFunction = setInterval(function() { //chronoFunction est une variable qui contient une fonction qui se déclenche par interval d'1s (setTimeout)
                            if (counter === 0 || validCard.length === 14) { //Si le compter atteint 0 ou que toutes les Cartes on été validées (retournées)
                                chronoTime.innerHTML = ""; //On vide le contenu du <span> pour qu'il n'affiche plus le temps
                                chronoToggle = false; //Le chrono n'est plus actif (false)
                                chronoBtn.classList.remove("chronoOn"); //On retire la classe précèdement appliqué sur le <span> pour qu'il reprenne sa couleur normale
                                clearInterval(chronoFunction); //On supprime le setTimeout qui lance la fonction toutes les 1s (clearInterval)
                                endGame(); //On passe à la fonction endGame
                            } else if (reset === false) { //Si le reset n'a pas été lancé
                                counter--; //On décrémente le compteur de temps
                                chronoTime.innerHTML = counter + "s"; //On affiche le temps restant dans le <span>
                                time++; //On ajoute +1 à time pour pouvoir calculer le meilleur temps par la suite
                            } else if (chronoToggle === true) { //Pour éviter de rester bloquer dans le setIntervalde la fonction en cas de reset
                                chronoTime.innerHTML = ""; //On vide le <spans>
                                chronoToggle = false; //Le chrono devient inactif (false)
                                chronoBtn.classList.remove("chronoOn"); //On retire la classe .chronoOn du <span>
                                clearInterval(chronoFunction); //On sort du setTimeout (clearInterval)
                            }
                        }, 1000) // 1000ms => 1s
                }
            });
        }

        //endGame est une fonction qui permet d'afficher le message de fin de jeu. Elle est mal faite car pleine de duplication inutiles !

        function endGame() {
            let winMessage = document.getElementById("won"); //On récupère l'élément <div> qui contient le message pour les gagnants
            let lostMessage = document.getElementById("lost"); //La même chose pour les loosers !
            let scoreWon = document.getElementById("scoreWon"); //On récupère l'élèment <span> situé dans la <div> qui va permettre de recevoir le score des gagnants
            let scoreLost = document.getElementById("scoreLost"); //Et celui des loosers

            if (validCard.length === 14) { //Si les 14 Cartes ont été découvertes
                winMessage.classList.add("youwon"); //Ajoute la classe .youwon à la <div>  (display:block)
                scoreWon.innerHTML = gameScore;//On affiche le score de la partie dans le <span>
                setBestScore();//On va dans la fonction setBestScore pour déterminer si le score de la partie mérite d'être le meilleur !
            } else if (counter === 0) {//Si le compteur atteint 0 c'est que vous êtes vraiment mauvais !
                lostMessage.classList.add("youlost");//Une <div> va vous expliquer à quel point vous l'êtes
                scoreLost.innerHTML = gameScore;//Et votre score minable s'affichera
            }
        }

        //La fonction resetCards permet de ré-intialiser le jeu

        function resetCards() {
            reset = true;//Le reset est actit (true)
            shuffleImgSrc(imageTab);//On mélange [imageTab] pour mélanger les sources
            gameScore = 0;//Le score du jeu est remis à 0
            cardTab = new Array();//On vide tous les tableaux pour qu'ils accueillent les nouvelles Cartes
            activeCard = new Array();
            validCard = new Array();
            createCards();//On re-créé les objets Carte
            addSrcToImg();//On ajoute les nouvelles sources aux <img>
            addOnClickToDivs();//On réinitialise les addEventListener des <div> qui contiennent les <img>
            btnEvent();//On réinitialise les bouttons
            for (let i = 0; i < tabLength; i++) {//On retire la classe .active de toutes les <img> pour qu'elles se retournent
                divImageTab[i].classList.remove("active");
            }
            if (document.getElementById("won").className === "youwon") {//Si le message de win est affiché
                document.getElementById("won").classList.remove("youwon");//On le retire
            } else if (document.getElementById("lost").className === "youlost") {//Même chose pour les loosers, deux conditions inutiles encore ici !Une aurait été suffisante si j'avais bien codé la fonction endGame
                document.getElementById("lost").classList.remove("youlost");
            }
        }

        //setBestScore sert à déterminer si le score de la partie & le chrono, sont les meilleurs

        function setBestScore() {
            let scoreToSet = document.getElementById("maxScore");//On récupère le <span> qui va accueillir le meilleur score
            let timeToSet = document.getElementById("bestTime");//Même chose pour le <span> du chrono

            if (gameScore < bestScore || bestScore === undefined) {//Si le score de la partie est inférieur au meilleur score, ou si le meilleur score n'a pas encore été défini
                bestScore = gameScore;//Le meilleur score contient maintenant le score de la partie
                scoreToSet.innerHTML = bestScore;//On affiche fièrement le meilleur score !
            }
            if (bestTime > time || bestTime === undefined) {//Même chose que pour le score, mais pour le chrono
                bestTime = time;
                timeToSet.innerHTML = bestTime + "s";
            }
        }

        //On initialise le jeu pour la première fois en lançant toutes les fonctions dans l'ordre
        shuffleImgSrc(imageTab);
        createCards();
        addSrcToImg();
        addOnClickToDivs();
        btnEvent();
    }
}



CarteInteraction.main();//Launch the best game ever. GOTY 2016 for sure.







//
// function addImgToDiv() {
//     let imageTab = ["images/ane.jpg", "images/chat.jpg", "images/chien.jpg", "images/lama.jpg", "images/lapins.jpg", "images/lionne.jpg",
//         "images/ours.jpg", "images/ane.jpg", "images/chat.jpg", "images/chien.jpg", "images/lama.jpg", "images/lapins.jpg", "images/lionne.jpg",
//         "images/ours.jpg"
//     ];
//
//     let divImageTab = document.querySelectorAll("div > img");
//     let divTab = document.querySelectorAll("div");
//     let tabLength = divImageTab.length;
//     let tabActive = new Array();
//     let imageActiveTab = new Array();
//
//
//     function shuffle(a) {
//         let j, x, i;
//         for (i = a.length; i; i -= 1) {
//             j = Math.floor(Math.random() * i);
//             x = a[i - 1];
//             a[i - 1] = a[j];
//             a[j] = x;
//         }
//     }
//
//     function addImg() {
//         shuffle(imageTab);
//         for (let i = 0; i < tabLength; i++) {
//             divImageTab[i].src = imageTab[i];
//             divTab[i].addEventListener("click", function() {
//
//                 let imageClass = divImageTab.className;
//
//                 if (tabActive.length === 2 ) {
//                     let firstImage = tabActive[0];
//                     let secondeImage = tabActive[1];
//                     if (firstImage.src != secondeImage.src) {
//                         firstImage.classList.remove("active");
//                         secondeImage.classList.remove("active");
//                         console.log(tabActive.length)
//                         tabActive = new Array();
//                     } else {
//                       console.log("Log before :"+tabActive.length);
//                         tabActive = new Array();
//                         console.log("Log after : "+tabActive.length);
//
//                     }
//                 } else if (imageClass === undefined) {
//                     let imageActiveTabLength = imageActiveTab.length;
//
//                     divImageTab[i].classList.add("active");
//                     tabActive.push(divImageTab[i]);
//                     if (imageActiveTabLength > 12) {
//                         let winDiv = document.getElementById("won");
//                         winDiv.classList.add("youwon");
//                     } else {
//                         for (let i = 0; i < tabLength; i++) {
//                             if (divImageTab[i].className === "active") {
//                                 imageActiveTab.push(divImageTab[i]);
//                             }
//                         }
//                          if (imageActiveTabLength < 12 && imageActiveTabLength > 0) {
//                             imageActiveTab = new Array();
//                         }
//                     }
//                 }
//             });
//         }
//     }
//
//     addImg();
// }
//
//
// function buttonEvent() {
//     let resetBtn = document.getElementById("reset");
//     resetBtn.addEventListener("click", function() {
//         location.reload();
//           })
// }
//
//
//
// addImgToDiv();
// buttonEvent();
