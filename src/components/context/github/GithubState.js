// inicializa nuestro state o el state del compoenente
// es donde se realizan todas las llamadas a las funciones o acciones a lelvar adelante
import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER
} from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_SECRET_ID;
}else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}


const GithubState = props => {
    //global state para todo lo relacionado con github y su sestado
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos:[]
    }

    // aca manejamos el ida y vuelta de los servicios o las acciones que llevemos a cabo
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // aca abajo definimos la implementacion de nuestras funciones por type
    const getUser = async username => {
        //    this.setState({loading: true});
        setLoading();
            
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        
        //modificamos el state con los datos obtenidos
        //this.setState({loading: false, user: res.data});
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    const clearUsers = () => {       
        setLoading();
        dispatch({
            type: CLEAR_USERS
        })      
    }    

    const searchUsers = async value => {
        setLoading();
       
        const res = await axios.get(
          `https://api.github.com/search/users?q=${value}&client_id=
          ${githubClientId}
          &client_secret=${githubClientSecret}`);
        
        //setUsers(res.data.items);
        dispatch(
            { 
                type: SEARCH_USERS,
                payload : res.data.items
            }
        )
      }

    // CREARMOS FUNCION QEU LA MANEJA EL DISPATCH
    const setLoading = () => dispatch( {type: SET_LOADING} );

    // wrap de la app en el provider y definimos de donde son accesibles las variables objetos de nuestra app
    // debemos definir los valores que seran accesibles desde el context
    return ( 
    <GithubContext.Provider
    value = {{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
    }}
    >
        {props.children}
    </GithubContext.Provider>
    )
}

export default GithubState;