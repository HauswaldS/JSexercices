function mdpCheck(){
  let mdp = document.querySelectorAll("input[type=password]");
  let mdp1 = mdp[0];
  let mdp2 = mdp[1];
  let warnColor = "red";
  let okColor = "green";
  let mdpHelper1 = document.getElementById("mdpHelper1");
  let mdpHelper2= document.getElementById("mdpHelper2");

  mdp1.addEventListener("input", function(){
    let mdp = this;
    let mdpValue = this.value;
    let mdpLength = mdpValue.length;
    let checkNumber = /[0-9]/;

    if(mdpLength < 6){
      mdp.style.color = warnColor;
      mdpHelper1.innerHTML = "Le mot de passe est trop court !";
      mdpHelper1.style.color = warnColor;
    }
    else if(!(checkNumber.test(mdpValue))){
      mdpHelper1.innerHTML = "Le mot de passe doit contenir un chiffre";
    }
    else{
      mdp.style.color = okColor;
      mdpHelper1.innerHTML = "Le mot de passe est bon !";
      mdpHelper1.style.color = okColor;
    }

  });

  mdp2.addEventListener("input", function(){
    if(mdp[0].value != mdp[1].value){
      mdp[1].style.color = warnColor;
      mdpHelper2.innerHTML ="Les mots de passe sont différents !";
      mdpHelper2.style.color = warnColor;
    }
    else{
      mdp[1].style.color = okColor;
      mdpHelper2.innerHTML ="Les mots de passe sont identiques !";
      mdpHelper2.style.color = okColor;
    }
  })

}
mdpCheck();
