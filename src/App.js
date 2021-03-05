import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/layout/Home/index';
import Result from './components/layout/Results/index'
import PersistentDrawerLeft from './components/sideNav/NavBar';
import MenuBar from './components/appBar/MenuBar';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';



const App = () => {

  return (
    <Provider store={store}>
       <HashRouter>
       <PersistentDrawerLeft />
         <Switch>
              <Route exact={true} path='/' component={Home} />   
              <Route path='/resultado' component={Result}/>
         </Switch>
       </HashRouter>
      
    </Provider>
  );
}

export default App;
