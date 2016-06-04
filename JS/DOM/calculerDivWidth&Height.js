let contenuStyles = getComputedStyle(document.getElementById("contenu"));
let contenuHeight = contenuStyles.height;
let contenuWidth = contenuStyles.width;


let divInfos = document.getElementById("infos");

let titleInfo = document.createElement("h1");
titleInfo.textContent = " Information sur l'élement";
divInfos.appendChild(titleInfo);

let InfoListe = document.createElement("ul");

let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");

listItem1.textContent = "Largeur de l'élement : " + contenuWidth;
listItem2.textContent = "Hauteur de l'élement : " + contenuHeight;

InfoListe.appendChild(listItem1);
InfoListe.appendChild(listItem2);
divInfos.appendChild(InfoListe);
