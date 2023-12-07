
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout, ConfigProvider } from 'antd';
import { fetchFruits } from "components/store/fruits/actionCreators";
import { fetchVegetables } from "components/store/vegetables/actionCreators";
import { store } from "components/store/store"
import { RoutesWrapper } from "components/pages"
import 'assets/scss/style.scss'

store.dispatch(fetchFruits())
store.dispatch(fetchVegetables())

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
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
          <RoutesWrapper />
        </Layout>
      </Provider>
    </div>
    </ConfigProvider>
    // </QueryClientProvider>
  );
}

export default App;
