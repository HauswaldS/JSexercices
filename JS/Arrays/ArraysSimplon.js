var tableau1 = new Array(1, 2, 3, 4);
var tableau2 = new Array("Axel", "Marie", "Julien", "Anthony", "Abdou");
var tableau3 = new Array("Coffee", "Tea", "Weed", 156, 679, 54, 89, 90);
var tableau4 = new Array("Framboise", 156, "Pomme", 78, "Poire", 567, "Banane", 876, "Clementine", 7865, "Fraise");
var vehicules = [
    ['Porsche', 'Bleu', 50000, 2013],
    ['BMW', 'Noire', 100000, 2000],
    ['Fiat', 'Rouge', 15000, 1998]
];

console.log(tableau4[1]);
console.log(tableau4[7]);
console.log(tableau4[10]);
console.log(tableau4[9]);
console.log(tableau4[0]);

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 0; i < tableau4.length; i++) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 0; i < 3; i++) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 6; i < 10; i++) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 1; i < 9; i++) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 1; i < 9; i++) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 2; i < 8; i++) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 0; i < 10; i = i + 2) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("BRRRRRRRREEEEEAK LINE");

for (i = 1; i < 10; i = i + 2) {
    console.log("Item : " + i + "  " + tableau4[i]);
}

console.log("CAAAAAAAR TIME !");

for (i = 0; i < vehicules.length; i++) {
    for (j = 0; j < vehicules[i].length; j++) {
        console.log(vehicules[i][j]);
    }
}

console.log("CAAAAAAAR TIME !");

for (i = 0; i < vehicules.length; i++) {
    console.log(vehicules[i][2] + "€");
}

console.log("CAAAAAAAR TIME !");

for (i = 0; i < vehicules.length; i++) {
    console.log(vehicules[i][0]);
    console.log(vehicules[i][2] + "€");
}

console.log("CAAAAAAAR TIME !");

vehicules.push(["Suzuki", "Verte", 1000, 1980]);

for (i = 0; i < vehicules.length; i++) {
    for (j = 0; j < vehicules[i].length; j++) {
        console.log(vehicules[i][j]);
    }
}

console.log("CAAAAAAAR TIME !");

vehicules[0][2] = "";
vehicules[2][0] = "";

for (i = 0; i < vehicules.length; i++) {
    for (j = 0; j < vehicules[i].length; j++) {
        console.log(vehicules[i][j]);
    }
}

alert(vehicules[0][0][1]);