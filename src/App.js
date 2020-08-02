import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar'
import Banner from "./component/banner"
import ProductList from "./component/productlist"
import ProductInfo from "./component/productinfo"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProductList />
     <ProductInfo />
    </div>
  );
}

export default App;
