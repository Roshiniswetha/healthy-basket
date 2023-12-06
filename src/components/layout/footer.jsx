import React from 'react'
import { Layout, theme } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';

const { Footer } = Layout;

export default function FooterComponent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
      <Footer className="footer"><TwitterOutlined  style={{ color: '#D2DE32' }}/></Footer>
  )
}