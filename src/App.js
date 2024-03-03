import React, { useState, useEffect } from "react";

import {
  HomeOutlined,LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Breadcrumb,Button } from 'antd';

import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator
} from "@aws-amplify/ui-react";

import { NavLink, Outlet, useLocation } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const menuItems = [
  {
    label: 'topNews',
    key: '/topNews',
    icon: <HomeOutlined />,
  }
];
const App = ({ signOut, user }) => {
  console.log(user)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [currentMenu, setCurrentMenu] = useState({});
  // 定义selectedKeys，来控制菜单选中状态和切换页面
  const [selectedKeys, setSelectedKeys] = useState([]);
  // useLocation react-router自带hook，能获取到当前路由信息
  const location = useLocation();
  // 每次切换路由，获取当前最新的pathname,并赋给menu组件
  useEffect(() => {
    // location.pathname对应路由数据中的path属性
    setSelectedKeys([location.pathname]);
    // store current menu
    setCurrentMenu(menuItems.find((item) => item.key === location.pathname));
  }, [location]);
  return (

    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" style={{ height: 64, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>IDMB</div>
        <Menu
          defaultSelectedKeys={'topNews'}
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          items={menuItems.map((item) => {
            return {
              key: item.key,
              label: <NavLink to={item.key}>{item.label}</NavLink>,
              disabled: item.disabled,
              icon: item.icon,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
    justifyContent: 'end',
            padding: 0,
            paddingRight:20,
            background: colorBgContainer,
          }}
        ><div style={{paddingRight:10}}>Hello <span style={{color:'#1677ff'}}>{user.username}</span></div>
        <div onClick={signOut} style={{
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            color:'#1677ff',
            cursor:'pointer'
          }}><LogoutOutlined style={{fontSize:20, color:'#1677ff'}}/>Sign out</div></Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              height: '100%',
            overflowY: 'auto',
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {
              location.pathname != '/' &&
              location.pathname != '/topNews' &&
              <Breadcrumb items={
                [
                  {
                    href: '/',
                    title: <HomeOutlined />,
                  },
                  {
                    title: currentMenu?.label
                  }
                ]} />
            }
            <Outlet />

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );
};

export default withAuthenticator(App);