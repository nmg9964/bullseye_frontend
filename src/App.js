import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './components/Home'
import Login from './components/Login'
import EventsContainer from './containers/EventsContainer'
import CreateEventForm from './components/CreateEventForm'
import About from './components/About'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Careers from './components/Careers'
import Contact from './components/Contact'

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
      <Route exact path='/about-us' component={About}/>
      <Route exact path='/faq' component={FAQ}/>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/careers' component={Careers}/>
      <Route exact path='/contact-us' component={Contact}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
