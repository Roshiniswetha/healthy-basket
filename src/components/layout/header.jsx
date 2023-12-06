import React from 'react'
import { Layout, theme } from 'antd';

const { Header } = Layout;

export default function HeaderComponent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className='header'>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
      </Layout>
    </div>
  )
}