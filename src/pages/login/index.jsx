import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {Redirect} from "react-router-dom";

import './index.less'
import logo from './images/logo.png'
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import {saveUser} from '../../utils/storageUtils'

class Login extends Component {

    onFinish = async (value) => {
        console.log('Received values of form: ', value)
        alert(`登录成功！\r\n username:${value.username},password:${value.password}`);
        /*reqLogin(value.username, value.password).then(response => {
                console.log('发送请求成功！', response.data);
            }
        ).catch(error => {
            console.log('发送请求失败！', error);
        })*/
        /*try {
            const response = await reqLogin(value.username, value.password);
            console.log(response.data)
        } catch (error) {
            console.log("请求出错了！", error)
        }*/

        const response = await reqLogin(value.username, value.password);
        memoryUtils.user = response.data
        saveUser(response.data)

        this.props.history.replace('/')
        message.success('登陆成功！', 3)
        console.log(response.data);
    };

    onFinishFailed = (value) => {
        console.log(value);
    }


    render() {
        const user = memoryUtils.user;
        if (user && user.id) {
            message.info('您已经登陆！', 2);
            return <Redirect to={'/'}/>
        }

        return (
            <div className={'login'}>
                <header className={'login-header'}>
                    <img src={logo} alt="照片加载失败！"/>
                    <h1>React,学习!!!。</h1>
                </header>
                <div className={'login-content'}>
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {required: true, message: '用户名必须输入！'},
                                {max: 12, message: '用户名长度不能大于12'},
                                {min: 4, message: '用户名长度不能小于4'},
                                {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必大小写字母、数字以及下划线构成'}
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="用户名"
                                style={{color: 'rgba(0,0,0,.25)'}}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {required: true, message: '密码必须输入！'},
                                {max: 12, message: '密码长度不能大于12'},
                                {min: 4, message: '密码长度不能小于4'},
                                {pattern: /^[a-zA-Z0-9_]+$/, message: '密码必大小写字母、数字以及下划线构成'}
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                                style={{color: 'rgba(0,0,0,.25)'}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;