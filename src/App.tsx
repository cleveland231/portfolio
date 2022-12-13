import React from 'react';
import './App.css';
import Header from './Header';
import LeftSide from './LeftSide';

function App() {
  return (
    <div className="App">
       <div className='LeftSide'>
        <LeftSide/>
      </div>
      <div className='Main'>
        <Header/>
      </div>
    </div>
  );
}

export default App;
