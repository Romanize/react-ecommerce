import './App.css';
import Navbar from './components/Navbar'
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {CartContextComponent} from './contexts/CartContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart';


function App() {

  return (
    <div className="App">
      <CartContextComponent>
        <BrowserRouter>
          <Navbar/>
            <Switch>
            {/* Banner Principal */}
            {/* lista de mas importantes */}
            <Route exact path="/" component={ItemsListContainer}/>
            <Route path="/category/:categoryId" component={ItemsListContainer}/>
            <Route path="/item/:id"component={ItemDetailContainer}/>
            <Route path="/cart"component={Cart}/>
            {/* Secciones */}
            </Switch>
          {/* Footer */}
        </BrowserRouter>
      </CartContextComponent>
    </div>
  );
}

export default App;
