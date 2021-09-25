import React, {Component} from 'react';


import {Menu} from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    ShoppingOutlined,
    ToolOutlined,
    UserOutlined,
    SolutionOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined
} from '@ant-design/icons';


import './index.less'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";


const {SubMenu} = Menu;


class LeftNav extends Component {

    state = {
        collapsed: false,
    };


    render() {
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
                    >

                        <Menu.Item key="1" icon={<HomeOutlined/>}>
                            <Link to={'/home'}>
                                首页
                            </Link>
                        </Menu.Item>


                        <SubMenu key="sub1" icon={<AppstoreOutlined/>} title="商品">

                            <Menu.Item key="2" icon={<ShoppingOutlined/>}>
                                <Link to={'/product/category'}>品类管理 </Link>
                            </Menu.Item>


                            <Menu.Item key="3" icon={<ToolOutlined/>}>
                                <Link to={'/product/products'}>商品管理 </Link>
                            </Menu.Item>

                        </SubMenu>


                        <Menu.Item key="4" icon={<UserOutlined/>}>
                            <Link to={'/user'}>
                                用户管理
                            </Link>
                        </Menu.Item>


                        <Menu.Item key="5" icon={<SolutionOutlined/>}>
                            <Link to={'/role'}>角色管理 </Link>
                        </Menu.Item>


                        <SubMenu key="sub2" icon={<AreaChartOutlined/>} title="图形图表">
                            <Menu.Item key="6" icon={<BarChartOutlined/>}>
                                <Link to={'/chart/bar'}>柱形图</Link>
                            </Menu.Item>

                            <Menu.Item key="7" icon={<LineChartOutlined/>}> <Link
                                to={'/chart/line'}>折线图 </Link>
                            </Menu.Item>

                            <Menu.Item key="8" icon={<PieChartOutlined/>}> <Link
                                to={'/chart/pie'}>并图 </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default LeftNav;