const section = document.querySelector(".section");
const btnRun = document.querySelector(".btn__run");
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

btnRun.addEventListener("click", RunApp);

//Applcation Principale
function RunApp() {
  section.textContent = "";
  QuestionAleatoire();
}

/*function createStructure() {
  const bloc1 = document.createElement("div");
  const paraBloc1 = document.createElement("p");
  const tableBoard = document.createElement("p");

  paraBloc1.textContent = " SCORE :";
  tableBoard.textContent = 0;


}*/

function QuestionAleatoire() {
  const bloc1 = document.createElement("div");
  const bloc2 = document.createElement("div");
  const bloc3 = document.createElement("div");

  const paraBloc1 = document.createElement("p");
  const paraBloc2 = document.createElement("p");
  const tableBoard = document.createElement("p");

  paraBloc1.textContent = " SCORE :";
  tableBoard.textContent = 0;

  let indexeAleatoire = Math.floor(Math.random() * 21);
  let viewQuestion = questions[indexeAleatoire];

  let number = 0; //Une variable qui va nous servir dans l'incrementation du SCORE

  paraBloc2.textContent = viewQuestion;

  /*Implementation de la fonctionalité Pour verifier si la 
  reponse est Extacte (OUI)*/
  btnYes.addEventListener("click", () => {
    if (true) {
      number += 3;
      tableBoard.textContent = number;
      console.log(number);
    }
  });

  //Implementation du button Passer
  btnNext.addEventListener("click", () => {
    let indexeAleatoire = Math.floor(Math.random() * 21);
    let viewQuestion = questions[indexeAleatoire];

    paraBloc2.textContent = viewQuestion;
  });

  btnYes.textContent = "Oui";
  btnYes.classList.add("btn__yes");

  btnNo.textContent = "Non";
  btnNo.classList.add("btn__no");

  btnNext.textContent = "Passer";
  btnNext.classList.add("btn__next");

  bloc1.classList.add("bloc1");
  bloc3.classList.add("bloc2");

  bloc1.appendChild(paraBloc1);
  bloc1.appendChild(tableBoard);
  section.appendChild(bloc1);

  bloc2.appendChild(paraBloc2);
  section.appendChild(bloc2);
  bloc3.appendChild(btnYes);
  bloc3.appendChild(btnNo);
  bloc3.appendChild(btnNext);
  section.appendChild(bloc3);
}
