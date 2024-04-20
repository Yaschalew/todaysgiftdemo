import './Admin.css'
import React from 'react';
import { DashboardOutlined, OrderedListOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const itemName = ["Dashboard", "Categories", "Product", "Users", "Settings"]
const itemName2 = [{route: "/admin/",label:"Dashboard"}, {route: "/admin/category",label:"Categories"}, {route: "/admin/product",label:"Product"},{route: "/admin/user", label:"Users"}, {route: "/admin/setting",label:"Settings"}]
const items = [DashboardOutlined, OrderedListOutlined, OrderedListOutlined, UserOutlined, SettingOutlined].map(
  (icon, index) => ({
    key: String(index),
    icon: React.createElement(icon),
    label: <Link to={itemName2[index].route}>{itemName2[index].label}</Link> ,
  }),
);

const Admin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='admin'>
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
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Today's Gift ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;