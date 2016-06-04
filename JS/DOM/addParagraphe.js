let paragraphe = document.createElement("p");
paragraphe.id = "texte";
paragraphe.insertAdjacentHTML("afterBegin", 'En voice une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation.">liste</a> plus complète.');
document.getElementById("contenu").appendChild(paragraphe);
