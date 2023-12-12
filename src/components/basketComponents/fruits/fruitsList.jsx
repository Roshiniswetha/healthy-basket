import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Flex, Row, Col, Button } from 'antd';
import { cartActions } from 'components/store/productSlices/cartSlice';

const { Meta } = Card;

function FruitsList(props) {

  // const {fruits} = useSelector((state) => state.fruits);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {fruits} = useSelector((state) => state.fruits);

  const handleClick = () => {
    navigate('/apple')
  }
  // console.log(fruits);

  const handleAddToCart = (fruit) => {
    const product = { ...fruit, productQuantityInCart: 1 };
    dispatch(cartActions.addItemToCart(product));
    // setIsAdded(true);
    // setTimeout(() => {
    //   setIsAdded(false);
    // }, 3500);
  };
  // const handleRemoveFromCart = (fruit) => {
  //   const product = { ...fruit, productQuantityInCart: 1 };
  //   dispatch(cartActions.deleteItemFromCart(product));
  //   // setIsAdded(true);
  //   // setTimeout(() => {
  //   //   setIsAdded(false);
  //   // }, 3500);
  // };
  return (
    <div>
       <Flex wrap="wrap" gap="small">
      {/* <Row > */}
       {fruits && fruits?.map(data=>Object.entries(data).map((value)=>{
              // {Object.entries(data).map((value)=>{
              //     console.log(value[1])
              // })}
        return(
          // <Col className="gutter-row" span={8}>
          <Card
          cover={
            <img
              style={{ display: 'flex',width: '50%',height: '200px',objectFit: 'cover',marginTop:'10px'}}
              alt={value[1][0].name}
              src={`data:image;base64,${value[1][0].imagePath}`}
              onClick={handleClick}
            />
          }
          actions={[
            <MinusOutlined key="minus"/>,
            <Button onClick={()=>handleAddToCart(value[1][0])}>ADD TO CART</Button>,
            <PlusOutlined key="plus"  onClick={handleAddToCart}/>,
          ]}
        >
          <Meta
            title={value[1][0].name}
            description={value[1][0].description}
          />
          </Card>)
      }))} 

      </Flex>
       {/* </Row> */}
    </div>
  )
}

export default FruitsList;
// export default connect(mapStateToProps, null)(FruitsList);