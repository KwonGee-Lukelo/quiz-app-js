const section = document.querySelector(".section");
const btnRun = document.querySelector(".btn__run");

btnRun.addEventListener("click", RunApp);

function RunApp() {
  section.textContent = "";

  const bloc1 = document.createElement("div");
  const paraBloc1 = document.createElement("p");

  //Tableau aux questions
  const questions = [
    "Etablissez la différence entre la surdéfinition et la redéfinition de la méthode",
    "Dans la Programmation Orientée Objet quelle est l'importance de la signature dans la surcharge des méthodes",
    "Explique-moi le concept classe abstraite en s'appuyant d'un exemple concret",
  ];
  //On genere un nombre aléatoire en se basant sur la taille du tableau
  const indexeAleatoire = Math.floor(Math.random() * 3);
  let viewQuestion = questions[indexeAleatoire]; //le nombre aléatoire obtenue est passé comme indexe au tableau
  paraBloc1.textContent = viewQuestion; //on affiche la question obtenue aléatoirement dans le tableau

  bloc1.appendChild(paraBloc1);
  section.appendChild(bloc1);
}
