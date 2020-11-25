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
                                <div class="d-flex flex-column form-wrap">
                                    <h2 class="font-white pb-1">Contact</h2>
                                    <form id="contact-form">
                                        <div class="form-group">
                                            <input id="first_name" class="form-control form-control-lg" type="text" placeholder="First name" ref="first_name">
                                            <div v-bind:class="{'validation':true, 'invalid': !firstNameValid }" ref="first_name_validation">First name required.</div>
                                        </div>
                                        <div class="form-group">
                                            <input id="last_name" class="form-control form-control-lg" type="text" placeholder="Last name" ref="last_name">
                                            <div v-bind:class="{'validation':true, 'invalid': !lastNameValid }">Last name required.</div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" id="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" ref="email">
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                            <div v-bind:class="{'validation':true, 'invalid': !emailValid }">Valid email address required.</div>
                                        </div>
                                        <div class="form-group">
                                            <input id="body" class="form-control form-control-lg" type="text" placeholder="Leave a message..." ref="body">
                                        </div>
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input" id="ok_contact" ref="ok_contact">
                                            <label class="form-check-label" for="ok_contact">Ok to contact you?</label>
                                        </div>
                                        <button type="submit" @click.prevent="getFormValues()" class="btn btn-primary">Submit</button>
                                    </form>
                                    <div v-bind:class="{'redundant': true, 'd-none': !contactExists}">Contact already exists.  Thanks, though!</div>
                                    <div v-bind:class="{'success': true, 'd-none': !contactSuccess}">Thank you for your submission!</div>
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
    import {mediaChecker} from '../mixins/mediaChecker'
    import ApiCalls from '../api/apiServices'

    export default {
        name: "Contact",
        data(){
          return {
              show: false,
              form: {
                  fn: '',
                  ln: '',
                  email: '',
                  body: '',
                  contact: ''
              },
              emailValid: true,
              firstNameValid: true,
              lastNameValid: true,
              contactExists: false,
              contactSuccess: false
          }
        },
        methods: {
            showContact(){
                this.show = true
                console.log('Valid First Name: ' + this.firstNameValid)
                console.log('Valid Last Name: ' + this.lastNameValid)
                console.log('Valid Email: ' + this.emailValid)
                console.log('Contact Exists: ' + this.contactExists)
                console.log('Contact Success: ' + this.contactSuccess)
            },
            getFormValues(){
                console.log('processing form values...')
                this.form.fn = this.$refs.first_name.value
                this.form.ln = this.$refs.last_name.value
                this.form.email = this.$refs.email.value
                this.form.body = this.$refs.body.value
                this.form.contact = this.$refs.ok_contact.value

                let errors = 0;
                if (this.form.fn === ''){
                    this.firstNameValid = false
                    errors++
                }
                if (this.form.ln === ''){
                    this.lastNameValid = false
                    errors++
                }
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email )){
                    this.emailValid = false
                    errors++
                }
                if (!errors > 0){
                    let contactExists;
                    ApiCalls.checkContact(this.form.email)
                        .then(data => {
                            contactExists = data
                            if(contactExists != null){
                                console.log(contactExists.msg)
                                if(parseInt(contactExists.msg) < 1){
                                    console.log('contact does not exist, inserting into database...')
                                    let formSubmitted = ApiCalls.insertContact(this.form)
                                    console.log(formSubmitted)
                                    if (formSubmitted === 'exists'){
                                        this.contactExists = true
                                    } else {
                                        this.contactSuccess = true
                                    }
                                } else {
                                    console.log('contact already exists...')
                                    this.contactExists = true
                                }
                            } else {
                                console.log('null return')
                            }
                        }).catch(error => console.log(error))

                }
            },
        },
        mixins: [navCloser, mediaChecker],
        mounted(){
            this.closeNav()
            this.showBody()
            this.showContact()
        }
    }
</script>
