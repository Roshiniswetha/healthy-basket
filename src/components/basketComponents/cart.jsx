import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux'
import { Layout, Menu, Button, Typography, Space, Avatar, Badge, Popover, Empty, Image,Card } from 'antd';
import { cartActions } from "components/store/productSlices/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    return dispatch(cartActions.deleteItemFromCart(productId));
  };

  const handleProceedCheckout = () => {
    dispatch(cartActions.toggleCartPopup());
    navigate.push("/checkout");
  };

  return (
    <div>
      {cartItems.length > 0 ?  
        cartItems.map(item=>{
          return(
            <div>
           <Space size={12}>
            <Image
              width={200}
              src={`data:image;base64,${item.imagePath}`}
              placeholder={
                <Image
                  preview={false}
                  src={`data:image;base64,${item.imagePath}`}
                  width={200}
                />
            }
          />
          <Button
            // type="primary"
            onClick={()=>handleRemove(item.id)}
          >
            X
          </Button>
        </Space>

           <Button
            //  type="primary"
            onClick={handleProceedCheckout}
          >
            Checkout
          </Button> 
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
    </div>
  );
};

export default Cart;
