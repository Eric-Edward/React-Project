import {
    AppstoreOutlined, AreaChartOutlined, BarChartOutlined,
    HomeOutlined, LineChartOutlined, PieChartOutlined,
    ShoppingOutlined,
    SolutionOutlined,
    ToolOutlined,
    UserOutlined
} from "@ant-design/icons";
import React from "react";

const menuList = [
    {
        title: '首页',
        route: '/home',
        key: '/home',
        icon: <HomeOutlined/>,
        children: null
    },
    {
        title: '商品',
        route: '/product',
        key: '/product',
        icon: <AppstoreOutlined/>,
        children: [
            {
                title: '品类管理',
                route: '/product/category',
                key: '/product/category',
                icon: <ShoppingOutlined/>,
                children: null
            },
            {
                title: '商品管理',
                route: '/product/products',
                key: '/product/products',
                icon: <ToolOutlined/>,
                children: [
                    {
                        title: '品管理',
                        route: '/product/products/1',
                        key: '/product/products/1',
                        icon: <ShoppingOutlined/>,
                        children: null
                    }
                ]

            }
        ]
    },
    {
        title: '用户管理',
        route: '/user',
        key: '/user',
        icon: <UserOutlined/>,
        children: null
    },
    {
        title: '角色管理',
        route: '/role',
        key: '/role',
        icon: <SolutionOutlined/>,
        children: null
    },
    {
        title: '图形图表',
        route: '/chart',
        key: '/chart',
        icon: <AreaChartOutlined/>,
        children: [
            {
                title: '柱状图',
                route: '/chart/bar',
                key: '/chart/bar',
                icon: <BarChartOutlined/>,
                children: null
            },
            {
                title: '折线图',
                route: '/chart/line',
                key: '/chart/line',
                icon: <LineChartOutlined/>,
                children: null
            },
            {
                title: '饼状图',
                route: '/chart/pie',
                key: '/chart/pie',
                icon: <PieChartOutlined/>,
                children: null
            }
        ]
    }
]

export default menuList;