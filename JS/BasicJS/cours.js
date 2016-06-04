"use strict"

function addImgToDiv() {
    let imageTab = ["images/ane.jpg", "images/chat.jpg", "images/chien.jpg", "images/lama.jpg", "images/lapins.jpg", "images/lionne.jpg",
        "images/ours.jpg", "images/ane.jpg", "images/chat.jpg", "images/chien.jpg", "images/lama.jpg", "images/lapins.jpg", "images/lionne.jpg",
        "images/ours.jpg"
    ];

    let divImageTab = document.querySelectorAll("div > img");
    let divTab = document.querySelectorAll("div");
    let tabLength = divImageTab.length;
    let tabActive = new Array();

    function shuffle(a) {
        let j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    function addImg() {
        shuffle(imageTab);
        for (let i = 0; i < tabLength; i++) {
            divImageTab[i].src = imageTab[i];
            divTab[i].addEventListener("click", function() {

                let imageClass = divImageTab.className;

                if (tabActive.length > 1) {
                    let firstImage = tabActive[0];
                    let secondeImage = tabActive[1];
                    if (firstImage.src != secondeImage.src) {
                      firstImage.classList.remove("active");
                      secondeImage.classList.remove("active");
                      tabActive = new Array();
                    }
                    else {
                      tabActive = new Array();
                    }
                  } else if (imageClass === undefined) {
                        divImageTab[i].classList.add("active");
                        tabActive.push(divImageTab[i]);
                        console.log(tabActive)
                    }
                });
            }
        }

    addImg();
}


function buttonEvent() {
    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", function() {
        location.reload();
    })
}



addImgToDiv();
buttonEvent();
