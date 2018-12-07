import axios from 'axios'


const KEY = 'AIzaSyAqF2a9NdEECHAoOEW8iIMljiwNjsHk0GM'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});