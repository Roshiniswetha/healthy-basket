import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { connect, useDispatch, useSelector } from "react-redux"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Row, Col, Button } from 'antd';
import {fetchVegetables} from "components/store/vegetables/actionCreators"

const { Meta } = Card;

const mapStateToProps = state => ({
  vegetables: state?.vegetables?.vegetables
});


function VegetablesList(props) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/${item}`)
  }
  return (
    <div>
      <Row gutter={16}>
      {props?.vegetables && (props?.vegetables).map(data=>{
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
              onClick={()=>handleClick(data.name)}
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

export default connect(mapStateToProps, null)(VegetablesList);