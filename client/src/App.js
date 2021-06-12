import React from 'react';
import Home from './components/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import TaskMain from './components/TaskMain';


const App=()=>{
  return(
    <div>
    <BrowserRouter>
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

      <Route exact path="/task">
        <TaskMain/>
      </Route>

      <Route>
        <NotFound/>
      </Route>
      </Switch>
    </BrowserRouter>

    </div>
  )
}

export default App;