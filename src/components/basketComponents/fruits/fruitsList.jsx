import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Flex, Row, Col, Button } from 'antd';
import { cartActions } from 'components/store/productSlices/cartSlice';
import { fruitsData } from 'assets/data/Fruits';
import { fruitsImage } from 'assets/images';

const { Meta } = Card;

function FruitsList(props) {

  const { filteredFruits } = useSelector((state) => state.fruits);
  const { category } = useSelector((state) => state.category);
  const { searchTerm } = useSelector((state) => state.search);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/apple')
  }
  // const handleFruitsData = () =>{
  //   let filteredFruits 
  //   filteredFruits = (category==='All') ? allFruits : allFruits.filter(fruit=>fruit.category===category);
  //   filteredFruits = (searchTerm==='') ? allFruits : allFruits.filter(fruit=>fruit.category.toLowerCase().includes(searchTerm.toLowerCase()));
  //   return filteredFruits
  // }

  // useEffect(() => {
  //   // dispatch(updateFilteredValues(allValues, searchTerm));
  //   getFruits()
  // }, [dispatch]);

  // const fruits = handleFruitsData()
  // category === 'All' ? fruitsData : fruitsData.filter(fruit=>fruit.category===category);

  const handleAddToCart = (fruit) => {
    const product = { ...fruit, productQuantityInCart: 1 };
    dispatch(cartActions.addItemToCart(product));
  };
  return (
    <div>
       <Flex wrap="wrap" gap="small">
       {filteredFruits.map(value=>{
        return(
          <Card
          cover={
            <img
              style={{ display: 'flex',width: '50%',height: '200px',objectFit: 'cover',marginTop:'10px'}}
              alt={value.name}
              src={value.image}
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
            description={`₹${value.price}`}
          />
          </Card>)
      })} 

      </Flex>
    </div>
  )
}

export default FruitsList;
// export default connect(mapStateToProps, null)(FruitsList);