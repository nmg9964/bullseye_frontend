import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './components/Home'
import Login from './components/Login'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar />  
      <Route exact path='/' component={Home}/>
      <Route exact path='/admin' component={Login}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
