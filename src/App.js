import React from 'react';
import Wrapper from './components/Wrapper/wrapper';
import Header from '.components/Header';
import './App.css';
import Main from './components/Main';

function App()
{
  return(
    <div className='App'>
    <Wrapper>
    <Header/>
    <Main/>
    </Wrapper>
    </div>
  );
}

export default App;
