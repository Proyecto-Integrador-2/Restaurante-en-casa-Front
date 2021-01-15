import api from './api'

const token = localStorage.token;

export default {

    getRestaurants() {
        return api().get('restaurant')
    },
    getRestaurantById(id) {
        return api().get(`restaurant/${id}`)
    },
    getRestaurantByUser() {
        return api().get('restaurantuser', {headers: {'Authorization': token}})
    },
    postRestaurant(data) {
        return api().post('restaurant', data, {headers: {'Authorization': token}})
    }

}