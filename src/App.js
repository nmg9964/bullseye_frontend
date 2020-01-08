import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar.js'
import 'semantic-ui-css/semantic.min.css'

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
