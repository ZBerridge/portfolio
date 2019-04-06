<template>
    <section id="contact" class="pb-4 pt-4 d-flex align-items-center bg-darkgrey">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <transition name="slide-fade">
                        <div v-if="show" class="contact-details row">
                            <div class="col-12 col-sm-6">
                                <div class="contact-img-wrapper scanlines">
                                    <img class="img-fluid" src="/dist/assets/img/profile_pic.jpg" alt="Zack Berridge">
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="d-flex flex-column">
                                    <h2 class="font-white pb-1">Contact Info:</h2>
                                    <span class="contact-email py-1"><a href="mailto:zack.berridge@gmail.com">zack.berridge@gmail.com</a></span>
                                    <div class="d-flex flex-row sm-links">
                                        <span class="contact-fb py-1"><a href="https://www.facebook.com/ZacharyBBerridge" target="_blank"><i class="fa fa-facebook-square fa-3x"></i></a></span>
                                        <span class="contact-li py-1"><a href="https://www.linkedin.com/in/zberridge" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {navCloser} from '../mixins/navCloser'

    export default {
        name: "Contact",
        data(){
          return {
              show: false
          }
        },
        methods: {
            showContact(){
                this.show = true
            }
        },
        mixins: [navCloser],
        mounted(){
            this.closeNav()
            this.showContact()
        }
    }
</script>
