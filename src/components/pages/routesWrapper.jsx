import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useQuery } from 'react-query';

import { Dashboard } from "components/layout";
import { MainContainer } from "components/basketComponents";
import { Home } from "components/pages";
import { Product } from 'components/basketComponents';
import FruitsList from 'components/basketComponents/fruits/fruitsList';
import VegetablesList from 'components/basketComponents/vegetables/vegeteblesList'
import { fetchFruits } from 'components/store/fruits/actionCreators';

function RoutesWrapper() {
  // const { data, isLoading, isError, refetch  } = useQuery('myData', fetchFruits,{
  //   onFirstUpdate: () => refetch(),
  // });
  return (
    <div>
        <BrowserRouter>
            <Home/>
              <Routes>
                  <Route exact path="/" element={<MainContainer />} />
                  <Route path="/categories"  element={<Dashboard/>}>
                    {/* <Route index element={<Dashboard/>} /> */}
                    <Route path="fruits" element={<FruitsList/>} />
                    <Route path="vegetables" element={<VegetablesList/>} />
                  </Route>
              </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutesWrapper