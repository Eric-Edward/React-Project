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
                    <Menu.Item key={item.key} icon={item.icon} className={'menu-item'}>
                        <Link to={item.route}>
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title} className={'menu-item'}>
                        {this.getMenuList(item.children)}
                    </SubMenu>
                )
            }
        })
    }


    /**
     * 这个函数用来找到当前路径所在的路由地址，并以此将其展开。
     * @param path 传入当前的路径。
     * @returns {*} 返回除根路径和末级路径的路由。
     */
    getOpenKeys(path) {
        let segments = path.split('/')
        segments.shift();
        segments.pop();
        // console.log(segments)

        let ans = segments.map((segment, index) => {
            let seg = '';
            for (let i = 0; i <= index; i++) {
                seg = seg + '/' + segments[i]
            }
            return seg
        })
        return ans
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
                        defaultOpenKeys={this.getOpenKeys(path)}
                        style={{fontsize: '18px'}}
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