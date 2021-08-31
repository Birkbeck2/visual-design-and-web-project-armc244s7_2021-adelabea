import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' exact component={Events} />
          <Route path='/about' exact component={About} />
          <Route path='/sign-in' exact component={SignIn} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
