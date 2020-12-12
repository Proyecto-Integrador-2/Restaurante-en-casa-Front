import api from './api'

export default {
    
    postLogin(params) {
        return api().post('signin',params)
    },

    postUser(params) {
        return api().post('signup',params);
    },

}