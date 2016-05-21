/* decomposer nombre */
function decomposer(nb) {
    var compo = new Array(); /* creation tableau de composition*/
    for (var i = nb; i >= 0; i--) {
        /* faire modulo du nombre par lui-même jusque 0 */
        if (nb % i == 0) {
            compo.push(i);
            /* ajouter resultat dans tableau */
        };
    };
    console.log(compo);
    return compo;
}; /* appliquer la fonction aux nombres saisis par l'utilisateur */

function arrayPGCD() {
    var nbP1 = decomposer(Number(prompt("Nbre 1")));
    var nbP2 = decomposer(Number(prompt("Nbre 2")));

    var NBP = new Array();

    for (n1 = 0; n1 < nbP1.length; n1++) {
        for (n2 = 0; n2 < nbP2.length; n2++) {
            if (nbP1[n1] == nbP2[n2]) {
                NBP.push(nbP1[n1]);
            }
        }
    }
    var res = NBP.reduce(function (a, b) {
        return Math.max(a, b);
    });
    console.log(res);
};