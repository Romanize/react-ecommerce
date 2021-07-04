import './App.css';
import Navbar from './components/Navbar'
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Switch>
          {/* Banner Principal */}
          {/* lista de mas importantes */}
          <Route exact path="/" component={ItemsListContainer}/>
          <Route path="/category/:id" component={ItemsListContainer}/>
          <Route path="/item/:id"component={ItemDetailContainer}/>
          {/* Secciones */}
          </Switch>
        {/* Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
