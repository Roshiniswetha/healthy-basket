import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { Layout, ConfigProvider } from 'antd';
import { fetchProducts } from "components/store/fruits/actionCreators";
import { store } from "components/store/store"
import { Dashboard } from "components/layout";
import { MainContainer } from "components/basketComponents";
import "assets/scss/style.scss";
import { Home } from "components/pages";

store.dispatch(fetchProducts())

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#BED754",
          colorInfo: "#1bb470",
          fontFamily: "Lato, sans-serif",
        },
        components: {
          Layout: {
            headerBg: "#fff",
            siderBg: "#BED754",
          },
          Menu: {
            itemBg: "#fff", // colorBgBase -3% lightness
            subMenuItemBg: "#BED754", // colorBgBase -3% lightness,
            darkItemBg: "blue",
          },
        },
      }}
    >
    <div className="App">
      <Provider store={store}>
        <Layout style={{ minHeight: '100vh' }}>
            <BrowserRouter>
            <Home/>
              <Routes>
                  <Route exact path="/" element={<MainContainer />} />
                  <Route path="/categories" element={<Dashboard/>} />
              </Routes>
              </BrowserRouter>
        </Layout>
      </Provider>
    </div>
    </ConfigProvider>
  );
}

export default App;
