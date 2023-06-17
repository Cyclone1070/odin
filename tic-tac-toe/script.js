let gameboard = ["", "", "", "", "", "", "", "", ""];

let Player = (function () {
    const player1 = {
        name: "Player 1",
        mark: "X",
    };
    const player2 = {
        name: "Player 2",
        mark: "O",
    };
    let currentPlayer = player1;
    let updatePlayer = () => {
        if (Player.currentPlayer === player1) {
            Player.currentPlayer = player2;
        } else {
            Player.currentPlayer = player1;
        }
    };
    return { player1, player2, currentPlayer, updatePlayer };
})();

let GameDisplay = (function () {
    let board = document.querySelector(".board");
    gameboard.forEach((grid) => {
        let div = document.createElement("div");
        div.textContent = grid;
        div.addEventListener("click", addGrid);
        function addGrid(e) {
            gameboard[
                Array.from(e.target.parentNode.children).indexOf(e.target)
            ] = Player.currentPlayer.mark;
            Player.updatePlayer();
            e.target.textContent = Player.currentPlayer.mark;

            if (checkWin() === Player.player1) {
                let winner = document.createElement("div");
                winner.textContent = `${Player.player1.name} wins!`;
                winner.classList.add("result");
                board.appendChild(winner);
            } else if (checkWin() === Player.player2) {
                let winner = document.createElement("div");
                winner.textContent = `${Player.player2.name} wins!`;
                winner.classList.add("result");
                board.appendChild(winner);
            }
            if (checkWin()) {
                let lockedBoard = board.cloneNode(true);
                board.replaceWith(lockedBoard);
            }
            div.removeEventListener("click", addGrid);
        }
        board.appendChild(div);
    });
    let checkWin = function () {
        let getWinner = (marker) => {
            if (marker === "X") {
                return Player.player1;
            } else {
                return Player.player2;
            }
        };
        for (i = 0; i <= 6; i += 3) {
            if (
                gameboard[i] === gameboard[i + 1] &&
                gameboard[i] === gameboard[i + 2] &&
                gameboard[i] !== ""
            ) {
                return getWinner(gameboard[i]);
            }
        }
        for (i = 0; i < 3; i++) {
            if (
                gameboard[i] === gameboard[i + 3] &&
                gameboard[i] === gameboard[i + 6] &&
                gameboard[i] !== ""
            ) {
                return getWinner(gameboard[i]);
            }
        }
        if (
            gameboard[0] &&
            gameboard[0] === gameboard[4] &&
            gameboard[0] === gameboard[8]
        ) {
            return getWinner(gameboard[0]);
        } else if (
            gameboard[2] &&
            gameboard[2] === gameboard[4] &&
            gameboard[2] === gameboard[6]
        ) {
            return getWinner(gameboard[2]);
        }
    };
})();
