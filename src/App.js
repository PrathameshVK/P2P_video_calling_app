import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {Switch, Route, Link} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
       <StyledMainApp>
         <AuthProvider>
          <Navbar/>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </AuthProvider>
      </StyledMainApp>
    
  );
}

const StyledMainApp=styled.div`
*{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
height: 100vh;
overflow: hidden;
background-color: black;
`

export default App;
