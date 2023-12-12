import React from 'react'
import { Layout, Space, theme, Row, Col } from 'antd';
import { TwitterOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const { Footer } = Layout;

export default function FooterComponent() {
  return (
      <Footer className="footer">
        <Row>
            <Col>
              <a href="https://github.com/Roshiniswetha/healthy-basket-frontend" target="_blank" rel="noopener noreferrer">
                <GithubOutlined  style={{ color: '#D2DE32' }}/>View Source on Github
              </a>
            </Col>
            <Col>
              <a href="mailto:contact@swetharavindran24@gmail.com" target="_blank" rel="noopener noreferrer">
                <MailOutlined  style={{ color: '#D2DE32' }}/>Need any help?
              </a>
            </Col>
            <Col>
              <a href="https://twitter.com/Roshiniswetha" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined  style={{ color: '#D2DE32' }}/>Say Hi on Twitter
              </a>
            </Col>
        </Row>
      </Footer>
  )
}