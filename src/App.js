import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './components/Home'
import Login from './components/Login'
import EventsContainer from './containers/EventsContainer'
import CreateEventForm from './components/CreateEventForm'

import './App.css'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/admin' component={EventsContainer}/>
      <Route exact path='/book-session' component={CreateEventForm}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
