import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  var loggedinuser = null;
  if (userName) {
    loggedinuser = {"name": userName, "email": userEmail }
  } else {
    loggedinuser = null;
  }
  console.log(loggedinuser)
  return (
    <div className="app">
      <Router>
        <div className="app">
          <Header user={loggedinuser}/>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>



            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
