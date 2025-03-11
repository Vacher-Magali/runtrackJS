const konamiCode = [
    'ArrowUp', 'ArrowUp'
];

let currentSequence = [];

function checkKonamiCode(event) {
    currentSequence.push(event.code);

    
    if (currentSequence.length > konamiCode.length) {
        currentSequence.shift();
    }

    
    if (currentSequence.join('') === konamiCode.join('')) {
        
        document.body.classList.add('la-plateforme');
        alert("Code Konami activé ! La page est stylisée aux couleurs de La Plateforme_");
    }
}

window.addEventListener('keydown', checkKonamiCode);
