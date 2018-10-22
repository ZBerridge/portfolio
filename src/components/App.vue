<template>
    <div class="container-fluid">
        <router-view name="home"></router-view>
        <div class="home-logo-container d-flex align-items-center justify-content-center">
            <h4 id="home-logo" class="fade-in">{{ msg }}</h4>
        </div>
        <div class="d-none container-fluid">
            <div class="row">
                <div class="col-12 text-center"><router-link :to="{ name: 'game' }">Let's play a game...</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: '',
                testMsg : 'But that\'s how it always begins... very small.'
            }
        },
        methods: {
            renderMsg(){
                this.msg = this.testMsg
            }
        },
        mounted(){
            this.renderMsg()
            /*        <div class="row d-flex justify-content-center">
            <ul class="fade-in">
                <li><router-link :to="'game'">Game</router-link></li>
            </ul>
        </div>
        <router-view :Game="game">Game</router-view> */
        }
    }
</script>
