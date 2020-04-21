import React, { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About'
import Users from './components/layout/Users/Users';
import User from './components/layout/Users/User';
import axios from 'axios';
import Alert from './components/layout/Alert'

import GithubState from './components/context/github/GithubState'
//import Calculator from './components/layout/Calculator';
//import Toggle from './components/layout/Toggle';
//import Clock from './components/layout/Clock'

import Search from './components/layout/Search';

const App = () => {

  const [loading,setLoading] = useState(false);
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const [alert,setAlert] = useState(null);

  
/*  async componentDidMount(){

    this.setState({loading: true});

    //una FORMA
    /*axios
      .get('https://api.github.com/users')
      .then(res => console.log(res.data));*/

  /*  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&
                                                              client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`);
    this.setState({loading: false, users: res.data});
  }*/

    //hacemos una llamada asincrona para buscar todos los usuarios del search
    // lo llevamos a github state donde manejamos las llamadas a los eventos
  // const searchUsers = async value => {
  //   setLoading(true);
  //   //this.setState({loading: true});
  //   //utilizamos el endpoint para busqueda, manteniendo el clientid y clientsecret para multiples peticiones  
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${value}&client_id=
  //     ${process.env.REACT_APP_GITHUB_ID}
  //     &client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`);
    
  //   //modificamos el state con los datos obtenidos
  //   //this.setState({loading: false, users: res.data.items});
  //   setLoading(false);
  //   setUsers(res.data.items);
  // }

  const getUser = async username => {
//    this.setState({loading: true});
    setLoading(true);
      
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`);
    
    //modificamos el state con los datos obtenidos
    //this.setState({loading: false, user: res.data});
    setLoading(false);
    setUser(res.data);
  }
/*
  const clearUsers = () => {
    //this.setState({users : [], loading: false});
    setUsers([]);
    setLoading(false);
  }
*/
  const setMsgAlert = (msg,type) => {
    //this.setState({alert: {msg, type}});
    setAlert({msg,type});

    setTimeout(() => {
      //this.setState({alert : null})
    setAlert(null);
    }, 5000);
  }

  // no lo usamos mas porque estamos usando setState use state
//    const {users, user, loading, alert} = this.state;
    
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

                    <Users loading={loading} users={users}/>
        
                  </Fragment>
                )} />

                <Route exact path='/about' component={About} />

                <Route 
                exact 
                path='/user/:login' 
                render={props => (
                  <User {...props} getUser={getUser} loading={loading} user={user} />       
                               )} />
              </Switch>
            </div>
        </div>
      </Router>
      </GithubState>
    );

    /* return (
      <div className="App">   
        <Navbar  />
        <Clock />     
        <Toggle />

        <div className='container'>
          <Calculator />
        </div>

        <div className='container'>
          <User loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
 */  
}
/* OTRA FORMA DE ESCRIBIRLO
    return React.createElement('div',{className :'App'},
                          React.createElement('h1',null,'hola joaco'));
}
                          */  


export default App;
