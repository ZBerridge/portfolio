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

    export default {
        mixins: [navCloser],
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
            showBody(){
                let pageBody = document.querySelector('body')
                let mainCss = document.querySelector('link[href="/dist/css/style.css"]')
                
                let startCheck = setInterval(mediaCheck, 100)
                function mediaCheck(){
                    let mediaCss = mainCss.getAttribute('media')
                    if(mediaCss == 'all'){
                        clearInterval(startCheck)
                        pageBody.style.removeProperty('display')
                    }
                }

            }
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
