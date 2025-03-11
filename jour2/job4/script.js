let textareaElement = document.createElement("textarea");
        textareaElement.id = "keylogger";
        document.body.appendChild(textareaElement);

        document.addEventListener("keydown", function(event) {
            if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
                if (document.activeElement !== textareaElement) {
                    textareaElement.value += event.key;
                }
            }
        });