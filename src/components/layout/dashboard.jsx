import React from 'react'
import { Layout } from 'antd';
import { Header } from '.'
import { Footer } from '.'
import { Breadcrumbs } from '.'
import { Drawer } from '.'
import { Home } from 'components/pages';

function Dashboard() {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Drawer />
        <Breadcrumbs/>
        <Home />
        <Footer />
      </Layout>
    </div>
  )
}

export default Dashboard