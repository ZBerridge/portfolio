import Axios from 'axios'

export default {
    getPost(slug) {
        return Axios.get('zb-post/?slug=' + slug + '&full=true').then(response => {
            return response.data
        })
    },

    getPosts(count, skip) {
        return Axios.get('zb-posts/?count=' + count + '&skip=' + skip + '&full=true').then(response => {
            return response.data
        })
    },

    getPage(page_name) {
        return Axios.get('zb-page/?page=' + page_name).then(response => {
            return response.data
        })
    },
    checkContact(email){
        return Axios.get('zb-contact-check/?email=' + email).then(response => {
            return response.data
        })
    },
    insertContact(form){

        let msg = ''
        Axios.post('zb-contact',{
            fn: form.fn,
            ln: form.ln,
            ea: form.email,
            body: form.body,
            contact: form.contact
        }).then( function (response) {
            msg = 'success'
        }).catch( function (error) {
            msg = 'error'
        });
         return msg

    }
}
