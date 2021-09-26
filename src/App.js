import React from 'react';
import styled from 'styled-components';
import Signup from './components/Signup';

function App() {
  return (
    <StyledMainApp>
      <Signup/>
    </StyledMainApp>
  );
}

const StyledMainApp=styled.div`
*{
}
`

export default App;
