export const othelloGame = {
    data() {
        return {
            var playerColor;
        var oppColor;
        var playerNum = 1;
        var gameArray = new Array(8);
        var xOrigin;
        var yOrigin;
        var playerOneScore = 0;
        var playerTwoScore = 0;
        var madeMove = false;
        var justChecking;
        var hasValid;
        var validCount;
        var gameOver = false;
        var snd = new Audio("flip.wav");
    }
    },
    methods: {
        init: function () {
            document.getElementById("othelloGame").innerHTML = drawGrid();
            document.getElementById("scoreBoard").innerHTML = drawScoreBoard();
            document.getElementById("newGame").onclick = newGame;
            gridArray();
            playerColor = "white";
            refreshGrid();
        },
        gridArray: function () {
            // creates game board's array.
            for (var i = 0; i < gameArray.length; i++) {
                gameArray[i] = new Array(8);
            }

            for (var row = 0; row < gameArray.length; row++) {
                for (var col = 0; col < gameArray[row].length; col++) {
                    gameArray[row][col] = "green";
                }
            }
        },
        drawGrid: function () {
            // writes table to HTML document
            var htmlString = "<table id='othelloGrid'><tr>";
            for (var i = 0; i < 8; i++) {
                htmlString += "<th>" + i + "</th>";
            }
            htmlString += "</tr>";
            for (var j = 0; j < 8; j++) {
                htmlString += "<tr>";

                for (var x = 0; x < 8; x++) {
                    htmlString += "<td onclick = 'playerTurn(" + j + "," + x + ")'></td>";
                }
                htmlString += "</tr>";
            }
            htmlString += "</table>";

            return htmlString;
        },
        refreshGrid:function() {
            // passes through table, matching class of each 'td' element to value of corresponding position in
            // gameArray.
            var table = document.getElementById("othelloGrid");
            playerOneScore = 0;
            playerTwoScore = 0;
            for (var i = 0, row; row = table.rows[i + 1]; i++){
                for (var j = 0, col; col = row.cells[j]; j++){
                    col.className = gameArray[i][j];
                    if (gameArray[i][j] == "white") {
                        playerOneScore++;
                    }
                    else if (gameArray[i][j] == "black") {
                        playerTwoScore++;
                    }
                }
            }

            document.getElementById("player1").innerHTML = playerOneScore;
            document.getElementById("player2").innerHTML = playerTwoScore;
            document.getElementById("skipTurn").innerHTML = playerColor;
            document.getElementById("skipTurn").className = playerColor;

            if ((playerOneScore + playerTwoScore == 64) || (validCount == 2)) {
                gameOver = true;
                declareWinner();
            }
        },
        newGame:function () {
            // intializes game board, setting colors for game start
            gridArray();
            gameArray[3][3] = "white";
            gameArray[3][4] = "black";
            gameArray[4][3] = "black";
            gameArray[4][4] = "white";
            // sets intitial player scores (0's), sets first player to 'white' as per Othello rules
            playerOneScore = 0;
            playerTwoScore = 0;
            validCount = 0;
            refreshGrid();
            playerColor = "white";
            oppColor = "black";

        },
        playerTurn:function (x, y) {
            if (this.gameArray[x][y] == "green") {
                justChecking = 0;
                xOrigin = eval("x + 0");
                yOrigin = eval("y + 0");
                counter = 0;
                //passes through the cardinal points of the compass to determine if the player's
                //selection results in any changes.
                validateMove(x,y,1,0, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,1,-1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,0,-1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,-1,-1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,-1,0, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,-1,1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,0,1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,1,1, xOrigin, yOrigin, counter, justChecking);
            }
            if ((this.madeMove) && (this.gameOver == false)){
                nextTurn();
            }

        },
        validateMove:function(x, y, xMove, yMove, xOrigin, yOrigin, counter, justChecking){
            // validateMove takes current coordinates in the array (x, y), the direction indicators (xMove, yMove)
            // and retains the initial
            var xCo = eval("x + xMove");
            var yCo = eval("y + yMove");
            if ((xCo <= 7) && (xCo >= 0)) {
                if ((yCo <= 7) && (yCo >= 0)) {
                    if (gameArray[xCo][yCo] == oppColor) {
                        //counter is necessary so fillMove is not called simply by having the player's
                        //selection be next to his/her own color.
                        counter = counter +1;
                        validateMove(xCo, yCo, xMove, yMove, xOrigin, yOrigin, counter, justChecking);
                    }
                    else if ((gameArray[xCo][yCo] == playerColor) && (counter != 0)) {
                        if (justChecking == 0){
                            fillMove(xOrigin, yOrigin, xCo, yCo, xMove, yMove);
                        }
                        else if (justChecking == 1) {
                            hasValid = 1;
                            validCount = 0;
                        }
                    }
                }
            }
        },
    }
}










function fillMove(xO, yO, xF, yF, xMove, yMove){

    while((xO != xF) || (yO != yF)){

        gameArray[xO][yO] = playerColor;
        snd.play();
        xO = xO + xMove;
        yO = yO + yMove;
        madeMove = true;
    }
}

function nextTurn() {

    if (playerColor == "white") {
        playerColor = "black";
        oppColor = "white";
    }
    else {
        playerColor = "white";
        oppColor = "black";
    }
    hasValid = 0;

    madeMove = false;
    refreshGrid();
    checkForMoves();

}

function drawScoreBoard() {
    var htmlString = "<table id='scoreKeep'><tr>";
    htmlString += "<th>Player 1</th>";
    htmlString += "<th>Player 2</th>";
    htmlString += "</tr>";
    htmlString += "<tr><td id = 'player1'></td>";
    htmlString += "<td id = 'player2'></td></tr>";
    htmlString += "</table>";
    return htmlString;
}

function declareWinner() {
    if (playerOneScore == playerTwoScore) {
        alert("I'm not even sure a tie can happen...");
        newGame();
    }
    if (playerOneScore > playerTwoScore) {
        alert("Player 1 wins!");
        newGame();
    }
    if (playerTwoScore > playerOneScore) {
        alert("Player 2 wins!");
        newGame();
    }
}

function checkForMoves() {
    justChecking = 1;
    for (var x = 0; x < gameArray.length; x++){
        for (var y = 0; y < gameArray[x].length; y++){
            if ((gameArray[x][y] == "green") && (hasValid == 0)){

                xOrigin = eval("x + 0");
                yOrigin = eval("y + 0");
                counter = 0;
                //passes through the cardinal points of the compass to determine if the player's
                //selection results in any changes.
                validateMove(x,y,1,0, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,1,-1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,0,-1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,-1,-1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,-1,0, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,-1,1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,0,1, xOrigin, yOrigin, counter, justChecking);
                validateMove(x,y,1,1, xOrigin, yOrigin, counter, justChecking);
            }

        }
    }
    if (hasValid == 0) {
        alert("Player has no moves.");
        validCount++;
        if (gameOver == false) {
            nextTurn();
        }
    }
}
    }
}


