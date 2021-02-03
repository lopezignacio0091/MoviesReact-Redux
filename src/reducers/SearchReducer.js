import {SEARCH_MOVIE_START,SEARCH_MOVIE_ERROR,SEARCH_MOVIE_COMPLETE,SET_VALUE_SEARCH,LOADING} from '../actions/types';

const initialState={
    resultsMovies:[],
    searchTextValue:"",
    loading : false,
};


export default function (state = initialState,action){

switch (action.type) {
    case SEARCH_MOVIE_START:
       return {
           ...state
       } 
        case SEARCH_MOVIE_ERROR:
            return {
                ...state
            }
             case SEARCH_MOVIE_COMPLETE:
            return {
                ...state,
                resultsMovies:action.payload.Search,
                loading:false
            } 
            case SET_VALUE_SEARCH:
           return {
               ...state,
               searchTextValue:action.payload
           }
           case LOADING:
            return {
                ...state,
                loading: true
            }; 
    default: 
    return {
        ...state
    } 
}


}