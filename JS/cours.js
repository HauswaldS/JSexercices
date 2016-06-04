function compteur() {
    let buttonSelector = document.querySelector("button");
    let secAffichage = document.getElementById("secondes");
    let secondes = 0;
    buttonSelector.innerHTML = "ON";

    buttonSelector.addEventListener("click", count);

    function count() {
        let compteurInterval = setInterval(function() {
            if (buttonSelector.innerHTML === "ON") {
                secondes++;
                secAffichage.innerHTML = secondes;
            }
            else{
              clearInterval(compteurInterval);
              buttonSelector.innerHTML === "ON"
            }
        }, 1000);
        buttonSelector.removeEventListener("click", count);
        buttonSelector.addEventListener("click", clearIntervals);
    }



    function clearIntervals() {
      buttonSelector.removeEventListener("click", clearIntervals);
        buttonSelector.addEventListener("click", count);
        buttonSelector.innerHTML = "OFF"
    }



}

compteur();




// let cadre = document.getElementById("cadre");
// let cadreWidth = parseFloat(getComputedStyle(cadre).width);
// let box = document.getElementById("bloc");
// let boxWidth = parseFloat(getComputedStyle(box).width);
// let speed = 7;
// let animationOn = null;
//
// function moveBlock() {
//   let boxLeft = parseFloat(getComputedStyle(box).left);
//   let end = null
//
//   if(boxLeft+boxWidth <= cadreWidth && (end === false || end === null)){
//     box.style.left = (boxLeft + speed)+"px";
//     animationOn = requestAnimationFrame(moveBlock);
//     end = true;
//   }
//   else if (end === true){
//     box.style.left = (boxLeft - speed)+"px";
//     animationOn = requestAnimationFrame(moveBlock);
//     end=false;
//   }
// }
//
// moveBlock();
