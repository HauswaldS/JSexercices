function autoCompletion(inputId) {
    let listePays = [
        "Afghanistan",
        "Afrique du Sud",
        "Albanie",
        "Algérie",
        "Allemagne",
        "Andorre",
        "Angola",
        "Anguilla",
        "Antarctique",
        "Antigua-et-Barbuda",
        "Antilles néerlandaises",
        "Arabie saoudite",
        "Argentine",
        "Arménie",
        "Aruba",
        "Australie",
        "Autriche",
        "Azerbaïdjan"
    ];
    let inputToComplete = document.getElementById(inputId);
    let paysSuggested = new Array();

    inputToComplete.addEventListener("input", function(e) {
        let inputValue = e.target.value;
        let regex = new RegExp(inputValue);
        let suggest = document.getElementById("suggestions");

        while (suggest.firstChild) {
            suggest.removeChild(suggest.firstChild);
        }

        for (let i = 0; i < listePays.length; i++) {
            if (regex.test(listePays[i])) {
                let paysToSuggest = document.createElement("p");
                paysToSuggest.innerHTML = listePays[i];
                suggest.appendChild(paysToSuggest);
                paysToSuggest.classList.add("suggestion");
                paysSuggested.push(paysToSuggest);
            }
        }
        if (paysSuggested.length > 0) {
            for (let i = 0; i < paysSuggested.length; i++) {
                paysSuggested[i].addEventListener("click", function() {
                    inputToComplete.value = paysSuggested[i].innerHTML;
                    while (suggest.firstChild) {
                        suggest.removeChild(suggest.firstChild);
                    }
                });
            }
        }
    });



}


autoCompletion("pays");
