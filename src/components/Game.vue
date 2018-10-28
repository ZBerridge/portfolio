<template>
    <div class="home-logo-container d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12">
                <h4 id="game-logo" class="fade-in">{{ msg }}</h4>
            </div>
            <div class="col-12">
                <figure id="othelloGame">
                </figure>
                <button type = "button" id ="newGame">
                    New Game!
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: '',
                testMsg : 'Soon to contain an old game I made in JS, Othello.',
                playerColor: '',
                oppColor: '',
                playerNum: 1,
                gameArray: new Array(8),
                gameArrayObj: new Object(),
                xOrigin: '',
                yOrigin: '' ,
                playerOneScore: 0,
                playerTwoScore: 0,
            }
        },
        methods: {
            renderMsg(){
                this.msg = this.testMsg
            },
            Init(){
                let gameBoard = document.getElementById("othelloGame");
                let newGame = document.getElementById("newGame");
                let playerOneScoreBoard = document.getElementById("player1score");
                let playerTwoScoreBoard = document.getElementById("player2score");
                if(gameBoard != null) {
                    gameBoard.innerHTML = this.drawGrid();
                    console.log(this.drawGrid());
                } else {
                    console.log('Game board not found.');
                }
                if(newGame  != null){
                    newGame.onclick = this.newGame();
                } else {
                    console.log('New Game Button not found.');
                }
                if(playerOneScoreBoard != null) {
                    playerOneScoreBoard.innerHTML = this.playerOneScore;
                } else {
                    console.log('Player 1 scoreboard not found.');
                }
                if(playerTwoScoreBoard != null) {
                    playerTwoScoreBoard.innerHTML = this.playerTwoScore;
                } else {
                    console.log('Player 2 scoreboard not found.');
                }
                this.gridArray();
            },
            gridArray() {
                // creates game board's array.
                for (let i = 0; i < this.gameArray.length; i++) {
                    this.gameArray[i] = new Array(8);
                }

                for (let row = 0; row < this.gameArray.length; row++) {
                    for (let col = 0; col < this.gameArray[row].length; col++) {
                        this.gameArray[row][col] = "green";
                    }
                }
            },
            drawGrid() {
                // writes table to HTML document
                let htmlString = "<table id='othelloGrid'><tr>";
                for (let i = 0; i < 8; i++) {
                    htmlString += "<th>" + i + "</th>";
                }
                htmlString += "</tr>";
                for (let j = 0; j < 8; j++) {
                    htmlString += "<tr>";

                    for (let x = 0; x < 8; x++) {
                        htmlString += "<td v-on:click=\"playerTurn(" + j + "," + x + ")\"></td>";
                    }
                    htmlString += "</tr>";
                }
                htmlString += "</table>";

                return htmlString;
            },
            refreshGrid() {
                // passes through table, matching class of each 'td' element to value of corresponding position in
                // gameArray.
                let table = document.getElementById("othelloGrid");

                for (let i = 0, row; row = table.rows[i + 1]; i++) {
                    for (let j = 0, col; col = row.cells[j]; j++) {
                        col.className = this.gameArray[i][j];
                        //col.innerHTML = "" + xOrigin + ", " + yOrigin + "";
                        if (this.gameArray[i][j] == "white") {
                            this.playerOneScore++;
                        }
                        else if (this.gameArray[i][j] == "black") {
                            this.playerTwoScore++;
                        }
                    }
                }


            },
            newGame() {
                // intializes game board, setting colors for game start
                this.gridArray();
                this.gameArray[3][3] = "white";
                this.gameArray[3][4] = "black";
                this.gameArray[4][3] = "black";
                this.gameArray[4][4] = "white";

                this.playerOneScore = 0;
                this.playerTwoScore = 0;
                this.refreshGrid();
                this.playerColor = "white";
                this.oppColor = "black";

            },
            playerTurn(x, y) {
                if (this.gameArray[x][y] == "green") {
                    this.xOrigin = eval("x + 0");
                    this.yOrigin = eval("y + 0");
                    this.validateMove(x, y, 1, 0, this.xOrigin, this.yOrigin);
                    this.validateMove(x, y, 1, -1, this.xOrigin, this.yOrigin);
                    this.validateMove(x, y, 0, -1, this.xOrigin, this.yOrigin);
                    this.validateMove(x, y, -1, -1, this.xOrigin, this.yOrigin);
                    this.validateMove(x, y, -1, 0, this.xOrigin, this.yOrigin);
                    this.validateMove(x, y, -1, 1, this.xOrigin, this.yOrigin);
                    this.validateMove(x, y, 0, 1, this.xOrigin, this.yOrigin);
                    this.validateMove(x, y, 1, 1, this.xOrigin, this.yOrigin);
                }

                this.nextTurn();


            },
            validateMove(x, y, xMove, yMove, xOrigin, yOrigin) {
                let xCo = eval("x + xMove");
                let yCo = eval("y + yMove");
                if (this.gameArray[xCo][yCo] === this.oppColor) {
                    this.validateMove(xCo, yCo, xMove, yMove, xOrigin, yOrigin);
                }
                else if (this.gameArray[xCo][yCo] === this.playerColor) {
                    this.fillMove(xOrigin, yOrigin, xCo, yCo, xMove, yMove);
                }

            },
            fillMove(xO, yO, xF, yF, xMove, yMove) {

                while ((xO !== xF) || (yO !== yF)) {
                    this.gameArray[xO][yO] = this.playerColor;
                    xO = xO + xMove;
                    yO = yO + yMove;
                }


                this.refreshGrid();

            },
            nextTurn() {
                if (this.playerColor === "white") {
                    this.playerColor = "black";
                    this.oppColor = "white";
                }
                else {
                    this.playerColor = "white";
                    this.oppColor = "black";
                }
            }
        },
        mounted(){
            this.renderMsg(),
            this.Init()
        }
    }
</script>
