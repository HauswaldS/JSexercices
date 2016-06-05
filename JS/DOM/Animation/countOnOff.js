function compteur() {
    let button = document.querySelector("button");
    let secDisplay = document.getElementById("secondes");
    let counter = 0;

    button.innerHTML = "ON";
    button.addEventListener("click", compter);

    function compter() {
        button.innerHTML = "OFF";
        button.removeEventListener("click", compter);
        button.addEventListener("click", stopCompter)

        function goCompter() {
            secDisplay.innerHTML = counter;
            counter++;
        }

        function stopCompter() {
            clearInterval(goCompterInterval);
            button.innerHTML = "ON";
            button.addEventListener("click", compter);
        }
        let goCompterInterval = setInterval(goCompter, 1000);
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
