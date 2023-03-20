import './index.css'
import { Route, Routes } from "react-router-dom";
import CategoriesPage from '../../pages/CategoriesPage';
import AllProductsPage from '../../pages/AllProductsPage';
import ProductsPage from '../../pages/ProductsPage'
import BasketPage from '../../pages/BasketPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Nav from '../Nav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asynkLoadCategoriesAction } from '../../store/asyncAction/category';
import { asynkLoadProductsAction } from '../../store/asyncAction/products';
import ShowSelectCategory from '../../pages/ShowSelectCategory';

function App() {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(asynkLoadCategoriesAction);
    dispatch(asynkLoadProductsAction);
  },[]);
  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<CategoriesPage/>}/>
        <Route path="/products/all" element={<ProductsPage/>}/>
        <Route path="/basket" element={<BasketPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="/category/:category" element={<ProductsPage/>}/>
  
      </Routes>
    </div>
  );
}

export default App;
