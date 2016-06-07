function tabMinToMax() {
    let tab = [4, 8, 3, 2, 7, 1, 10,10, 63736, 678436, 6355, 4324, 24, 0];
    let tabToSort = [4, 8, 3, 2, 7, 1, 10,10, 63736, 678436, 6355, 4324, 24,0];
    let tabTriee = new Array();
    let max = 0;
    let maxIndex;

    while (tab.length > 0) {
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] > max) {
                max = tab[i];
                maxIndex = i;
            }
            else if(i === tab.length-1){
              tabTriee.unshift(max);
              tab.splice(maxIndex, 1);
            }
        }
        max = 0;
    }
    alert("Le tableau de base vaux : " + tabToSort + " Le nouveau tableau vaut : " + tabTriee);
}

tabMinToMax();
