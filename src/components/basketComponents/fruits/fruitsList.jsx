import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Flex, Row, Col, Button } from 'antd';

const { Meta } = Card;

function FruitsList(props) {

  const {fruits} = useSelector((state) => state.fruits);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/apple')
  }
  return (
    <div>
      <Row gutter={16}>
      {fruits && (fruits[0]).map(fruit=>{
        return(
          <Col className="gutter-row" span={8}>
          <Card
          cover={
            <img
              style={{ width: '100%',
                height: '200px',
                objectFit: 'cover'}}
              alt="example"
              src={`data:image;base64,${fruit.image}`}
              onClick={handleClick}
            />
          }
          actions={[
            <MinusOutlined key="minus" />,
            <Button type="primary">Add</Button>,
            <PlusOutlined key="plus" />,
          ]}
        >
          <Meta
            title={fruit.name}
            description={fruit.description}
          />
          </Card>
          </Col>
        )
      })}
      </Row>
    </div>
  )
}

export default FruitsList;
// export default connect(mapStateToProps, null)(FruitsList);