import logo from './logo.svg';
import './App.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Getdata from './components/Getdata';
import Navbar from './components/Navbar.js'

function App() {
  const [ show, setshow ] = useState(false);
  // let value = (show) ? "Hide" : "Show";
  return (
    <div className="App">
      <Navbar/>
      <p></p>
      <Button onClick={()=> setshow(!show) } variant="success">Show</Button>{' '}
      {show && <Getdata/>}
    </div>
  );
}

export default App;
