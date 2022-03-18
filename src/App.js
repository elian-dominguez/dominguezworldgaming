import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './container/ItemListContainer';

const onAdd = (count) => {
  alert(`Agregaste ${count} productos`)
}

function App() {
  return (
    <>
    <NavBar/>  
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      <ItemListContainer/>
      {/* <ItemList/> */}
    </>
    
  );
}

export default App;
