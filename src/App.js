import React from 'react';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Body from './component/Body';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="container">
      <Banner/>
      <Body/>
      </div>
    </div>
  );
}

export default App;
