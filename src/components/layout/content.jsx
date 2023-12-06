import React from 'react'
import { Breadcrumb, Layout } from 'antd';
import { ProductList } from 'components/basketComponents'

const {Content} = Layout;

export default function MainPageContent() {
  return (
      <Layout>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Fruits</Breadcrumb.Item>
            <Breadcrumb.Item>Apple</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
        <ProductList />
        </Layout>
  )
}