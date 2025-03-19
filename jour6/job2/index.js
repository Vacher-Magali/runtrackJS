      $(document).ready(function() {
            $('#buy-butterfly').click(function() {
                alert("Achat confirmé pour un papillon !");
            });
            
            $('#change-text').click(function() {
                const quotes = [
                    "J'ai vu des choses que vous ne croiriez pas...",
                    "Tous ces moments se perdront dans l’oubli...",
                    "Comme des larmes dans la pluie..."
                ];
                let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                $('#jumbotron-text').text(randomQuote);
            });
        })