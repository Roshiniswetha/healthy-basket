import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, Menu, Button, Typography, Space, Avatar, Badge, Popover, Empty, Image } from 'antd';
import { SearchOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Cart } from 'components/basketComponents';

const { Header } = Layout;
const { Text } = Typography;

export default function HeaderComponent() {
  const navigate = useNavigate();
  const {cartItems} = useSelector(state=>state.cart)
  const [open, setOpen] = useState(false);
  var count = 0

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = () => {
    setOpen(true);
  };

  const handleCartClick = () =>{
    setOpen(!open)
  }

  const handleLoginClick = () =>{
    navigate(`/login`)
  }

  return (
    <Header type="primary">
      <div className='headerName'>
        <Text>Healthy Basket</Text>
      </div>
      <Space size={16} wrap>
        <Button icon={<SearchOutlined />}>Type Something...</Button>
        <Badge count={cartItems ? cartItems.length: 0}>
        <div>
          <Popover
          content={<Cart />}
          title="Title"
          trigger="click"
          open={open}
          // onOpenChange={handleOpenChange}
          >
            <Button shape="square" size="large" icon={<ShoppingOutlined />} onClick={handleCartClick}/>
          </Popover>
        </div>
        </Badge>
          <Avatar shape="round" style={{ backgroundColor: '#BED754' }} icon={<UserOutlined />} onClick={handleLoginClick}/>
      </Space>
    </Header>
  )
}