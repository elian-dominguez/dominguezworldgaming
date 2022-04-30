import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';
import CartContainer from './container/CartContainer';
import CartContextProvider from './context/CartContext';

import 'rsuite/dist/rsuite.min.css';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>  
          <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/detail/:detailId" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/*" element={<Navigate to='/' replace />}/>
          </Routes>    
        </CartContextProvider> 
      </BrowserRouter>   
  );
}

export default App;
