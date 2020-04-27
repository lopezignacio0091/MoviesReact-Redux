import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About'
import User from './components/layout/Users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';

import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';


const App = () => {

  return (
      //hacemos el wrap con el context api 
      <GithubState>
        <AlertState>
      <Router>
        <div className="App">   
          <Navbar />
            <div className='container'>

              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' 
                  render={props => (
                    <User {...props} />       
                  )} />
              </Switch>
            </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
