$(document).ready(function(){

    // Rendre les images déplaçables avec jQuery UI
    $("#container").sortable({
        placeholder: "sortable-placeholder", 
        update: function() {
            $("#message").text("");  // Effacer le message quand on réorganise
        }
    });

    // Mélanger les images
    $("#shuffle").click(function(){
        let images = $("#container img").toArray();
        images.sort(() => Math.random() - 0.5);
        $("#container").empty().append(images);
        
        $("#message").text(""); 
    });

    
    $("#check").click(function(){
        let correct = true;
        $("#container img").each(function(index){
            if ($(this).attr("data-order") != index + 1) {
                correct = false;
            }
        });

        if (correct) {
            $("#message").text("Vous avez gagné !").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu !").css("color", "red");
        }
    });

});
