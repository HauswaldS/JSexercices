function direBonjour(nom, prenom) {
    var message = "Bonjour, " + nom + " " + prenom;
    return message;
}

var prenom = prompt("Quel est votre nom ?");
var nom = prompt("Quel est votre prénom ?");
console.log(direBonjour(nom, prenom));