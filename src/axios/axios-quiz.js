import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-8aa8c.firebaseio.com/'
})