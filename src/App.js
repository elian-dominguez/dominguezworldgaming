import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>  
      <ItemListContainer greeting="¡Saludos Coders!"/>
    </>
  );
}

export default App;
