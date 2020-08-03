import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import './App.css';
import NavBar from './component/navbar'
import Home from "./pages/home"
import Auth from "./pages/auth"
import Product from "./pages/product"
import Footer from "./component/footer"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
       <div className="App">
      <NavBar />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
      <Footer />
    </div>

    </Provider>
   
  );
}

export default App;
