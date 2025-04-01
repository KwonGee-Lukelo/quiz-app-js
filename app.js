const section = document.querySelector(".section");
const btnRun = document.querySelector(".btn__run");

btnRun.addEventListener("click", RunApp);

function RunApp() {
  section.textContent = "";

  const bloc1 = document.createElement("div");
  const bloc2 = document.createElement("div");
  const bloc3 = document.createElement("div");
  const paraBloc1 = document.createElement("p");
  const btnCheck = document.createElement("i");
  const tableBoard = document.createElement("h2");
  let score = document.createElement("p");
  const btnYes = document.createElement("button");
  const btnNo = document.createElement("button");
  const btnNext = document.createElement("button");

  //Tableau aux questions
  const questions = [
    "En POO,  le ramasse-miettes(Garbage Collector) libère automatiquement la mémoire occupée par les objets inutilisés ?",
    "Un destructeur est appelé automatiquement avant la suppression d'un objet ?",
    "La programmation orientée objet est un paradigme basé sur les objets ?",
    "Un objet est une instance d'une classe",
    "Une classe est un plan ou un modèle pour créer les objets ?",
    "La POO ne peut être utilisée qu'avec des langages comme Java et C++ ?",
    "Les concepts fondamentaux de la POO sont l'encapsulation, l'héritage et le polymorphisme ?",
    "Un objet peut exister sans une classe ?",
    "Une classe peut contenir des attributs et des méthodes ?",
    "Une classe peut avoir plusieurs instances ?",
    "Tous les objets d'une même classe partagent le même état ?",
    "L'encapsulation protège les données d'un objet contre les modifications directes ?",
    "En POO, les attributs sont généralment privés pour respecter l'encapsulation ?",
    "Un attribut privé est accessible directement depuis une classe ?",
    "Les getters et setters peremttent d'accéder et de modifier des attributs privés ?",
    "L'encapsulation empêche complètement l'accès aux attributs d'un objet ?",
    "L'héritage permet à une classe de réutiliser les attributs et méthodes d'une autre classe ?",
    "Une classe fille hérite de plusieurs classes en Java ?",
    "Une classe peut hériter d'elle-même ?",
    "Une classe enfant peut redéfinir les méthodes de la classe parent ?",
    "En POO, l'héritage favorise la réutilisation du code ?",
  ];

  //On genere un nombre aléatoire en se basant sur la taille du tableau
  const indexeAleatoire = Math.floor(Math.random() * 21);
  let viewQuestion = questions[indexeAleatoire]; //le nombre aléatoire obtenue est passé comme indexe au tableau

  paraBloc1.textContent = viewQuestion; //on affiche la question obtenue aléatoirement dans le tableau

  tableBoard.textContent = 0;
  score.textContent = "SCORE : ";
  btnYes.textContent = "Oui";
  btnNo.textContent = "Non";
  btnNext.textContent = "Passer";

  //Ajout de class css
  bloc2.classList.add("bloc2");
  btnYes.classList.add("btn__yes");
  btnNo.classList.add("btn__no");
  btnNext.classList.add("btn__next");
  bloc3.classList.add("bloc3");

  bloc1.appendChild(paraBloc1);
  bloc2.appendChild(btnYes);
  bloc2.appendChild(btnNo);
  bloc2.appendChild(btnNext);
  bloc3.appendChild(score);
  bloc3.appendChild(tableBoard);
  section.appendChild(bloc3);
  section.appendChild(bloc1);
  section.appendChild(bloc2);
}
