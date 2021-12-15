import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

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
       <Route exact path="/" component={Login}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/friends" component={FriendsList}/>
       <Route exact path="/friends/add" component={AddFriend}/>
       <Route path="/logout" component={Logout}/>
       

     </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
