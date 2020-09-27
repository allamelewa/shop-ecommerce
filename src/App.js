import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import ProductList from './components/productList/productList';
import Details from './components/details/details';
import Cart from './components/cart/cart';
import Default from './components/default/default';
import {ProductProvider} from './components/productProvider/productProvider'
import Modal from './components/modal/modal';

import './App.css';
function App() {
  return (
    <ProductProvider>
      <React.Fragment>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={ProductList}/>
            <Route path='/details' component={Details}/>
            <Route path='/cart' component={Cart}/>
            <Route component={Default}/>
          </Switch>
          <Modal/>
        </Router>      
    </React.Fragment>
    </ProductProvider>
    
  );
}

export default App;
