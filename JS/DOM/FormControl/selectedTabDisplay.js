Cfunction showWhom(){
  var maisons = [
      {
          code: "ST",
          nom: "Stark"
      },
      {
          code: "LA",
          nom: "Lannister"
      },
      {
          code: "BA",
          nom: "Baratheon"
      },
      {
          code: "TA",
          nom: "Targaryen"
      }
  ];
  var selecteur = document.getElementById("maison");


  function addToSelect(){
    var tabLength = maisons.length;

    for(let i = 0; i<tabLength; i++){
      let maisonToAdd = document.createElement("option");
      maisonToAdd.value = maisons[i].code;
      maisonToAdd.innerHTML = maisons[i].nom;
      selecteur.appendChild(maisonToAdd);
    }
  }

  function showPersonnages(){
    let personnageList = document.getElementById("persos");
    selecteur.addEventListener("change", function(valeur){
      let selecteurValue = valeur.target.value;
      let personnageTab = getPersonnages(selecteurValue);
      while(personnageList.firstChild){
        personnageList.removeChild(personnageList.firstChild);
      }
      for(let i =0; i<personnageTab.length; i++){
        let nomContainer = document.createElement("li");
        nomContainer.innerHTML = personnageTab[i];
        personnageList.appendChild(nomContainer);
      }

    });
  }

  function getPersonnages(codeMaison) {
      switch (codeMaison) {
      case "ST":
          return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
          return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
          return ["Robert", "Stannis", "Renly"];
      case "TA":
          return ["Aerys", "Daenerys", "Viserys"];
      default:
          return [];
      }
  }

addToSelect();
showPersonnages();

}

showWhom();
