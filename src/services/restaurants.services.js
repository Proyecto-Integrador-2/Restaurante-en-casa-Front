import api from './api'

export default {
    
    getRestaurants() {
        return api().get('restaurant')
    },

    getRestaurantById(id) {
        return api().get(`restaurant/${id}`)
    }

}