import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Dashboard } from 'components/layout';
import { Cart, MainContainer } from 'components/basketComponents';
import { Home } from 'components/pages';
import { Footer } from 'components/layout';
import { Product } from 'components/basketComponents';
import FruitsList from 'components/basketComponents/fruits/fruitsList';
import VegetablesList from 'components/basketComponents/vegetables/vegeteblesList'
import ProductsForm from 'components/layout/productsForm';

function RoutesWrapper() {
  const {fruits} = useSelector((state) => state.fruits);
  return (
    <div>
        {/* <BrowserRouter> */}
            <Home/>
              <Routes>
                  <Route exact path='/' element={<MainContainer />} />
                  <Route path='/categories'  element={<Dashboard/>}>
                    {/* <Route index element={<Dashboard/>} /> */}
                    <Route path='fruits' element={<FruitsList props={fruits}/>} />
                    <Route path='vegetables' element={<VegetablesList/>} />
                  </Route>
                  <Route path='/login' element={<ProductsForm />}/>
                  <Route path='/cart' element={<Cart />}/>
              </Routes>
            <Footer />
        {/* </BrowserRouter> */}
    </div>
  )
}

export default RoutesWrapper