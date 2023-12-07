import React from "react";
import {useNavigate} from 'react-router-dom';
import { Image } from 'antd';
import { Carousel, Card, Row, Col, Flex, Typography } from "antd";
import cart from 'assets/images/Fresh.png'
import healthyFood from 'assets/images/HealthyFood.png'
import BudgetFriendly from 'assets/images/BudgetFriendly.png'

const { Text, Link } = Typography;

const imageStyle = {
flex: 1,
width: '100%',
height: '100%',
resizeMode: 'center',
}

const carouselData = [
  // {
  //   name: 'vegetables',
  //   img:  `${cart}`,
  // },
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
    img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'vegetables',
    img:  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZyZXNoJTIwdmVnZXRhYmVzfGVufDB8fDB8fHww',
  },
  {
    title: 'DailyEssentials',
    img: 'https://plus.unsplash.com/premium_photo-1663924865153-4eec89bd5980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]


function MainContainer() {
  const navigate = useNavigate();
  const handleClick = (title) =>{
    navigate(`/categories/${title}`)
  }
  return (
    <div>
      <Text>Healthy Basket</Text>
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
      <Row gutter={16}>
        {categoriesList.map(items=>{
          return(
            <Col className="gutter-row" span={8}>
              <Card title={items.title} bordered={false} style={{ width: 300 }} onClick={()=>handleClick(items.title)}>
                <img style={imageStyle} src={items.img} />
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default MainContainer;
