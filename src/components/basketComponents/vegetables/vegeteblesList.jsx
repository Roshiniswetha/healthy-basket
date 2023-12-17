import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Flex, Row, Col, Button } from 'antd';
import { cartActions } from 'components/store/productSlices/cartSlice';
import { vegetablesData } from 'assets/data/Vegetables';
import { vegetablesImage } from 'assets/images';

const { Meta } = Card;

function VegetablesList(props) {

  const { filteredVegetables } = useSelector((state) => state.vegetables);
  const { category } = useSelector((state) => state.category);
  const { searchTerm } = useSelector((state) => state.search);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (vegetable) => {
    const product = { ...vegetable, productQuantityInCart: 1 };
    dispatch(cartActions.addItemToCart(product));
  };
  return (
    <div>
       <Flex wrap="wrap" gap="small">
       {filteredVegetables.map(value=>{
        return(
          <Card
          cover={
            <img
              style={{ display: 'flex',width: '50%',height: '200px',objectFit: 'cover',marginTop:'10px'}}
              alt={value.name}
              src={value.image}
              // onClick={handleClick}
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
            description={`₹${value.price}`}
          />
          </Card>)
      })} 

      </Flex>
    </div>
  )
}

export default VegetablesList;
// export default connect(mapStateToProps, null)(VegetablesList);