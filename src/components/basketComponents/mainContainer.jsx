import React from "react";
import { Image } from 'antd';
import { Carousel } from "antd";
import cart from 'assets/images/Fresh.png'

const contentStyle = {
  height: '160px',
  width: '25%',
  color: '#fff',
  lineHeight: '60%',
  textAlign: 'center',
  background: '#364d79',
  justifyContent: 'center',
  flex: 1, alignItems: 'center'
};

const imageStyle = {
flex: 1,
width: '100%',
height: '100%',
resizeMode: 'center',
}

const carouselData = [
  {
    name: 'vegetables',
    img:  {cart},
  },
  {
    name: 'fruits',
    img: 'https://plus.unsplash.com/premium_photo-1667385010535-898d3d193c50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'cereals',
    img: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]

export default function MainContainer() {
  return (
    <div className="App">
      <h1>Healthy Basket</h1>
      <Carousel autoplay style={contentStyle}>
        {carouselData.map((data) => (
          <div>
            <div>
            <Image
              style={imageStyle}
              src={data.img.cart}
            />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
