import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useQuery } from 'react-query';

import { Dashboard } from "components/layout";
import { Cart, MainContainer } from "components/basketComponents";
import { Home } from "components/pages";
import { Product } from 'components/basketComponents';
import FruitsList from 'components/basketComponents/fruits/fruitsList';
import VegetablesList from 'components/basketComponents/vegetables/vegeteblesList'
import ProductsForm from 'components/layout/productsForm';

function RoutesWrapper() {
  return (
    <div>
        {/* <BrowserRouter> */}
            <Home/>
              <Routes>
                  <Route exact path="/" element={<MainContainer />} />
                  <Route path="/categories"  element={<Dashboard/>}>
                    {/* <Route index element={<Dashboard/>} /> */}
                    <Route path="fruits" element={<FruitsList/>} />
                    <Route path="vegetables" element={<VegetablesList/>} />
                  </Route>
                  <Route path="/login" element={<ProductsForm />}/>
                  <Route path="/cart" element={<Cart />}/>
              </Routes>
        {/* </BrowserRouter> */}
    </div>
  )
}

export default RoutesWrapper