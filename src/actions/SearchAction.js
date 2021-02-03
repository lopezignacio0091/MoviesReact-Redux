import {SEARCH_MOVIE_COMPLETE,KEY,SEARCH_MOVIE_ERROR,SET_VALUE_SEARCH,LOADING} from '../actions/types';
 import {apiCall} from '../reducers/api'

export const getMovie = (movie) => async dispatch => {
    try {

        const res = await fetch('http://www.omdbapi.com/?s=%22'+movie+'%22&apikey=3c566bde',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        });
        const data = await res.json();
        dispatch({
            type: SEARCH_MOVIE_COMPLETE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: SEARCH_MOVIE_ERROR,
            payload:'Error buscando la informacion Correspondiente \n ' + error
        });
    };

};

export const setSearchText = (e) =>dispatch=>{
    dispatch({
        type: SET_VALUE_SEARCH,
        payload: e.target.value
    });
}

export const handleCleanText =()=>{
    dispatch({
        type: SET_VALUE_SEARCH,
        payload: ''
    });
}

export const setLoading = () => {
    return{
        type:LOADING
    };
};
