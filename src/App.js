import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar.js'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar></Navbar>
    </div>
  </BrowserRouter>
  );
}

export default App;
