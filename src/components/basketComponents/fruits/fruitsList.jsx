import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Flex, Row, Col, Button } from 'antd';
import { cartActions } from 'components/store/productSlices/cartSlice';

const { Meta } = Card;

function FruitsList(props) {

  const {fruits} = useSelector((state) => state.fruits);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/apple')
  }

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
      <Row gutter={16}>
      {fruits && (fruits).map(fruit=>fruit.map(data=>{
        return(
          <Col className="gutter-row" span={8}>
          <Card
          cover={
            <img
              style={{ width: '100%',
                height: '200px',
                objectFit: 'cover'}}
              alt={data.name}
              src={`data:image;base64,${data.imagePath}`}
              onClick={handleClick}
            />
          }
          actions={[
            <MinusOutlined key="minus"/>,
            <Button onClick={()=>handleAddToCart(data)}>ADD TO CART</Button>,
            <PlusOutlined key="plus"  onClick={handleAddToCart}/>,
          ]}
        >
          <Meta
            title={data.name}
            description={data.description}
          />
          {/* <button
          // className={!isAdded ? "" : "added"}
            type="button"
            onClick={()=>handleAddToCart(data)}
          >
            ADD TO CART */}
            {/* {!isAdded ? "ADD TO CART" : "✔ ADDED"} */}
          {/* </button> */}
          </Card>
          </Col>)
      }))}
      </Row>
    </div>
  )
}

export default FruitsList;
// export default connect(mapStateToProps, null)(FruitsList);