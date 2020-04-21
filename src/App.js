import React, { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About'
import Users from './components/layout/Users/Users';
import User from './components/layout/Users/User';
import Alert from './components/layout/Alert'

import GithubState from './components/context/github/GithubState'
//import Calculator from './components/layout/Calculator';
//import Toggle from './components/layout/Toggle';
//import Clock from './components/layout/Clock'

import Search from './components/layout/Search';

const App = () => {

  const [alert,setAlert] = useState(null);

  const setMsgAlert = (msg,type) => {
    //this.setState({alert: {msg, type}});
    setAlert({msg,type});

    setTimeout(() => {
      //this.setState({alert : null})
    setAlert(null);
    }, 5000);
  }

    return (
      //hacemos el wrap con el context api 
      <GithubState>
      <Router>
        <div className="App">   
          <Navbar />
            <div className='container'>

              <Alert alert={alert} />
              <Switch>
                <Route 
                exact 
                path='/' 
                render={props => (
                  <Fragment>
                    <Search  
                      setAlert = {setMsgAlert} />

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
      </GithubState>
    );
}

export default App;
