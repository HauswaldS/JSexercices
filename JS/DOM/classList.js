function own(id, classe){
  if (document.getElementById(id).classList.contains(classe)){
    return true;
  }
  else {
    return false;
  }
}

console.log(document.getElementById("saxophone").classList.contains("bois"));

own("saxophone", "bois"); // Doit afficher true
own("saxophone", "cuivre"); // Doit afficher false
own("trompette", "cuivre"); // Doit afficher true
own("contrebasse", "cordes"); // Doit afficher une own
