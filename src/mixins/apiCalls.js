import Axios from 'axios'

export const apiCall = {
    methods: {
        makeCall: function (url, params) {
            return Axios.get(url + params).then(response => {
                return response
            }).catch(e => {
                console.log('There was an error retrieving data from the api: ' + e)
            })
        }
    }
}
