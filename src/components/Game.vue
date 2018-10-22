<template>
    <div>
        <router-view name="game"></router-view>
        <div class="home-logo-container d-flex align-items-center justify-content-center">
            <h4 id="home-logo" class="fade-in">{{ msg }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: '',
                testMsg : 'And this is a game'
            }
        },
        methods: {
            renderMsg(){
                this.msg = this.testMsg
            }
        },
        mounted(){
            this.renderMsg()
        }
    }
</script>
