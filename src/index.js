import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CartContainer from "./Containers/CartContainer/index"
import ProductsContainer from "./Containers/ProductsContainer/index"

ReactDOM.render(
    (<div>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
    </div>),
  document.getElementById('root')
);

