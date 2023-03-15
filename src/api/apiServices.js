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
    }
}