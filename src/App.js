import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About'
import Users from './components/layout/Users/Users';
import User from './components/layout/Users/User';
import Alert from './components/layout/Alert'

import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';

import Search from './components/layout/Search';

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
                <Route 
                exact 
                path='/' 
                render={props => (
                  <Fragment>
                    <Search />

                    <Users />
        
                  </Fragment>
                )} />

                <Route exact path='/about' component={About} />

                <Route 
                exact 
                path='/user/:login' 
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
