let buttonElement = document.createElement("button");
buttonElement.id = "button";
buttonElement.textContent = "Cliquez ici";
document.body.appendChild(buttonElement);

let compteurElement = document.createElement("p");
compteurElement.id = "compteur";
compteurElement.textContent = "0";
document.body.appendChild(compteurElement);

let compteur = 0;

function addOne() {
    compteur++;
    compteurElement.textContent = compteur;
}

buttonElement.addEventListener("click", addOne);