import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Flex, Row, Col, Button } from 'antd';
import { cartActions } from 'components/store/productSlices/cartSlice';
import { fruitsData } from 'assets/data/Fruits';
import { fruitsImage } from 'assets/images/fruitsImages';

const { Meta } = Card;

function FruitsList(props) {

  // const {fruits} = useSelector((state) => state.fruits);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {fruits} = useSelector((state) => state.fruits);

  const handleClick = () => {
    navigate('/apple')
  }
  // console.log(fruits);

  const handleAddToCart = (fruit) => {
    const product = { ...fruit, productQuantityInCart: 1 };
    dispatch(cartActions.addItemToCart(product));
  };
  return (
    <div>
       <Flex wrap="wrap" gap="small">
       {fruitsData.map(value=>{
        return(
          <Card
          cover={
            <img
              style={{ display: 'flex',width: '50%',height: '200px',objectFit: 'cover',marginTop:'10px'}}
              alt={value.name}
              src={fruitsImage.find(item=>Object.keys(item)[0]===(value.name).split(' ')[0])}
              onClick={handleClick}
            />
          }
          actions={[
            <MinusOutlined key="minus"/>,
            <Button onClick={()=>handleAddToCart(value)}>ADD TO CART</Button>,
            <PlusOutlined key="plus"  onClick={handleAddToCart}/>,
          ]}
        >
          <Meta
            title={value.name}
            description={value.price}
          />
          </Card>)
      })} 

      </Flex>
       {/* </Row> */}
    </div>
  )
}

export default FruitsList;
// export default connect(mapStateToProps, null)(FruitsList);