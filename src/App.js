
import { useEffect } from "react";
import {  useDispatch } from 'react-redux'
import { Layout, ConfigProvider } from 'antd';
import { RoutesWrapper } from "components/pages"
import { onFruitsPageLoad } from "components/store/productSlices/fruitsSlice";
import { onVegetablesPageLoad } from "components/store/productSlices/vegetablesSlice";
import 'assets/scss/style.scss'

function App() {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(onFruitsPageLoad());
  dispatch(onVegetablesPageLoad());
}, [dispatch]);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#BED754",
          colorInfo: "#1bb470",
          fontFamily: "Palatino",
        },
        components: {
          Layout: {
            headerBg: "#fff",
            siderBg: "#BED754",
          },
          Menu: {
            itemBg: "#fff", 
            subMenuItemBg: "#BED754", 
            darkItemBg: "blue",
          },
        },
      }}
    >
    <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          <RoutesWrapper />
        </Layout>
    </div>
    </ConfigProvider>
  );
}

export default App;
