<template>
    <div>
        <home-banner></home-banner>
        <home-qualifications></home-qualifications>
    </div>
</template>
<script>
    import ParticleBanner from './ParticleBanner/ParticleBanner'
    import HomeBanner from './HomeBanner'
    import HomeQualifications from './HomeQualifications'
    import {navCloser} from '../mixins/navCloser'
    import {mediaChecker} from '../mixins/mediaChecker'

    export default {
        mixins: [navCloser, mediaChecker],
        data () {
            return {
                msg: '',
                testMsg : 'But that\'s how it always begins... very small.'
            }
        },
        methods: {
            renderMsg(){
                this.msg = this.testMsg
            },
        },
        components: {
            'home-banner' : ParticleBanner,
            'home-qualifications' : HomeQualifications
        },
        mounted(){
            this.closeNav()
            this.renderMsg()
            this.showBody()
        }
    }
</script>
