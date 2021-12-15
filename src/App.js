import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './PrivateRoute';

function App() {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <BrowserRouter>
    <div className="App">
      <ul>
      
        <li>
          <Link to="/login">Login</Link>
        </li>
        
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        {
          isLoggedIn ?<li><Link to="/friends">FriendsList</Link></li>:null
        }
        {
          isLoggedIn && <li><Link to="/friends/add">AddFriend</Link></li>
        }
        
      </ul>


     <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/login" component={Login}/>
       <PrivateRoute exact path="/friends" component={FriendsList}/>
       <PrivateRoute exact path="/friends/add" component={AddFriend}/>
       <PrivateRoute path="/logout" component={Logout}/>
    
     </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
