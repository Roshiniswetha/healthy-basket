import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { useSelector } from 'react-redux';
import { Layout, Menu, theme } from 'antd';
import { Breadcrumbs } from '.';
import { FruitsList } from 'components/basketComponents';

const { Content, Sider } = Layout;

export default function Drawer() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { fruits } = useSelector(state=>state.fruits)

  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <Layout>
      <Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={{ primaryColor: '#d3f261' }}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {fruits && Object.entries(fruits[0]).map((key,value)=>{
            return(
              <Menu.Item key="Fruits" onClick={handleClick}>
                <span>{key}</span>
                {showComponent && <FruitsList props={value}/>}
              </Menu.Item>
            )
          })
          }
          </Menu>
      </Sider>
        <Breadcrumbs />
      </Layout>
  )
}