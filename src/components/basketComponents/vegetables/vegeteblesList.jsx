import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { connect, useDispatch, useSelector } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Row, Col, Button } from 'antd';

const { Meta } = Card;


function VegetablesList(props) {

  const {vegetables} = useSelector((state) => state.vegetables);
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/${item}`)
  }
  return (
    <div>
      <Row gutter={16}>
      {vegetables && (vegetables[0]).map(vegetable=>{
        return(
          <Col className="gutter-row" span={8}>
          <Card
          cover={
            <img
              style={{ width: '100%',
                height: '200px',
                objectFit: 'cover'}}
              alt="example"
              src={`data:image;base64,${vegetable.image}`}
              onClick={()=>handleClick(vegetable.name)}
            />
          }
          actions={[
            <MinusOutlined key="minus" />,
            <Button type="primary">Add</Button>,
            <PlusOutlined key="plus" />,
          ]}
        >
          <Meta
            title={vegetable.name}
            description={vegetable.description}
          />
          </Card>
          </Col>
        )
      })}
      </Row>
    </div>
  )
}

export default VegetablesList