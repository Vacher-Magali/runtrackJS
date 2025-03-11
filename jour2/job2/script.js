let buttonElement = document.createElement("button");
        buttonElement.id = "button";
        buttonElement.textContent = "Afficher / Cacher l'article";
        document.body.appendChild(buttonElement);

        let articleElement = null;

        function showhide() {
            if (!articleElement) {
                articleElement = document.createElement("article");
                articleElement.id = "citation";
                articleElement.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
                document.body.appendChild(articleElement);
            } else {
                articleElement.remove();
                articleElement = null;
            }
        }

        buttonElement.addEventListener("click", showhide);