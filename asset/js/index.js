const counterDisplay = document.querySelector("h3");
//console.log(counterDisplay);
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  //console.log(bubble);

  //donné au span une class qui a été crée dans css
  bubble.classList.add("bubble");

  //Créé un enfant à ... / ici à body
  document.body.appendChild(bubble);

  //Crée un chiffre aléatoire entre 0 et 1 inclue / il faut ajouter un * pour augmenter la différence / si on veux ne pas partir de 0 on doit faire un + ex: Math.random() * 200 + 100
  //console.log(Math.random());

  //Créer la taille de la bulle // Puisque la Width et Height doit être de même taille on créer une const
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  //console.log(size);

  //La mettre dans une certaine position sur le body
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  //if else, pour faire de la left negatif
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //récupérer une une var en css
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  //Faire disparaitre en un click
  bubble.addEventListener("click", () => {
    counter++;
    //console.log(counter);
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  //Pour supprimer les bubbles après un certain temps
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

//créer un interval pour créer plusieurs bubble
setInterval(bubbleMaker, 1000);
