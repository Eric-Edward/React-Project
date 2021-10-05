/*
* 这个文件可以封装一些用来操作的方法，例如：reqLogin、reqAddUser 等。
* 这写方法至需要传入一定的必须参数即可，以便达到简化上层应用的效果。
* */

import ajax from './ajax.js'
import jsonp from 'jsonp'


//通过post方法向后端发送登录请求。
export const reqLogin = (username, password) => {
    return ajax('/login', {username, password}, 'POST');
}

//通过post方法向后端发送注册请求
export const reqAddUser = (user) => {
    return ajax('/manage/admin/user', user, 'POST');
}

export const reqWeather = async () => {
    let weather = {
        city: null,
        temperature: 0,
        weather: null
    };

    const url_ip = `https://restapi.amap.com/v3/ip?key=d28cebbf140ed84f2f5cb8e15cc73224`
    jsonp(url_ip, {}, (err, data) => {
        // console.log('jsonp()', err, data)
        weather.city = data.adcode;
    })
    setTimeout(() => {
        // console.log('citycode', weather.city)
        const url_weather = `https://restapi.amap.com/v3/weather/weatherInfo?city=${weather.city}&key=d28cebbf140ed84f2f5cb8e15cc73224`
        jsonp(url_weather, {}, (err, data) => {
            // console.log('jsonp()', err, data)
            weather.city = data.lives[0].city;
            weather.weather = data.lives[0].weather;
            weather.temperature = data.lives[0].temperature
        })
    }, 1000)
    return weather;
}
