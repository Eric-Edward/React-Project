/*
* 这个文件的作用：通过axios来封装自己的Ajax请求方法。
* */
import axios from 'axios'
import {message} from 'antd'


//这个方法通过根据不同method的参数来选择不同的ajax请求方法。
export default function ajax(url, data = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
        let promise;

        if (method === 'GET') {
            promise = axios.get(url, {
                params: data
            });
        } else {
            promise = axios.post(url, data);
        }

        promise.then(response => {
            resolve(response)
        }).catch(error => {
            message.error('请求失败' + error.message,2)
        })
    })
}