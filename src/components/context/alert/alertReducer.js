import {
SET_ALERT,
REMOVE_ALERT
} from '../types';

// recibimos el initial state de la app y las action representan lo que pasamos por parametro en el dispatch
export default (state,action) => {
    // ...state lo que hace es hacer una copia exacta del state de la app para no modificar la original
    // y poder cambiarle los valores que queremos
    switch(action.type){
        case SET_ALERT:
            return action.payload
        case REMOVE_ALERT:
            return null
        default :
        return state;
    }
}