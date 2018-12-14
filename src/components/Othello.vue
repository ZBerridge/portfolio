<template>
    <section id="othelloSection" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title font-white">Othello Game</h2>
                    <p class="py-3">There is a little story behind this game.  I remembered reading a blog post about a CS student who had misunderstood his assignment.  Instead of making a checkerboard, he made Checkers.  It always stuck with me, so after 1 semester of Javascript, I thought i'd challenge myself.  And this little hotseat Othello game is the result.  Always liked it, it helped me get my internships.</p>
                </div>
                <div class="col-12 d-flex justify-content-lg-center py-3">
                    <button type="button" class="btn btn-othello" data-toggle="modal" data-target="#othelloGameModal">
                        Want to play a game?
                    </button>
                </div>
            </div>
            <div class="othello-game-container modal fade" id="othelloGameModal" tabindex="-1" role="table" aria-labelledby="othelloGameLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="othelloGameLabel">Othello</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <figure id="othelloGame">
                                <table class="table" id="othelloGrid">
                                    <tbody>
                                    <!--<tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>-->
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
                        </div>
                        <div class="modal-footer">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 d-flex flex-row justify-content-around">
                                        <button class="btn-danger" v-on:click="newGame" id="newGame">
                                            New Game!
                                        </button>
                                        <div class="scoreboard">
                                            <span id="player1score">{{ playerOneScore }}</span>
                                            <span id="player2score">{{ playerTwoScore }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                playerColor: '',
                oppColor: '',
                playerNum: 1,
                gameArray: '',
                //xOrigin: '',
                //yOrigin: '' ,
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
            },
            refreshGrid: function() {
                // passes through table, matching class of each 'td' element to value of corresponding position in
                // gameArray.
                let table = document.getElementById("othelloGrid");
                this.playerOneScore = 0;
                this.playerTwoScore = 0;
                for (let i = 0, row; row = table.rows[i]; i++) {
                    for (let j = 0, col; col = row.cells[j]; j++) {
                        col.className = this.gameArray[i][j];
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
                // sets intitial player scores (0's), sets first player to 'white' as per Othello rules
                this.playerOneScore = 0;
                this.playerTwoScore = 0;
                this.validCount = 0;
                this.refreshGrid();
                this.playerColor = "white";
                this.oppColor = "black";

            },
            playerTurn: function(x, y) {
                if (this.gameArray[x][y] === "green") {
                    this.justChecking = 0;
                    let xOrigin = x;
                    let yOrigin = y;
                    this.counter = 0;
                    //passes through the cardinal points of the compass to determine if the player's
                    //selection results in any changes.
                    this.validateMove(x, y, 1, 0, xOrigin, yOrigin);
                    this.validateMove(x, y, 1, -1, xOrigin, yOrigin);
                    this.validateMove(x, y, 0, -1, xOrigin, yOrigin);
                    this.validateMove(x, y,-1,-1, xOrigin, yOrigin);
                    this.validateMove(x, y, -1, 0, xOrigin, yOrigin);
                    this.validateMove(x, y, -1, 1, xOrigin, yOrigin);
                    this.validateMove(x, y, 0, 1, xOrigin, yOrigin);
                    this.validateMove(x, y, 1, 1, xOrigin, yOrigin);
                }
                if ((this.madeMove) && (!this.gameOver)){
                    this.nextTurn();
                }
            },
            validateMove: function(x, y, xMove, yMove, xOrigin, yOrigin){
            // validateMove takes current coordinates in the array (x, y), the direction indicators (xMove, yMove)
            // and retains the initial
                let xCo = eval("x + xMove");
                let yCo = eval("y + yMove");

                if (xCo < 8 && xCo > -1) {
                    if (yCo < 8 && yCo > -1) {
                        if (this.gameArray[xCo][yCo] === this.oppColor) {
                            //counter is necessary so fillMove is not called simply by having the player's
                            //selection be next to his/her own color.
                            this.counter++;
                            this.validateMove(xCo, yCo, xMove, yMove, xOrigin, yOrigin);
                        }
                        else if ((this.gameArray[xCo][yCo] === this.playerColor) && (this.counter !== 0)) {
                            if (this.justChecking === 0){
                                this.fillMove(xOrigin, yOrigin, xCo, yCo, xMove, yMove);
                            }
                            else if (this.justChecking === 1) {
                                this.hasValid = 1;
                                this.validCount = 0;
                            }
                        }
                    }
                }
            },
            fillMove: function(xO, yO, xF, yF, xMove, yMove) {
                while ((xO !== xF) || (yO !== yF)) {
                    this.gameArray[xO][yO] = this.playerColor;
                    xO += xMove;
                    yO += yMove;
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

                            let xOrigin = eval("x + 0");
                            let yOrigin = eval("y + 0");
                            this.counter = 0;
                            //passes through the cardinal points of the compass to determine if the player's
                            //selection results in any changes.
                            this.validateMove(x, y, 1, 0, xOrigin, yOrigin);
                            this.validateMove(x, y, 1, -1, xOrigin, yOrigin);
                            this.validateMove(x, y, 0, -1, xOrigin, yOrigin);
                            this.validateMove(x, y,-1,-1, xOrigin, yOrigin);
                            this.validateMove(x, y, -1, 0, xOrigin, yOrigin);
                            this.validateMove(x, y, -1, 1, xOrigin, yOrigin);
                            this.validateMove(x, y, 0, 1, xOrigin, yOrigin);
                            this.validateMove(x, y, 1, 1, xOrigin, yOrigin);
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
