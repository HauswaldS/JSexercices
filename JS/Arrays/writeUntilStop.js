"use strict";
var tableauString = [];
tableauString.push(prompt("Entre un mot : "));

for (var i = 0; i < tableauString.length; i++) {
    if (tableauString[i] === "stop") {
        for (var i = 0; i < tableauString.length; i++) {
            console.log(tableauString[i]);
        }
    } else {
        tableauString.push(prompt("Entre un mot : "));
    }
}