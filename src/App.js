import React from 'react';
import Mn from './components/Mn';
import Wrap from './components/Wrap';
import Head from './components/Head';
import "./App.css";

function App() {
  return (
    <div className="App">
   <Wrap>
     <Head />
     <Mn />
   </Wrap>
    </div>
  );
}

export default App;
