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
    GET_USER,
    GET_REPOS
} from '../types';

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
    //GetUser

    const searchUsers = async value => {
        setLoading();
       
        const res = await axios.get(
          `https://api.github.com/search/users?q=${value}&client_id=
          ${process.env.REACT_APP_GITHUB_ID}
          &client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`);
        
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
        searchUsers
    }}
    >
        {props.children}
    </GithubContext.Provider>
    )
}

export default GithubState;