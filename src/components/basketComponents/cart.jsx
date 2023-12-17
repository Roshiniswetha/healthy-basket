import React, { memo, } from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux'
import { Button, Space, Popover, Empty, Image } from 'antd';
import { cartActions } from "components/store/productSlices/cartSlice";

import { ShoppingOutlined } from '@ant-design/icons';

const Cart = memo((props) => {

  const { cartItems } = props
  const {totalPrice} = useSelector(state=>state.cart)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRemove = (productId) => {
    return dispatch(cartActions.deleteItemFromCart(productId));
  };

  const handleProceedCheckout = () => {
    // dispatch(cartActions.toggleCartPopup());
    navigate("/checkout");
    // setOpen(false);
  };

  const cartContent =()=> (
      <div>
      {cartItems.length > 0 ?  
        cartItems.map(item=>{
          return(
            <div>
           <Space size={12}>
            <Image
              width={100}
              src={item.image}
              placeholder={
                <Image
                  preview={false}
                  src={item.imagePath}
                  width={100}
                />
            }
          />
          <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{item.quantity}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{totalPrice}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          <Button
            // type="primary"
            onClick={()=>handleRemove(item.id)}
          >
            X
          </Button>
        </Space>
          </div>
        )
        })
       
      : <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={
            <span>
              Your Cart is Empty!
            </span>
          }
        >
        </Empty>
        }
        { cartItems.length > 0 &&
            <Button
            //  type="primary"
            onClick={handleProceedCheckout}
          >
            Checkout
          </Button> 
        }
        </div>
)

  return (
    <div>
          <Popover content={cartContent} title="Title" trigger="click" placement="bottom">
            <Button shape="square" size="large" icon={<ShoppingOutlined />}/>
          </Popover>
    </div>
  );
})


export default Cart;