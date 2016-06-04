function countLinks(tags){
  let tabLinksElts = document.querySelectorAll(tags);
  let tabLinksLength = tabLinksElts.length;
  let firstLink = tabLinksElts[0].getAttribute("href");
  let lastLink = tabLinksElts[tabLinksLength-1].getAttribute("href");
  return console.log("Il y'a " + tabLinksLength + " liens, le premier est " + firstLink + " Le dernier est : " + lastLink );
}

countLinks("li>a");
