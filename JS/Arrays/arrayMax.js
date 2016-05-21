var valeurs = [7, 3, 7, 2, 9, 10];
a = valeurs[1];


for (i = 0; i < valeurs.length; i++) {
    if (a >= valeurs[i]) {
        a = valeurs[i];
    }
}

alert(a);