import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>  
      <ItemListContainer greeting="¡Saludos Coders!"/>
      <ItemCount/>
    </>
    
  );
}

export default App;
