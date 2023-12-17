import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { useSelector, useDispatch } from "react-redux"
import { Layout, Menu, theme, Tree, Divider } from 'antd';
import { Breadcrumbs } from '.';

import { vegetablesData } from 'assets/data/Vegetables';
import { categorySliceActions } from 'components/store/productSlices/categorySlice';
import { fruitsActions } from 'components/store/productSlices/fruitsSlice';

// const { Sider } = Layout;
const { TreeNode } = Tree;

const { Content, Sider } = Layout;

export default function Drawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allFruits } = useSelector((state) => state.fruits);
  const { categories } = useSelector((state) => state.category);

  console.log('categories', categories)

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  // const { fruits } = useSelector(state=>state.fruits)

  const [showComponent, setShowComponent] = useState(false);

  const handleSelect = (selectedKeys,info) => {
    const category = info.node.title==='fruits' ? 'All' : info.node.title
    setSelectedKeys(selectedKeys);

    dispatch(categorySliceActions.setCategory(category))
    dispatch(fruitsActions.getFilteredFruitsByCategory(category))
  };

  return (
    <Layout>
      <Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={{ primaryColor: '#d3f261' }}>
        <div className="demo-logo-vertical" />
        <Tree
        showLine
        // defaultExpandedKeys={['0-0', '0-1']}
        onSelect={handleSelect}
        selectedKeys={selectedKeys}
        >
          <TreeNode
            key="fruits"
            title="fruits"
            // icon={node.icon}
          >
            {[...allFruits].map((key,value)=>{
                return(
              <TreeNode
                key={value}
                title={key.category}
              />
                )})}
              </TreeNode>
          <Divider plain>Text</Divider>
          <TreeNode
            key="vegetables"
            title="vegetables"
            // icon={node.icon}
          >
            {/* {[...VegetablesByCategory].map((key,value)=>{
                return(
              <TreeNode
                key={value}
                title={key}
                // icon={node.icon}
              />
                )})} */}
              </TreeNode>
          <Divider plain>Text</Divider>
        </Tree>
      </Sider>
        <Breadcrumbs />
      </Layout>
  )
}