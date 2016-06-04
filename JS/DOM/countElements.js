function compterLesElements(tags){
    let eltsTab = document.querySelectorAll(tags);
    return eltsTab.length;
}

console.log(compterLesElements("p"));
console.log(compterLesElements(".adjectif"));
console.log(compterLesElements("p .adjectif"));
console.log(compterLesElements("p > .adjectif"));
