  "use strict"

  class Carte {
      constructor(id, image, partieEnCours) {
          this.id = id;
          this.image = image;
          this.partieEnCours = partieEnCours;
          this.retournee = false;
          this.valide = false;
      }

      static RetournerCarte() {
          let partieEnCours = this.value;
          let carteTab = this.value.carteTab;
          let carteActive = this.value.carteActive;
          let imagesElementTab = this.value.imagesElementTab;
          partieEnCours.score++;
          let carte1;
          let img1;
          carteTab[this.id].retournee = true;
          carteActive.push(carteTab[this.id]);
          this.style.opacity = "1";
          console.log(imagesElementTab[0].value);
          console.log(imagesElementTab[0].value.chronoToggle);
          if (imagesElementTab[0].value.chronoToggle === false) {
              imagesElementTab[0].value.launchChrono(imagesElementTab[0].value);
              partieEnCours.endMessageDiv.classList.remove("youwon");
              partieEnCours.endMessageDiv.classList.remove("youlost");
          }
          if (carteActive.length === 1) {
              carteTab[this.id].valide = carteTab[this.id];
              imagesElementTab[this.id].removeEventListener("click", Carte.RetournerCarte);
          } else if (carteActive.length === 2) {
              for (let i = 0; i < carteTab.length; i++) {
                  if (carteTab[i].valide !== false && carteTab[i].valide !== true) {
                      carte1 = carteTab[i];
                      img1 = carte1.id;
                  }
              }
              let carte2 = carteTab[this.id];
              let img2 = this;
              for (let i = 0; i < carteTab.length; i++) {
                  if (imagesElementTab[i].id == img1) {
                      img1 = imagesElementTab[i];
                  }
              }

              setTimeout(checkImages, 300);

              function checkImages() {
                  if (img1.src === img2.src) {
                      carte1.valide = true;
                      carte2.valide = true;
                      carte1.partieEnCours.carteValide.push(carte1);
                      carte1.partieEnCours.carteValide.push(carte2);
                      img1.removeEventListener("click", Carte.RetournerCarte);
                      img2.removeEventListener("click", Carte.RetournerCarte);
                  } else {
                      carte1.valide = false;
                      carte2.valide = false;
                      img1.style.opacity = "0";
                      img2.style.opacity = "0";
                      img1.addEventListener("click", Carte.RetournerCarte);
                      img2.addEventListener("click", Carte.RetournerCarte);
                  }
                  carte1.partieEnCours.carteActive = new Array();
              }
          }
      }
  }

  class Partie {
      constructor() {
          this.id = null;
          this.imagesTab = null;
          this.carteTab = new Array();
          this.carteActive = new Array();
          this.carteValide = new Array();
          this.imagesElementTab = document.querySelectorAll("#container > div > img");
          this.status = false;
          this.score = null;
          this.chronoTime = null;
          this.chronoToggle = false;
          this.endMessageDiv = document.querySelector("#container > aside");
      }

      initialiser(partieEnCours) {
          shuffle(this.imagesTab);
          for (let i = 0; i < this.imagesTab.length; i++) {
              this.carteTab.push(new Carte(i, this.imagesTab[i], partieEnCours));
              this.imagesElementTab[i].src = "images/" + this.carteTab[i].image + ".jpg";
              this.imagesElementTab[i].id = i;
              this.imagesElementTab[i].value = partieEnCours;
              this.imagesElementTab[i].addEventListener("click", Carte.RetournerCarte);
          }

          function shuffle(a) {
              let j, x, i;
              for (i = a.length; i; i -= 1) {
                  j = Math.floor(Math.random() * i);
                  x = a[i - 1];
                  a[i - 1] = a[j];
                  a[j] = x;
              }
          }
      }

      resetPartie(chronoTime) {
        console.log(chronoTime);
          if (chronoTime === 0 && this.carteValide.length < 14) {
              this.endMessageDiv.classList.add("youlost");
              this.endMessageDiv.innerHTML = "Damn you lost ! With " + this.score + " clicks ! You suck balls !"
          } else {
              this.endMessageDiv.classList.add("youwon");
              this.endMessageDiv.innerHTML = "Damn you won ! In " + this.score + "  cliks and " + this.chronoTime + " seconds !";
              this.determinerBestScoreEtChrono();
          }
          for (let i = 0; i < this.imagesElementTab.length; i++) {
              this.imagesElementTab[i].style.opacity = "0";
              this.carteTab[i].valide = false;
          }

          JeuEnCours1.main();
      }

      determinerBestScoreEtChrono() {
          let score = document.getElementById("maxScore");
          let chronoHtml = document.getElementById("bestTime");
          if (this.score < JeuEnCours1.bestScore || JeuEnCours1.bestScore === null) {
              JeuEnCours1.bestScore = this.score;
          }
          if (this.chronoTime < JeuEnCours1.bestChrono || JeuEnCours1.bestChrono === null) {
              JeuEnCours1.bestChrono = this.chronoTime;
          }
          score.innerHTML = JeuEnCours1.bestScore;
          chronoHtml.innerHTML = JeuEnCours1.bestChrono + "s";
      }


      launchChrono(partieEnCours) {
          this.chronoToggle = true;
          let counter = 45;
          let chronoHtml = document.getElementById("chronoTimeDisplay");
          let chrono = setInterval(function() {
              if (partieEnCours.carteValide.length === 14) {
                  partieEnCours.chronoToggle = false;
                  partieEnCours.chronoTime = 45 - counter;
                  clearInterval(chrono);
                  partieEnCours.resetPartie(this.chronoTime);
              } else if (counter > 0) {
                  counter--;
                  this.chronoTime = counter;
                  console.log(this.chronoTime);
                  chronoHtml.innerHTML = counter + "s";
              } else {
                  this.chronoToggle = false;
                  clearInterval(chrono);
                  partieEnCours.resetPartie(this.chronoTime);
              }
          }, 1000);
      }
  }

  class JeuEnCours {
      constructor() {
          this.tabImg = ["ane", "chat", "chien", "lama", "lionne", "lapins", "ours", "ane", "chat", "chien", "lama", "lionne", "lapins", "ours"];
          this.parties = new Array();
          this.partieEnCours = null;
          this.bestScore = null;
          this.bestChrono = null;
      }
      main() {
          JeuEnCours1.initialisation();
      }
      initialisation() {
          if (this.parties.length === 0) {
              this.parties[0] = new Partie();
              this.parties[0].id = 0;
          } else {
              this.parties.push(new Partie());
              this.parties[this.parties.length - 1].id = this.parties.length - 1;
          }
          this.partieEnCours = this.parties[this.parties.length - 1];
          this.partieEnCours.imagesTab = this.tabImg;
          this.partieEnCours.initialiser(this.partieEnCours);
      }

  }

  let JeuEnCours1 = new JeuEnCours();
  JeuEnCours1.main();
