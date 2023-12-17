import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { useSelector, useDispatch } from "react-redux"
import { Layout, Menu, theme, Tree, Divider } from 'antd';
import { Breadcrumbs } from '.';

import { vegetablesData } from 'assets/data/Vegetables';
import { categorySliceActions } from 'components/store/productSlices/categorySlice';
import { fruitsActions } from 'components/store/productSlices/fruitsSlice';
import { vegetablesActions } from 'components/store/productSlices/vegetablesSlice';

const { TreeNode } = Tree;

const { Content, Sider } = Layout;

export default function Drawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fruitCategories, vegetableCategories } = useSelector((state) => state.category);

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const categoriesData = [
    { key: '1', title: 'Fruits', children: [...fruitCategories] },
    { key: '2', title: 'Vegetables', children: [...vegetableCategories] },
    // { key: '3', title: 'Daily Essentials', children: [...vegetableCategories] },
  ];

  const findParentNode = (key) => {
    const parentKey = key.split('/')[0];

    const parentNode = categoriesData.find((node) => node.children.includes(parentKey));

    return parentNode.title;
  };

  const handleSelect = (selectedKeys,info) => {
    let category = 'All'
    setSelectedKeys(selectedKeys[0]);
    const selectedKey = selectedKeys[0]
    console.log(isNaN(selectedKey))
    if(info.node.title==='Fruits' || (isNaN(selectedKey) && findParentNode(selectedKey)==='Fruits')){
        navigate('/categories/fruits')
        category = info.node.title==='Fruits' ? 'All' : info.node.title
        dispatch(categorySliceActions.setFruitCategory(category))
        dispatch(fruitsActions.getFilteredFruitsByCategory(category))
    } else if(info.node.title==='Vegetables' || (isNaN(selectedKey) && findParentNode(selectedKey)==='Vegetables')){
        navigate('/categories/vegetables')
        category = info.node.title==='Vegetables' ? 'All' : info.node.title
        dispatch(categorySliceActions.setVegetableCategory(category))
        dispatch(vegetablesActions.getFilteredVegetablesByCategory(category))
    }

  };

  return (
    <Layout>
      <Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={{ primaryColor: '#d3f261' }}>
        <div className="demo-logo-vertical" />
        <Tree
        showLine
        defaultExpandedKeys={['0-0', '0-1']}
        onSelect={handleSelect}
        selectedKeys={selectedKeys}
        >
            {categoriesData.map((node) => (
              <TreeNode key={node.key} title={node.title}>
                {node.children && node.children.map((child) => (
                  <TreeNode key={child} title={child} />
                ))}
                </TreeNode>
              ))}
          <Divider plain>Text</Divider>
        </Tree>
      </Sider>
        <Breadcrumbs />
      </Layout>
  )
}