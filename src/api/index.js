/*
* 这个文件可以封装一些用来操作的方法，例如：reqLogin、reqAddUser 等。
* 这写方法至需要传入一定的必须参数即可，以便达到简化上层应用的效果。
* */

import ajax from './ajax.js'

//通过post方法向后端发送登录请求。
export const reqLogin = (username, password) => {
    return ajax('/login', {username, password}, 'POST');
}

//通过post方法向后端发送注册请求
export const reqAddUser = (user) => {
    return ajax('/manage/admin/user', user, 'POST');
}

