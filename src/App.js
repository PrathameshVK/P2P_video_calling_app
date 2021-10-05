import React from 'react';
import { StyledMainApp } from './StyledComponents/StyledMainApp';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import About from './pages/About';
import {Switch, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import { ContextProvider } from './context/SocketContext';
import PrivateRoute from './components/PrivateRoute';
import Hamburger from './components/Hamburger';
import VideoCall from './pages/VideoCall';

function App() {
  return (
    
       <StyledMainApp>
         <AuthProvider>
          <ContextProvider>
          <Hamburger/>
          <Navbar/>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute path="/videocall" component={VideoCall}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
          </Switch>
          </ContextProvider>
        </AuthProvider>
      </StyledMainApp>
    
  );
}

export default App;
