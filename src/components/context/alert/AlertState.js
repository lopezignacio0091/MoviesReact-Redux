// inicializa nuestro state o el state del compoenente
// es donde se realizan todas las llamadas a las funciones o acciones a lelvar adelante
import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    //global state para todo lo relacionado con github y su sestado
    const initialState = {
        alert : null
    };

    // aca manejamos el ida y vuelta de los servicios o las acciones que llevemos a cabo
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //Set alert
    const setAlert = (msg,type) => {
        dispatch({
            type:SET_ALERT,
            payload : {msg, type}
        })

        setTimeout(() => dispatch({type: REMOVE_ALERT}),5000);
      }

    return ( 
    <AlertContext.Provider
    value = {{
        alert: state.alert,
        setAlert
    }}
    >
        {props.children}
    </AlertContext.Provider>
    )
}

export default AlertState;