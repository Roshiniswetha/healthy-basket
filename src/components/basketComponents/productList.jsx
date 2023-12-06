import React from 'react'
import { connect, useDispatch, useSelector } from "react-redux"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
// import { useSelector, useDispatch } from 'react-redux'
import {fetchProducts} from "components/store/fruits/actionCreators"

const { Meta } = Card;

function mapStateToProps(state) {
  return {products: state?.products}
}

// const products = useSelector(state => state.products)

function ProductList(props) {
  // const dispatch = useDispatch()
  return (
    <div>
      {props?.products && (props?.products).map(data=>{
        return(
                <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={`data:image;base64,${data.image}`}
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={data.name}
            description={data.description}
          />
          </Card>
        )
      })}
      {/* <input type="text" onChange={()=>{dispatch(fetchProducts())}}/> */}
    </div>
  )
}

// export default Home;
export default connect(mapStateToProps, {fetchProducts})(ProductList);