var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
div = document.getElementById("contenu");

link1 = document.createElement("a");
link1.href = journaux[0];
link1.textContent = journaux[0];

link2 = document.createElement("a");
link2.href = journaux[1];
link2.textContent = journaux[1];

link3 = document.createElement("a");
link3.href = journaux[2];
link3.textContent = journaux[2];


div.appendChild(link1);
div.appendChild(link2);
div.appendChild(link3);
