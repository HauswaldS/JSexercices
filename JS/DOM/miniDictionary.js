var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

function addDefinition(terme, def){
  let div = document.getElementById("contenu");

  let defini = document.createElement("dl");
  div.appendChild(defini);

  let definitionTitle = document.createElement("dt");
  let strong = document.createElement("strong");
  strong.textContent = terme;
  defini.appendChild(definitionTitle);
  definitionTitle.appendChild(strong);


  let definitionBody = document.createElement("dd");
  definitionBody.textContent = def;
  defini.appendChild(definitionBody);

}

addDefinition(mots[0].terme, mots[0].definition);
addDefinition(mots[1].terme, mots[1].definition);
addDefinition(mots[2].terme, mots[2].definition);

console.log(mots[0].definition);
