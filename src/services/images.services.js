import api from './api'


export default {

    postImage(image) {
        return api().post('imagerestaurant', image)
    }
}
