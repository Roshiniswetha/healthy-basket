import React,{useState} from 'react'
// import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Content, Sider } = Layout;

export default function Drawer() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="drawer" style={{ display:"flex" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
      <Layout>
        <Content style={{ margin: '0 16px' }}>
        </Content>
      </Layout>
    </div>
  )
}