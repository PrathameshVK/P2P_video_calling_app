import React from 'react';
import { StyledMainApp } from './StyledComponents/StyledMainApp';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import About from './components/About';
import {Switch, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Hamburger from './components/Hamburger';

function App() {
  return (
    
       <StyledMainApp>
         <AuthProvider>
          <Hamburger/>
          <Navbar/>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
          </Switch>
        </AuthProvider>
      </StyledMainApp>
    
  );
}

export default App;
