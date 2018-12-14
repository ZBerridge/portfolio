<template>
    <div>
        <home-banner></home-banner>
        <home-qualifications></home-qualifications>
        <othello-game></othello-game>
    </div>
</template>
<script>
    import HomeBanner from './HomeBanner'
    import HomeQualifications from './HomeQualifications'
    import OthelloGame from './Othello'

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
        components: {
            'home-banner' : HomeBanner,
            'home-qualifications' : HomeQualifications//,
            //'othello-game': OthelloGame
        },
        mounted(){
            this.renderMsg()
        }
    }
</script>
