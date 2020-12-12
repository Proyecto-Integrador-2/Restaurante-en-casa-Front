import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://ec2-34-227-242-84.compute-1.amazonaws.com:3000/'
  })
}