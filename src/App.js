import './App.css';
import Navbar from './components/Navbar';
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import Contact from './screens/Contact';
import About from './screens/About';
import Account from './screens/Account';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartContextComponent} from './contexts/CartContext'


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
            <Route path="/contact"component={Contact}/>
            <Route path="/about"component={About}/>
            <Route path="/account"component={Account}/>
            </Switch>
        </BrowserRouter>
      </CartContextComponent>
    </div>
  );
}

export default App;
