<template>
    <div class="othello-game-container">
        <div class="row" >
            <div class="col-12">
                <figure id="othelloGame">
                    <table class="table" id="othelloGrid">
                        <tbody>
                            <tr>
                                <th>0</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(0,0)" class="green"></td>
                                <td v-on:click="playerTurn(0,1)" class="green"></td>
                                <td v-on:click="playerTurn(0,2)" class="green"></td>
                                <td v-on:click="playerTurn(0,3)" class="green"></td>
                                <td v-on:click="playerTurn(0,4)" class="green"></td>
                                <td v-on:click="playerTurn(0,5)" class="green"></td>
                                <td v-on:click="playerTurn(0,6)" class="green"></td>
                                <td v-on:click="playerTurn(0,7)" class="green"></td>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(1,0)" class="green"></td>
                                <td v-on:click="playerTurn(1,1)" class="green"></td>
                                <td v-on:click="playerTurn(1,2)" class="green"></td>
                                <td v-on:click="playerTurn(1,3)" class="green"></td>
                                <td v-on:click="playerTurn(1,4)" class="green"></td>
                                <td v-on:click="playerTurn(1,5)" class="green"></td>
                                <td v-on:click="playerTurn(1,6)" class="green"></td>
                                <td v-on:click="playerTurn(1,7)" class="green"></td>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(2,0)" class="green"></td>
                                <td v-on:click="playerTurn(2,1)" class="green"></td>
                                <td v-on:click="playerTurn(2,2)" class="green"></td>
                                <td v-on:click="playerTurn(2,3)" class="green"></td>
                                <td v-on:click="playerTurn(2,4)" class="green"></td>
                                <td v-on:click="playerTurn(2,5)" class="green"></td>
                                <td v-on:click="playerTurn(2,6)" class="green"></td>
                                <td v-on:click="playerTurn(2,7)" class="green"></td>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(3,0)" class="green"></td>
                                <td v-on:click="playerTurn(3,1)" class="green"></td>
                                <td v-on:click="playerTurn(3,2)" class="green"></td>
                                <td v-on:click="playerTurn(3,3)" class="white"></td>
                                <td v-on:click="playerTurn(3,4)" class="black"></td>
                                <td v-on:click="playerTurn(3,5)" class="green"></td>
                                <td v-on:click="playerTurn(3,6)" class="green"></td>
                                <td v-on:click="playerTurn(3,7)" class="green"></td>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(4,0)" class="green"></td>
                                <td v-on:click="playerTurn(4,1)" class="green"></td>
                                <td v-on:click="playerTurn(4,2)" class="green"></td>
                                <td v-on:click="playerTurn(4,3)" class="black"></td>
                                <td v-on:click="playerTurn(4,4)" class="white"></td>
                                <td v-on:click="playerTurn(4,5)" class="green"></td>
                                <td v-on:click="playerTurn(4,6)" class="green"></td>
                                <td v-on:click="playerTurn(4,7)" class="green"></td>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(5,0)" class="green"></td>
                                <td v-on:click="playerTurn(5,1)" class="green"></td>
                                <td v-on:click="playerTurn(5,2)" class="green"></td>
                                <td v-on:click="playerTurn(5,3)" class="green"></td>
                                <td v-on:click="playerTurn(5,4)" class="green"></td>
                                <td v-on:click="playerTurn(5,5)" class="green"></td>
                                <td v-on:click="playerTurn(5,6)" class="green"></td>
                                <td v-on:click="playerTurn(5,7)" class="green"></td>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(6,0)" class="green"></td>
                                <td v-on:click="playerTurn(6,1)" class="green"></td>
                                <td v-on:click="playerTurn(6,2)" class="green"></td>
                                <td v-on:click="playerTurn(6,3)" class="green"></td>
                                <td v-on:click="playerTurn(6,4)" class="green"></td>
                                <td v-on:click="playerTurn(6,5)" class="green"></td>
                                <td v-on:click="playerTurn(6,6)" class="green"></td>
                                <td v-on:click="playerTurn(6,7)" class="green"></td>
                            </tr>
                            <tr>
                                <td v-on:click="playerTurn(7,0)" class="green"></td>
                                <td v-on:click="playerTurn(7,1)" class="green"></td>
                                <td v-on:click="playerTurn(7,2)" class="green"></td>
                                <td v-on:click="playerTurn(7,3)" class="green"></td>
                                <td v-on:click="playerTurn(7,4)" class="green"></td>
                                <td v-on:click="playerTurn(7,5)" class="green"></td>
                                <td v-on:click="playerTurn(7,6)" class="green"></td>
                                <td v-on:click="playerTurn(7,7)" class="green"></td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
                <button v-on:click="newGame" id="newGame">
                    New Game!
                </button>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center">
            <span id="player1score">{{ playerOneScore }}</span>
            <span id="player2score">{{ playerTwoScore }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                playerColor: '',
                oppColor: '',
                playerNum: 1,
                gameArray: '',
                xOrigin: '',
                yOrigin: '' ,
                playerOneScore: 0,
                playerTwoScore: 0,
                madeMove: false,
                justChecking: '',
                hasValid: '',
                validCount: '',
                counter: '',
                gameOver: false
            }
        },
        methods: {
            gridArray: function() {
                // creates game board's array.
                for (let i = 0; i < this.gameArray.length; i++) {
                    this.gameArray[i] = new Array(8);
                }

                for (let row = 0; row < this.gameArray.length; row++) {
                    for (let col = 0; col < this.gameArray[row].length; col++) {
                        this.gameArray[row][col] = "green";
                    }
                }
                //console.log(this.gameArray);
            },
            refreshGrid: function() {
                // passes through table, matching class of each 'td' element to value of corresponding position in
                // gameArray.
                let table = document.getElementById("othelloGrid");
                this.playerOneScore = 0;
                this.playerTwoScore = 0;
                for (let i = 0, row; row = table.rows[i + 1]; i++) {
                    for (let j = 0, col; col = row.cells[j]; j++) {
                        col.className = this.gameArray[i][j];
                        //col.innerHTML = "" + xOrigin + ", " + yOrigin + "";
                        if (this.gameArray[i][j] === "white") {
                            this.playerOneScore++;
                        }
                        else if (this.gameArray[i][j] === "black") {
                            this.playerTwoScore++;
                        }
                    }
                }
                if ((this.playerOneScore + this.playerTwoScore === 64) || (this.validCount === 2)) {
                    this.gameOver = true;
                    this.declareWinner();
                }
            },
            newGame: function() {
                // intializes game board, setting colors for game start
                this.gameArray = new Array(8);
                this.gridArray();
                this.gameArray[3][3] = "white";
                this.gameArray[3][4] = "black";
                this.gameArray[4][3] = "black";
                this.gameArray[4][4] = "white";

                this.playerOneScore = 0;
                this.playerTwoScore = 0;
                this.validCount = 0;
                this.refreshGrid();
                this.playerColor = "white";
                this.oppColor = "black";

            },
            playerTurn: function(x, y) {
                console.log('X: ' + x);
                console.log('Y: ' + y);
                if (this.gameArray[x][y] === "green") {
                    this.justChecking = 0;
                    this.xOrigin = x;
                    this.yOrigin = y;
                    this.counter = 0;
                    //passes through the cardinal points of the compass to determine if the player's
                    //selection results in any changes.
                    this.validateMove(x, y, 1, 0);
                    this.validateMove(x, y, 1, -1);
                    this.validateMove(x, y, 0, -1);
                    this.validateMove(x, y,-1,-1);
                    this.validateMove(x, y, -1, 0);
                    this.validateMove(x, y, -1, 1);
                    this.validateMove(x, y, 0, 1);
                    this.validateMove(x, y, 1, 1);
                }
                if ((this.madeMove) && (!this.gameOver)){
                    this.nextTurn();
                }
            },
            validateMove: function(x, y, xMove, yMove){
            // validateMove takes current coordinates in the array (x, y), the direction indicators (xMove, yMove)
            // and retains the initial
                let xCo = eval("x + xMove");
                let yCo = eval("y + yMove");
                if ((parseInt(xCo) < 8) && (parseInt(xCo) > -1)) {
                    if ((parseInt(yCo) < 8) && (parseInt(yCo) > -1)) {
                        if (this.gameArray[xCo][yCo] === this.oppColor) {
                            //counter is necessary so fillMove is not called simply by having the player's
                            //selection be next to his/her own color.
                            this.counter++;
                            this.validateMove(xCo, yCo, xMove, yMove);
                        }
                        else if ((this.gameArray[xCo][yCo] === this.playerColor) && (this.counter !== 0)) {
                            if (this.justChecking === 0){
                                this.fillMove(xCo, yCo, xMove, yMove);
                            }
                            else if (this.justChecking === 1) {
                                this.hasValid = 1;
                                this.validCount = 0;
                            }
                        }
                    }
                }
            },
            fillMove: function(xF, yF, xMove, yMove) {
                while ((this.xOrigin !== xF) || (this.yOrigin !== yF)) {
                    this.gameArray[this.xOrigin][this.yOrigin] = this.playerColor;
                    this.xOrigin = this.xOrigin + xMove;
                    this.yOrigin = this.yOrigin + yMove;
                    this.madeMove = true;
                }
                this.refreshGrid();
            },
            nextTurn: function() {
                if (this.playerColor === "white") {
                    this.playerColor = "black";
                    this.oppColor = "white";
                }
                else {
                    this.playerColor = "white";
                    this.oppColor = "black";
                }
                this.hasValid = 0;

                this.madeMove = false;
                this.refreshGrid();
                this.checkForMoves();
            },
            checkForMoves: function(){
                this.justChecking = 1;
                for (let x = 0; x < this.gameArray.length; x++){
                    for (let y = 0; y < this.gameArray[x].length; y++){
                        if ((this.gameArray[x][y] === "green") && (this.hasValid === 0)){

                            this.xOrigin = eval("x + 0");
                            this.yOrigin = eval("y + 0");
                            this.counter = 0;
                            //passes through the cardinal points of the compass to determine if the player's
                            //selection results in any changes.
                            this.validateMove(x,y,1,0);
                            this.validateMove(x,y,1,-1);
                            this.validateMove(x,y,0,-1);
                            this.validateMove(x,y,-1,-1);
                            this.validateMove(x,y,-1,0);
                            this.validateMove(x,y,-1,1);
                            this.validateMove(x,y,0,1);
                            this.validateMove(x,y,1,1);
                        }

                    }
                }
                if (this.hasValid === 0) {
                    alert("Player has no moves.");
                    this.validCount++;
                    if (this.gameOver === false) {
                        this.nextTurn();
                    }
                }
            },
            declareWinner:function () {
                if (this.playerOneScore === this.playerTwoScore) {
                    alert("I'm not even sure a tie can happen...");
                    this.newGame();
                }
                if (this.playerOneScore > this.playerTwoScore) {
                    alert("Player 1 wins!");
                    this.newGame();
                }
                if (this.playerTwoScore > this.playerOneScore) {
                    alert("Player 2 wins!");
                    this.newGame();
                }
            }
        }
    }
</script>
