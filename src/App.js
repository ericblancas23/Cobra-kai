import React from 'react';
import { Nav } from './components/layout/Nav';
import {Router, Route} from 'react-router-dom';
import {history} from './helpers/history';
import Programs from './components/routes/Programs';
import Schedule from './components/routes/Schedule';
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import Auth from './components/routes/Auth';
import Home from './components/routes/Home';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <Router history={history}>
    <React.Fragment className="App">
    <Nav history={history}/>
    <Route exact path='/' component={Home}/>
    <Route path='/programs' component={Programs} />
    <Route path='/schedule' component={Schedule} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route exact path='/auth' component={Auth} />
    </React.Fragment>
    </Router>
  );
  }
}

export default App;
