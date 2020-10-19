import api from './api'

export default {
    
    getRestaurants() {
        return api().get('restaurant')
    }

}