<template>
    <div class="othello-game-container">
        <div class="row">
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
                playerTwoScore: 0
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
                console.log(this.gameArray);
            },
            refreshGrid: function() {
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
                this.refreshGrid();
                this.playerColor = "white";
                this.oppColor = "black";

            },
            playerTurn: function(x, y) {
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
            validateMove: function(x, y, xMove, yMove, xOrigin, yOrigin) {
                let xCo = eval("x + xMove");
                let yCo = eval("y + yMove");
                if (this.gameArray[xCo][yCo] == this.oppColor) {
                    this.validateMove(xCo, yCo, xMove, yMove, xOrigin, yOrigin);
                }
                else if (this.gameArray[xCo][yCo] == this.playerColor) {
                    this.fillMove(xOrigin, yOrigin, xCo, yCo, xMove, yMove);
                }

            },
            fillMove: function(xO, yO, xF, yF, xMove, yMove) {
                while ((xO !== xF) || (yO != yF)) {
                    this.gameArray[xO][yO] = this.playerColor;
                    xO = xO + xMove;
                    yO = yO + yMove;
                }
                this.refreshGrid();

            },
            nextTurn: function() {
                if (this.playerColor == "white") {
                    this.playerColor = "black";
                    this.oppColor = "white";
                }
                else {
                    this.playerColor = "white";
                    this.oppColor = "black";
                }
            }
        }
    }
</script>
