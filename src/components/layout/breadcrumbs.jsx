import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd';

const {Content} = Layout;

export default function Breadcrumbs() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Fruits</Breadcrumb.Item>
            <Breadcrumb.Item>Apple</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </Layout>
    </div>
  )
}