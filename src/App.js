import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { fetchProducts } from "components/store/fruits/actionCreators";
import { store } from "components/store/store"
import { Dashboard } from "components/layout";
import "assets/scss/style.scss";

store.dispatch(fetchProducts())

function App() {
  return (
    <div className="App">
      <Provider store={store}>
            <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Dashboard/>} />
              </Routes>
              </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
