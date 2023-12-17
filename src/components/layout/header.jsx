import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, Button, Typography, Space, Avatar, Badge, Popover, Empty, Image, Input } from 'antd';
import { SearchOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Cart } from 'components/basketComponents';
import H from 'assets/images/r.png'
import { searchSliceActions } from 'components/store/productSlices/searchSlice';
import { fruitsActions } from 'components/store/productSlices/fruitsSlice';

const { Header } = Layout;
const { Text } = Typography;
const { Search } = Input;

export default function HeaderComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {cartItems} = useSelector(state=>state.cart)
  const [open, setOpen] = useState(false);
  var count = 0

  // useEffect(() => {

  // }, [dispatch]);

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
  
  const handleSearchTerm = (event) => {
    const searchKeyword = event.target.value
    dispatch(searchSliceActions.setSearchTerm(searchKeyword))
    dispatch(fruitsActions.getFilteredFruitsBySearchTerm(searchKeyword));
  }

  return (
    <Header type="primary">
      <div className='headerName'>
        <img  className='headerImage' src={H}/>
        <Text>Healthy Basket</Text>
      </div>
      <Space size={16} wrap>
      <Search
      placeholder="input search text"
      allowClear
      onChange={handleSearchTerm}
      style={{ width: 304, display: 'flex' }}
    />
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