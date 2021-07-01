import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {

  const [cart, setCart] = useState([])

  const handleCart = (item) => {
    const qty = document.getElementById('Item'+item.id).value

    const productToAdd = {
        ...item,
        qty
    }

    console.log(productToAdd)
    setCart([...cart, productToAdd])
  }

  return (
    <div className="App">
        <Navbar cart={cart}/>
        {/* Banner Principal */}
        {/* lista de mas importantes */}
        <div> {/*TODO-Home view*/}
          {/* <ItemsListContainer handleCart={handleCart} /> */}
        </div>
        <div> {/*TODO-Item Detail View*/}
          <ItemDetailContainer handleCart={handleCart} />
        </div>
        {/* Secciones */}
        {/* Footer */}
    </div>
  );
}

export default App;
