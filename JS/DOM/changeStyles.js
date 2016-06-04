function changeStyles(){
  let divTextColor = prompt("Div text color : ");
  let divBgColor = prompt("Div background color : ");
  let titleSize = prompt("Title size : ");

  div = document.getElementsByTagName("div");
  for (let i = 0; i<div.length; i++){
    div[i].style.color = divTextColor;
    div[i].style.backgroundColor = divBgColor;
  }

  title = document.getElementsByTagName("h1");
  for (let i=0; i<title.length; i++){
    title[i].style.fontSize = titleSize;
  }
}

changeStyles();
