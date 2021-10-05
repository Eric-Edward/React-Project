import React, {Component} from 'react';

import './index.less'
import {reqWeather} from "../../api";
import memoryUtil from '../../utils/memoryUtils'
import {deleteUser} from "../../utils/storageUtils";
import menuList from "../../config/menuList";
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd';
import LinkButton from "../link-button";

class Header extends Component {

    state = {
        time: '',
        info: {
            city: 'xxx',
            temperature: 11,
            weather: '晴'
        }
    }

    getWeather = async () => {
        const weather = await reqWeather()
        console.log('data', weather)
        this.setState({info: weather}, () => {
            console.log('我把状态修改了！')
        })
    }

    getTime = () => {
        this.getTimeInterval = setInterval(() => {

            this.setState({time: this.getFormatTime()})
        }, 1000)
    }

    getFormatTime = () => {
        const time = new Date();
        return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ':' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

    }

    getTitle = () => {
        const path = this.props.location.pathname;
        const url = path.substr(path.indexOf('/'))

        let title;

        menuList.map((item) => {
            if (item.children === null) {
                if (item.route === url) title = item.title
            } else {
                item.children.map((cItem) => {
                    if (cItem.route === url) title = cItem.title
                    return cItem;
                })
            }
            return title;
        })
        return title
    }


    logOut = () => {
        Modal.confirm({
            title: '您确定要退出吗?',
            onOk: () => {
                console.log('OK');
                deleteUser();
                memoryUtil.user = {};
                this.props.history.replace('/login')
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    }

    componentDidMount() {
        this.getTime()
        this.getWeather()
    }

    componentWillUnmount() {
        clearInterval(this.getTimeInterval);
    }

    render() {
        const {info, time} = this.state
        const title = this.getTitle()
        console.log(title)
        return (
            <div className={'header'}>
                <div className={'header-top'}>
                    <span>欢迎,{memoryUtil.user.username}</span>
                    <LinkButton onClick={this.logOut}>退出</LinkButton>
                </div>
                <div className={'header-bottom'}>
                    <div className={'header-bottom-left'}>{title}</div>
                    <div className={'header-bottom-right'}>
                        <span>{time}</span>
                        <span>{info.city}</span>
                        <span>{info.weather}</span>
                        <span>{info.temperature}°C</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);