/*
* 这个文件的作用：通过axios来封装自己的Ajax请求方法。
* */
import axios from 'axios'


//这个方法通过根据不同method的参数来选择不同的ajax请求方法。
export default function ajax(url, data = {}, method = 'GET') {
    if (method === 'GET') {
        return axios.get(url, {
            params: data
        });
    } else {
        return axios.post(url, data);
    }
}