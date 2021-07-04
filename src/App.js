import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


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
      <BrowserRouter>
        <Navbar cart={cart}/>
          <Switch>
          {/* Banner Principal */}
          {/* lista de mas importantes */}
          <Route exact path="/" component={()=><ItemsListContainer handleCart={handleCart}/>}/>
          <Route path="/category/:id" component={()=><ItemsListContainer handleCart={handleCart}/>}/>
          <Route path="/item/:id" component={()=><ItemDetailContainer handleCart={handleCart}/>}/>
          {/* Secciones */}
          </Switch>
        {/* Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
