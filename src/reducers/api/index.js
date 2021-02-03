import axios from 'axios';


const baseUrl = 'https://www.omdbapi.com?apikey=3c566bde';

export const apiCall =(url,data,headers,method)=>axios({
    method,
    url:baseUrl + url,
    data,
    headers
})