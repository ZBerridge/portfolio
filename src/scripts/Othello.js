export default {
    othelloGame() {
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
        var counter;
        //var snd = new Audio("flip.wav");

        function init() {

            document.getElementById("othelloGame").innerHTML = drawGrid();
            document.getElementById("scoreBoard").innerHTML = drawScoreBoard();
            document.getElementById("newGame").onclick = newGame;
            gridArray();
            playerColor = "white";
            refreshGrid();
        }

        function initPlayerTurns(){
            var turns = document.querySelectorAll(".player-turn"), i;
            for(i = 0; i < turns.length; i++) {
                var x = turns[i].getAttribute("data-x");
                var y = turns[i].getAttribute("data-y");
                turns[i].addEventListener("click",  function(e){
                    e = e || window.event;
                    var src = e.target || e.srcElement;
                    var x = e.path[0].dataset.x;
                    var y = e.path[0].dataset.y;
                    playerTurn(x,y);
                });
            }
        }

        function gridArray() {
            // creates game board's array.
            for (var i = 0; i < gameArray.length; i++) {
                gameArray[i] = new Array(8);
            }

            for (var row = 0; row < gameArray.length; row++) {
                for (var col = 0; col < gameArray[row].length; col++) {
                    gameArray[row][col] = "green";
                }
            }
        }

        function drawGrid(){
            // writes table
            var htmlString = "<table id='othelloGrid'><tr>";
            for (var i = 0; i < 8; i++) {
                htmlString += "<th>" + i + "</th>";
            }
            htmlString += "</tr>";
            for (var j = 0; j < 8; j++) {
                htmlString += "<tr>";

                for (var x = 0; x < 8; x++) {
                    htmlString += "<td class='player-turn' data-x='" + j + "' data-y='" + x + "'></td>";
                }
                htmlString += "</tr>";
            }
            htmlString += "</table>";

            return htmlString;
        }

        function refreshGrid() {
            console.log("refreshGrid running...");
            // passes through table, matching class of each 'td' element to value of corresponding position in
            // gameArray.
            var table = document.getElementById("othelloGrid");
            playerOneScore = 0;
            playerTwoScore = 0;
            for (var i = 0, row; row = table.rows[i + 1]; i++){
                for (var j = 0, col; col = row.cells[j]; j++){
                    col.className = "player-turn " + gameArray[i][j];
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
            document.getElementById("skipTurn").innerHTML = playerColor + "'s turn";
            document.getElementById("skipTurn").className = "btn btn-primary " + playerColor;

            if ((playerOneScore + playerTwoScore == 64) || (validCount == 2)) {
                gameOver = true;
                declareWinner();
            }
        }

        function newGame() {
            // intializes game board, setting colors for game start
            gridArray();
            initGameVariables();
            gameArray[3][3] = "white";
            gameArray[3][4] = "black";
            gameArray[4][3] = "black";
            gameArray[4][4] = "white";

            // sets intitial player scores (0's), sets first player to 'white' as per Othello rules
            refreshGrid();
            initPlayerTurns();

        }

        function playerTurn(x, y) {
            if (gameArray[x][y] == "green") {
                justChecking = 0;
                xOrigin = eval("x");
                yOrigin = eval("y");
                counter = 0;
                //passes through the cardinal points of the compass to determine if the player's
                //selection results in any changes.
                cardinalPointCheck(x, y, xOrigin, yOrigin, counter, justChecking);
            }
            if ((madeMove) && (gameOver == false)){
                nextTurn();
            }

        }


        function validateMove(x, y, xMove, yMove, xOrigin, yOrigin, counter, justChecking){
            //debugger;
            // validateMove takes current coordinates in the array (x, y), the direction indicators (xMove, yMove)
            // and retains the initial position in xOrigin and yOrigin, used in fillMove.
            var xCo = parseInt(x) + parseInt(xMove);
            var yCo = parseInt(y) + parseInt(yMove);
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
        }

        function fillMove(xO, yO, xF, yF, xMove, yMove){
            //debugger;
            xO = parseInt(xO);
            yO = parseInt(yO);
            // 'flips' tiles from starting position (xO, yO) to the final position (xF, yF), using
            // the direction indicated by xMove and yMove.
            while((xO != xF) || (yO != yF)){

                gameArray[xO][yO] = playerColor;
                //snd.play();
                xO = xO + xMove;
                yO = yO + yMove;
                madeMove = true;
            }
        }

        function nextTurn() {
            //debugger;
            // swaps player color
            if (playerColor == "white") {
                playerColor = "black";
                oppColor = "white";
            }
            else {
                playerColor = "white";
                oppColor = "black";
            }
            // intializes relevant variables for new turn, redraws grid with potential changed values.
            hasValid = 0;
            madeMove = false;
            refreshGrid();
            checkForMoves();

        }

        function drawScoreBoard() {
            //debugger;
            var htmlString = "<div id='scoreKeep'><div>";
            htmlString += "<h3 class='text-center'>Scoreboard</h3>";
            htmlString += "<div class='score-color'>White</div>";
            htmlString += "<div class='score-color'>Black</div>";
            htmlString += "</div>";
            htmlString += "<div><div class='score-btn' id='player1'></div>";
            htmlString += "<div class='score-btn' id='player2'></div></div>";
            htmlString += "</div>";
            return htmlString;
        }

        function declareWinner() {
            //debugger;
            if (playerOneScore == playerTwoScore) {
                alert("I'm not even sure a tie can happen..." + "\n" + playerOneScore + " to " + playerTwoScore);
                newGame();
            }
            if (playerOneScore > playerTwoScore) {
                alert("White wins!" + "\n" + playerOneScore + " to " + playerTwoScore);
                newGame();
            }
            if (playerTwoScore > playerOneScore) {
                alert("Black wins!" + "\n" + playerTwoScore + " to " + playerOneScore);
                newGame();
            }
        }

        function checkForMoves() {
            //debugger;
            justChecking = 1;
            for (var x = 0; x < gameArray.length; x++){
                for (var y = 0; y < gameArray[x].length; y++){
                    if ((gameArray[x][y] == "green") && (hasValid == 0)){
                        xOrigin = eval("x + 0");
                        yOrigin = eval("y + 0");
                        counter = 0;
                        //passes through the cardinal points of the compass to determine if the player's
                        //selection results in any changes.
                        cardinalPointCheck(x, y, xOrigin, yOrigin, counter, justChecking);
                    }

                }
            }
            if (hasValid == 0) {
                var outputString = capitalizeFirstLetter(playerColor);
                console.log(outputString + " has no moves.");
                validCount++;
                if (gameOver == false) {
                    nextTurn();
                }
            }
        }

        function initGameVariables() {
            playerOneScore = 0;
            playerTwoScore = 0;
            validCount = 0;
            gameOver = false;
            playerColor = "white";
            oppColor = "black";
        }

        function cardinalPointCheck(x, y, xOrigin, yOrigin, counter, justChecking) {
            // re-usable bit of code, keeping things as separate as possible.  Used to check for
            // valid moves, and when a player clicks a tile.
            validateMove(x,y,1,0, xOrigin, yOrigin, counter, justChecking);
            validateMove(x,y,1,-1, xOrigin, yOrigin, counter, justChecking);
            validateMove(x,y,0,-1, xOrigin, yOrigin, counter, justChecking);
            validateMove(x,y,-1,-1, xOrigin, yOrigin, counter, justChecking);
            validateMove(x,y,-1,0, xOrigin, yOrigin, counter, justChecking);
            validateMove(x,y,-1,1, xOrigin, yOrigin, counter, justChecking);

            validateMove(x,y,0,1, xOrigin, yOrigin, counter, justChecking);
            validateMove(x,y,1,1, xOrigin, yOrigin, counter, justChecking);
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        init();

    }
}
