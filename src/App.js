// import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import './App.css';
import './style.less'
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import CartContextProvider, { ContextCart, contextCart } from './context/CartContext';

// const [cartContext, setCartContext] = useContext([])
// const [cartContext, setCartContext] = useState([])

function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>  
          <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
              {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
              {/* <ItemList/> */}
              <Route path="/cart" element={<CartWidget/>}/>
            <Route path="/*" element={<Navigate to='/' replace />}/>
          </Routes>    
        </CartContextProvider> 
      </BrowserRouter>   
  );
}

export default App;
