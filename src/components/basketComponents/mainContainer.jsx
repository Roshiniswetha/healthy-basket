import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"

import { Image } from 'antd';
import { Carousel, Card, Row, Col, Flex, Typography } from "antd";
import vegetables from './../../assets/videos/vegetables.mp4'
import fruits from './../../assets/videos/fruits.mp4'
import milk from './../../assets/videos/milk.mp4'
import healthyFood from 'assets/images/HealthyFood.png'
import BudgetFriendly from 'assets/images/BudgetFriendly.png'
import { vegetablesData } from "assets/data/Vegetables";
import { categorySliceActions } from 'components/store/productSlices/categorySlice';

const { Text, Link } = Typography;

const imageStyle = {
flex: 1,
width: '100%',
height: '100%',
resizeMode: 'center',
}

const carouselData = [
  {
    name: 'fruits',
    img: `${healthyFood}`,
  },
  {
    name: 'cereals',
    img: `${BudgetFriendly}`,
  }
]

const categoriesList = [
  {
    title: 'fruits',
    source: fruits,
  },
  {
    title: 'vegetables',
    source:  vegetables,
  },
  {
    title: 'DailyEssentials',
    source: milk,
  }
]


function MainContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(categorySliceActions.setFruitCategory('All'))
    dispatch(categorySliceActions.setVegetableCategory('All'))
  },[])
  const handleClick = (title) =>{
    navigate(`/categories/${title}`)
  }
  return (
    <div>
      <Carousel autoplay >
        {carouselData.map((data) => (
          <div>
            <div>
            <Image
              style={imageStyle}
              src={data.img}
            />
            </div>
          </div>
        ))}
      </Carousel>
      <Row className = "cardrow">
        {categoriesList.map(items=>{
          return(
            <Col className="gutter-row" >
              <Card title={items.title} bordered={false} style={{ width: 300 }} onClick={()=>handleClick(items.title)}>
                {/* <img style={imageStyle} src={items.img} /> */}

                <video src={items.source} type="video/mp4" autoPlay loop muted/>
                {/* <video src={require('assets/videos/vegetables.mp4')} type="video/mp4" controls/> */}
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default MainContainer;
