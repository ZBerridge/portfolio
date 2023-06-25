<script setup>
    import OthelloGame from '../scripts/Othello'
    import { onMounted } from 'vue'

    onMounted(() => {
        OthelloGame.othelloGame()
    })
</script>
<template>
    <section id="othelloSection" class="pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="section-title text-center">Othello Game</h1>
                    <p class="pt-3">This is the little script that started my career.  At my last semester at Quinsigamond Community College, we had an internship program to complete.  A job fair of sorts was scheduled for us to meet the companies and institutions that were looking for interns. We practiced interviewing, we updated our resumes, and we were asked to supply a code example the day of the fair.</p>
                    <p class="py-1">I looked through my school assignments for a suitable submission, but none of them felt right.  I wanted to demonstrate some initiative.  I remembered an old forum post about a student in a Java class, misunderstanding his homework assignment.  Instead of creating a checkerboard pattern, he wrote a playable game of checkers.  I was inspired.  I decided I'd make  a playable game of Othello in Javascript.</p>
                    <p class="pb-3">So here's my 3 year old code, the self-assigned project that helped get me where I am today.  Its sort of funny to look at it now.  I did have to modify the script mildly in order to make it all work within this single-page application, but this is mostly the same old beast I created 3 and a half years ago</p>
                </div>
            </div>
            <div class="othello-game-container row">
                <div class="col-12 d-flex justify-content-center">
                    <figure id="scoreBoard">
                    </figure>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <figure id="othelloGame">
                    </figure>
                </div>
                <div class="col-12 d-flex othello-controls justify-content-center">
                    <button type="button" class="btn btn-dark" id="newGame">
                        New Game!
                    </button>
                    <button type="button" class="btn btn-dark" id="skipTurn">
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>