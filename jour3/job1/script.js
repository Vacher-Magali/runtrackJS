$(document).ready(function(){
    let articleElement = null;

    let buttonElement = $("<button>", {
        id: "button",
        text: "appuie"
    }).appendTo("body");

    buttonElement.click(function(){
        if (!articleElement) {
            articleElement = $("<article>", {
                id: "citation",
                text: "L'important n'est pas la chute, mais l'atterrissage."
            }).appendTo("body");
        } else {
            articleElement.remove();
            articleElement = null;
        }
    });
});