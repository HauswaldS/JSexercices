var mousquetaires = ["Athos", "Porthos", "Aramis"];

for (i = 0; i < mousquetaires.length; i++) {
    document.write("</br>" + i);
    document.write(mousquetaires[i]);
}

mousquetaires.push("d'Artagnan");

for (i = 0; i < mousquetaires.length; i++) {
    document.write("</br>" + i);
    document.write(mousquetaires[i]);
}