var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon: r,
    
    perimetre: function(){
        return Math.PI * (this.rayon*this.rayon);
    },  
    
    aire: function(){
        return 2 * Math.PI * this.rayon;
    },
}

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());