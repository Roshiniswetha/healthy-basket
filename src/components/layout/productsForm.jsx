import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Upload,
} from 'antd';
import { addFruits } from 'components/store/productSlices/fruitsSlice';

function ProductsForm() {
  const [file,setFile] = React.useState();
  const dispatch = useDispatch();
  const onFileChangeHandler = (e) =>{
    setFile(e.target.files[0])
  }
  const onFinish = (values) => {
    console.log('hi',values)
    dispatch(addFruits(values,file))
  }

  const onFinishFailed = (err) => {
    console.log('err',err)
  }
  return (
    <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    style={{ maxWidth: 600 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item label="Name" name="name">
      <Input name="name" placeholder="Enter a name"/>
    </Form.Item>
    <Form.Item label="Slogan" name="slogan">
      <Input name="slogan" placeholder="Enter a slogan"/>
    </Form.Item>
    <Form.Item label="Description" name="description">
      <Input name="description" placeholder="Enter a Description"/>
    </Form.Item>
    <Form.Item label="Weight" name="weight">
      <Input name="weight" placeholder="Enter a Weight"/>
    </Form.Item>
    <Form.Item label="Quantity" name="quantity">
    <InputNumber name="quantity" placeholder="Enter a Quantity"/>
    </Form.Item>
    <Form.Item label="Price" name="price">
      <InputNumber name="price" placeholder="Enter a price"/>
    </Form.Item>
    <Form.Item label="HealthBenefits" name="healthBenefits">
      <Input name="healthBenefits" placeholder="Enter a HealthBenefits"/>
    </Form.Item>
    <Form.Item label="Date" name="date">
      <DatePicker name="date" placeholder="Enter a Date"/>
    </Form.Item>
    <Form.Item label="Lifetime" name="lifetime">
      <Input name="lifetime" placeholder="Enter a lifetime"/>
    </Form.Item>

    <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
    {/* <Form.Item
      label="Upload"
      // valuePropName="fileList"
      type="file"
      name="file"
    >
      <Upload listType="picture-card">
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      </Upload>
    </Form.Item> */}
    <Form.Item label="Submit">
        <Button htmlType="submit">
          Submit
        </Button>
    </Form.Item>
    <Form.Item label="Button">
      <Button htmlType="cancel">Cancel</Button>
    </Form.Item>
  </Form>
  )
}

export default ProductsForm