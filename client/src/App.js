import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


const App=()=>{
  return(
    <div>
    <BrowserRouter>
      
      <NavBar/>
      <Switch>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>

      <Route exact path="/register">
        <Register/>
      </Route>

      <Route>
        <h1>404</h1>
      </Route>
      </Switch>
    </BrowserRouter>

    </div>
  )
}

export default App;