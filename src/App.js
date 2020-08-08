import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setUser, logoutUser } from './redux/actions/authAction';
import PrivateRoute from "./component/common/PrivateRoute"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar'
import Home from "./pages/home"
import Auth from "./pages/auth"
import Product from "./pages/product"
import Dashboard from "./pages/dashboard"
import Footer from "./component/footer"
import store from "./redux/store"

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/auth';
  }
}
function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <div className="container">
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/product/:id" component={Product} />
              
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
   
  );
}

export default App;
