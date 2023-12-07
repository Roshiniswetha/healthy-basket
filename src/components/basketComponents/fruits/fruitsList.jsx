import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
// import { useQuery } from 'react-query';
import { connect, useDispatch, useSelector } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Row, Col, Button } from 'antd';
import {fetchFruits} from "components/store/fruits/actionCreators"

const { Meta } = Card;

const mapStateToProps = state => ({
  fruits: state?.fruits?.fruits
});


function FruitsList(props) {
  // console.log(data)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/apple')
  }
  return (
    <div>
      <Row gutter={16}>
      {props && (props?.fruits).map(data=>{
        return(
          <Col className="gutter-row" span={8}>
          <Card
          cover={
            <img
              style={{ width: '100%',
                height: '200px',
                objectFit: 'cover'}}
              alt="example"
              src={`data:image;base64,${data.image}`}
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
            title={data.name}
            description={data.description}
          />
          </Card>
          </Col>
        )
      })}
      </Row>
    </div>
  )
}

// export default FruitsList;
export default connect(mapStateToProps, null)(FruitsList);