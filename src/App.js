import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './containers/ItemListContainer';


function App() {

  const products = [
    { 
        name: 'Zapato',
        talla: 3,
        color: 'Blanco'
    },
    { 
      name: 'Pantalon',
      talla: 'M',
      color: 'Negro'
    }
]
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer products={products} />
        {/* Banner Principal */}
        {/* lista de mas importantes */}
        {/* Secciones */}
        {/* Footer */}
    </div>
  );
}

export default App;
