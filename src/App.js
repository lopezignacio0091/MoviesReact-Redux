import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/layout/Home/index';
import Result from './components/layout/Results/index'
import MenuBar from './components/appBar/MenuBar';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      
       <HashRouter>
         <MenuBar content={<Home />}/>   
         <Route path='/resultado' component={Result}/>
       </HashRouter>
      
    </Provider>
  );
}

export default App;
