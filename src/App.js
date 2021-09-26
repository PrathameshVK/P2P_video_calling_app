import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import {Link} from 'react-router-dom';

function App() {
  return (
    <StyledMainApp>
      <Navbar/>
      <Signup/>
    </StyledMainApp>
  );
}

const StyledMainApp=styled.div`
*{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
height: 100vh;
background-color: black;
`

export default App;
