let citationElement = document.createElement("article");
        citationElement.id = "citation";
        citationElement.textContent = "La vie a beaucoup plus d'imagination que nous.";
        document.body.appendChild(citationElement);

        let buttonElement = document.createElement("button");
        buttonElement.id = "button";
        buttonElement.textContent = "citation";
        document.body.appendChild(buttonElement);

        function citation() {
            console.log(citationElement.textContent);
        }

        buttonElement.addEventListener("click", citation);