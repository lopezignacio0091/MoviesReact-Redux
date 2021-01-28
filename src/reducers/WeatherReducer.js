import { LOADING,ERROR } from "../actions/types";
import { loading } from "../actions/WeatherActions";

const initialState = {
    loading = false,
    error = ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};