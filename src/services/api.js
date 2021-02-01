import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://ec2-34-229-87-41.compute-1.amazonaws.com:3000/'
  })
}