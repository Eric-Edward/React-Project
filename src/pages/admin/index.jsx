import React, {Component} from 'react';
import {Layout} from 'antd';


import memoryUtils from '../../utils/memoryUtils'
import {Redirect, Switch, Route} from "react-router-dom";

import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

import Home from './home'
import Category from "./product/category";
import Products from "./product/products";
import User from "./user";
import Role from "./role";
import Bar from "./chart/bar";
import Line from "./chart/line";
import Pie from "./chart/pie";

const {Footer, Sider, Content} = Layout;

class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        console.log('Admin', user);
        console.log(user.id)
        if (!user || !user.id) return <Redirect to={'/login'}/>
        return (
            <Layout style={{height: '100%'}}>
                <Sider width='15%'>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor: 'white'}}>
                        <Switch>
                            <Route path={'/home'} component={Home}/>
                            <Route path={'/product/category'} component={Category}/>
                            <Route path={'/product/products'} component={Products}/>
                            <Route path={'/user'} component={User}/>
                            <Route path={'/role'} component={Role}/>
                            <Route path={'/chart/bar'} component={Bar}/>
                            <Route path={'/chart/line'} component={Line}/>
                            <Route path={'chart/pie'} component={Pie}/>
                            <Redirect to={'/home'}/>
                        </Switch>
                    </Content>
                    <Footer
                        style={{textAlign: 'center', color: '#aaaaaa', fontWeight: 'bold'}}>推荐使用谷歌浏览器!</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;