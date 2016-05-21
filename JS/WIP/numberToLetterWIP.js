while(userInput = prompt("Nombre entre 0 et 999 : ")) {
       alert(numberIntoText(parseInt(userInput, 10)));
}

function numberIntoText(number) {
    
    if (isNaN(number) == true || number > 999 || number < 0) {
        return "Vous devez entrer un NOMBRE entre 0 et 999."
    }
    
    var unite = number % 10;
    var dizaine = ((number % 100) - unite)/10;
    var centaine =(number % 100 - number % 100)/100;
    
    var uniteText = ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
    var dizaine2Text = ['','dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt'];
    var unite2Text, dizaine2Text, centaine2Text;
    
    if (number == 0) {
        return "zeros";
    }
    
    else {
        unite2Text = if(unit == 1 && unit > 0 && unit != 8 ){"et-"}else{""} + unite2Text[unite];
        
        dizaine2Text = if()
        
    }
    
    
    
    alert("Centaine : " + centaine + " Dizaines : "+ dizaine+" Unites : "+unite);
    alert("Unite : "+unite2Text );
}