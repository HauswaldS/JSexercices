let buttonGo = document.getElementById("clic");
let buttonStop = document.getElementById("desactiver");
let compteurClick = document.getElementById("compteurClics");
let compteur = 0;

function countClicks(){
  compteur++;
  compteurClick.textContent = compteur;
}

function stopClicks(){
  buttonGo.removeEventListener("click", countClicks);
}

buttonGo.addEventListener("click", countClicks);
buttonStop.addEventListener("click", stopClicks);
