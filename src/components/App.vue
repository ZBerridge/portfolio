<template>
    <div class="home-logo-container d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12">
                <h4 id="home-logo" class="fade-in">{{ msg }}</h4>
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
        }
    }
</script>
