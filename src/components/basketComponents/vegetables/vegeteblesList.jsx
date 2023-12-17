import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { connect, useDispatch, useSelector } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Row, Col, Button } from 'antd';
import { vegetablesData } from 'assets/data/Vegetables';

const { Meta } = Card;


function VegetablesList(props) {

  // const {vegetables} = useSelector((state) => state.vegetables);
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/${item}`)
  }
  const keys = Object.keys(vegetablesData)
  return (
    <div>
      <Flex wrap="wrap" gap="small">
      {keys.map(key=>{
        return(
          // <Col className="gutter-row" span={8}>
          <Card
          cover={
            <img
              style={{ display: 'flex',width: '50%',height: '200px',objectFit: 'cover',marginTop:'10px'}}
              alt={vegetablesData[key].name}
              src={vegetablesData[key].image}
              onClick={handleClick}
            />
          }
          actions={[
            <MinusOutlined key="minus"/>,
            // <Button onClick={()=>handleAddToCart(value)}>ADD TO CART</Button>,
            // <PlusOutlined key="plus"  onClick={handleAddToCart}/>,
          ]}
        >
          <Meta
            title={vegetablesData[key].name}
            description={vegetablesData[key].price}
          />
          </Card>
          // </Col>
        )
      })}
      </Flex>
    </div>
  )
}

export default VegetablesList