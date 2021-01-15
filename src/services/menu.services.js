import api from './api'

const token = localStorage.token;

export default {

    getMenu() {
        return api().get('menu', {headers: {'Authorization': token}})
    },
    postMenu(data) {
        return api().post('menu', data, {headers: {'Authorization': token}})
    }
}