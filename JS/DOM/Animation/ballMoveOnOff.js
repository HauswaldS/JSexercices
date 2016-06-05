let demarrer = document.getElementById("demarrer");
let arreter = document.getElementById("arreter");

let cadre = document.getElementById("cadre");
let cadreWidth = parseFloat(getComputedStyle(cadre).width);

let ballon = document.getElementById("ballon");
let ballonWidth = parseFloat(getComputedStyle(ballon).width);
let speed = 10;
let back = false;
let cancelAnimation = false;
let ballonPosition;

demarrer.addEventListener("click", moveBallon);
arreter.addEventListener("click", stopBallon);

function moveBallon() {
    this.disabled = true;
    let ballonX = parseFloat(getComputedStyle(ballon).left);

    if (cancelAnimation === true) {
        cancelAnimation = false;
        cancelAnimationFrame(moveBallon);
    } else if (ballonX < cadreWidth && back === false) {
        arreter.disabled = false;
        ballon.style.left = (ballonX + speed) + "px";
        requestAnimationFrame(moveBallon);
    } else {
        back = true;
        if (ballonX > 0) {
            ballon.style.left = (ballonX - speed) + "px";
            requestAnimationFrame(moveBallon);
            arreter.disabled = false;
        } else {
            ballonX += 4;
            back = false;
            requestAnimationFrame(moveBallon);
        }
    }
}

function stopBallon() {
    this.disabled = true;
    demarrer.disabled = false;
    cancelAnimation = true;
}
