import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons'

import './index.less'
import logo from './images/logo.png'

class Login extends Component {

    onFinish = (event) => {
        console.log('Received values of form: ', event)
        alert(`username:${event.username},password:${event.password}`);
    };

    validatePwd = (rule, value, callback) => {
        if (!value) callback('密码不能为空！');
        else if (value.length < 4) callback('密码不能少于4位');
        else if (value.length > 12) callback('密码不能多于12位');
        else if (!/^[a-zA-Z0-9_]+$/.test(value)) callback('密码必须由大小写字母、数字以及下划线构成')
        else callback();
    }


    render() {
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
                                {validator: this.validatePwd}
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