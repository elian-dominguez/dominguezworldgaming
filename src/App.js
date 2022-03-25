import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './container/ItemListContainer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';

const onAdd = (count) => {
  alert(`Agregaste ${count} productos`)
}

function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      <NavBar/>  
      {/* <Routes> */}
        {/* <Route path="/" /> */}
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>
          <ItemListContainer/>
          <ItemDetailContainer/>
          {/* <ItemList/> */}
      {/* </Routes>     */}
    {/* </BrowserRouter>   */}
    </>
    
  );
}

export default App;
