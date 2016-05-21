function aire(rayon) {
    var carre = rayon * rayon;
    var resultat = Math.PI * carre;
    return resultat;
}

function perimetre(rayon) {
    var resultat = 2 * Math.PI * rayon;
    return resultat;
}

console.log(aire(5));
console.log(perimetre(5));