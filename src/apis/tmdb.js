import axios from 'axios';

const KEY = 'a007b887b49706263b3fb31d7ef95cab';

export default axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    params: {
        api_key: KEY
    }
});

