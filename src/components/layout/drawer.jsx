import React,{useState} from 'react'
// import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Breadcrumbs } from '.';

const { Content, Sider } = Layout;

const conicColors = { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' };

export default function Drawer() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={{ primaryColor: '#d3f261' }}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="Fruits">
              <span>Fruits</span>
            </Menu.Item>
            <Menu.Item key="Vegetables">
              <span>Vegetables</span>
            </Menu.Item>
            <Menu.Item key="Cereals">
              <span>Cereals</span>
            </Menu.Item>
          </Menu>
      </Sider>
        <Breadcrumbs />
      </Layout>
  )
}