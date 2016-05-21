function multiplieAuCarre(nombre) {
    var resultat = nombre * nombre;
    return resultat;
}

for (i = 0 ; i <= 10 ; i++) {
   console.log(i + " au carré vaut : " + multiplieAuCarre(i));
}