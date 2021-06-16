import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ProductsContainer from './containers/ProductsContainer';


function App() {

  const [cart, setCart] = useState([])

  const handleCart = (product) => {

    const qty = document.getElementById('Product'+product.id).value

    const productToAdd = {
        ...product,
        qty
    }
    console.log(productToAdd)
    setCart([...cart, productToAdd])
  }

  const products = [ //TODO-From firebase
    { 
        id: 1,
        name: 'Zapato',
        talla: 3,
        color: 'Blanco',
        stock: 7
    },
    { 
      id: 2,
      name: 'Pantalon',
      talla: 'M',
      color: 'Negro',
      stock: 3
    },
    { 
      id: 3,
      name: 'Remera',
      talla: 'S',
      color: 'Blanca',
      stock: 6
    }
  ]

  return (
    <div className="App">
        <Navbar cart={cart}/>
        <div> {/*TODO-Home view*/}
          <ProductsContainer products={products} greeting={"Hello Friends"} buyProduct={handleCart} />
        </div>
        {/* Banner Principal */}
        {/* lista de mas importantes */}
        {/* Secciones */}
        {/* Footer */}
    </div>
  );
}

export default App;
