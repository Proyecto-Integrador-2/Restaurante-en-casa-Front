import api from './api'

const token = localStorage.getItem("token");

export default {
    
    getUser() {
        return api().get('user', {headers: {'Authorization': token}})
    },

}