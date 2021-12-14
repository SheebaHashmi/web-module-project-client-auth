import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/FriendsList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul>
      
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">FriendsList</Link>
        </li>
        <li>
          <Link to="/friends/add">Add Friend</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>


     <Switch>
       <Route path="/login" component={Login}/>
       <Route path="/friends" component={FriendsList}/>
       

     </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
