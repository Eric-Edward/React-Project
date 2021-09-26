import React, {Component} from 'react';


import {Menu} from 'antd';


import './index.less'
import logo from '../../assets/images/logo.png'
import {Link, withRouter} from "react-router-dom";
import menuList from "../../config/menuList";


const {SubMenu} = Menu;


class LeftNav extends Component {

    getMenuList = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.route}>
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuList(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    getOpenKeys(path) {
        // const path = this.props.location.pathname;
        let segments = path.split('/')
        segments.shift();
        segments.pop();
        console.log(segments)

        segments.reduce((prev, value) => {

            prev += value
        }, '/')
    }


    render() {
        const path = this.props.location.pathname;
        console.log('render()', path);
        this.getOpenKeys(path);
        return (
            <div className={'left-nav'}>
                <Link to={'/home'} className={'left-nav-header'}>
                    <img src={logo} alt="照片加载失败！"/>
                    <h2>管理后台</h2>
                </Link>
                <div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        selectedKeys={[path]}
                        defaultOpenKeys={['/product', '/chart']}
                    >
                        {
                            this.getMenuList(menuList)
                        }
                    </Menu>
                </div>
            </div>
        );
    }
}

export default withRouter(LeftNav);