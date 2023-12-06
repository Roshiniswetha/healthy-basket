import React from 'react'
import { Layout, theme, Menu } from 'antd';

const { Header } = Layout;

export default function HeaderComponent() {
  return (
    <Header className="ant-layout-header appbar-header" type="primary"style={{ display: 'flex', alignItems: 'center' }}>
      <Menu
        className="ant-menu"
        type="primary"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', width: '100%' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}