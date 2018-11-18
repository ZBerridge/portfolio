<template>
    <main class="col-12 bd-content px-0" role="main">
        <bio-section></bio-section>
        <contact-section></contact-section>
    </main>
</template>
<script>
    import BioSection from './BioSection'
    import ContactSection from "./ContactSection"

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
            'contact-section' : ContactSection,
            'bio-section' : BioSection
        },
        mounted(){
            this.renderMsg()
        }
    }
</script>
