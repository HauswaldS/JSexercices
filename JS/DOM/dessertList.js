let dessertList = document.getElementById("desserts");
let addButton = document.getElementById("addDessert");
let delButton = document.getElementById("delDessert");

addButton.addEventListener("click", function(){
  let dessertToAdd = prompt("Quel dessert souhaitez vous ajouter ?");
  let dessertElement = document.createElement("li");
  dessertElement.textContent = dessertToAdd;
  dessertList.appendChild(dessertElement);
})

delButton.addEventListener("click", function(){
  let dessertToDel = parseInt(prompt("Quel dessert souhaitez-vous supprimer ?")-1);
  let dessert = document.querySelectorAll("#desserts > li");
  if (dessert.length > 0){
    dessertList.removeChild(dessert[dessertToDel]);
  }
})
