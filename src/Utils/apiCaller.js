import axios from 'axios';
import {API_URL} from '../Contants/ApiAddress';

export default function apiCaller (endpoint,method,body) {
    return axios({
        method : method,
        url : `${API_URL}/${endpoint}`,
        data : body
    }).catch(res =>{
        console.log(res);
    })
}
