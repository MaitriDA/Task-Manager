import React from 'react';
import Home from './components/Home';
import {BrowserRouter,Route,Switch,useParams} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import TaskMain from './components/TaskMain';
import AddTask from './components/Tasks/AddTask';
import EditTask from './components/Tasks/EditTask';

const App=()=>{
  
  return(
    <div>
    <BrowserRouter>
      

      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>

      <Route exact path="/register">
        <Register/>
      </Route>

      <Route exact path="/task/:id">
        <TaskMain/>
      </Route>

      <Route exact path="/task/:id/add">
        <TaskMain/>
        <AddTask/>
      </Route>

      <Route exact path="/task/:id/edit">
        <TaskMain/>
        <EditTask/>
      </Route>

      {/* <Route>
        <NotFound/>
      </Route> */}
      
    </BrowserRouter>

    </div>
  )
}

export default App;