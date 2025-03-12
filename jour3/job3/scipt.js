$(document).ready(function(){
    let grid = $("#grid");
    let pieces = [
        { id: 1, x: 0, y: 0 }, { id: 2, x: 1, y: 0 }, { id: 3, x: 2, y: 0 },
        { id: 4, x: 0, y: 1 }, { id: 5, x: 1, y: 1 }, { id: 6, x: 2, y: 1 },
        { id: 7, x: 0, y: 2 }, { id: 8, x: 1, y: 2 }, { id: 0, x: 2, y: 2 } // Case vide (id = 0)
    ];

    function createGrid() {
        grid.empty();
        pieces.forEach(piece => {
            let tile = $("<div>").addClass("tile").attr("data-id", piece.id);
            if (piece.id !== 0) {
                tile.css("background-image", `url('image/image${piece.id}.png')`);
                tile.css("background-position", `-${piece.x * 100}px -${piece.y * 100}px`);
            } else {
                tile.addClass("empty");
            }
            grid.append(tile);
        });
    }

    function shuffleGrid() {
        do {
            pieces.sort(() => Math.random() - 0.5);
        } while (!isSolvable(pieces));
        createGrid();
    }

    function isSolvable(pieces) {
        let inversionCount = 0;
        let tileOrder = pieces.map(p => p.id).filter(id => id !== 0);
        for (let i = 0; i < tileOrder.length; i++) {
            for (let j = i + 1; j < tileOrder.length; j++) {
                if (tileOrder[i] > tileOrder[j]) {
                    inversionCount++;
                }
            }
        }
        return inversionCount % 2 === 0;
    }

    function moveTile(tile) {
        let emptyIndex = pieces.findIndex(p => p.id === 0);
        let tileIndex = pieces.findIndex(p => p.id == $(tile).data("id"));

        let emptyX = pieces[emptyIndex].x, emptyY = pieces[emptyIndex].y;
        let tileX = pieces[tileIndex].x, tileY = pieces[tileIndex].y;

        if ((Math.abs(emptyX - tileX) === 1 && emptyY === tileY) ||
            (Math.abs(emptyY - tileY) === 1 && emptyX === tileX)) {

            [pieces[emptyIndex], pieces[tileIndex]] = [pieces[tileIndex], pieces[emptyIndex]];
            createGrid();
            checkWin();
        }
    }

    function checkWin() {
        let isWin = pieces.every((p, index) => p.id === index + 1 || p.id === 0);
        if (isWin) {
            $("#message").text("Vous avez gagné !").css("color", "green");
        }
    }

    $("#grid").on("click", ".tile:not(.empty)", function() {
        moveTile(this);
    });

    $("#restart").click(function(){
        $("#message").text("");
        shuffleGrid();
    });

    shuffleGrid();
});
