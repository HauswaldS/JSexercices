let div = document.getElementsByTagName("div");

function applyStyles(bgColor, textColor){
  for (let i =0; i<div.length; i++){
    div[i].style.backgroundColor = bgColor;
    div[i].style.color = textColor;
  }
}

document.addEventListener("keypress", function(e) {
    let event = String.fromCharCode(e.charCode);

    switch(event){
      case "b":
        applyStyles("black", "blue");
        break;
        case "r":
        applyStyles("red", "black");
        break;
        case "v":
        applyStyles("green", "purple");
        break;
    }
});
