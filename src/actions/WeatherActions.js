import { LOADING,ERROR,KEY,GET_WEATHER_DATA } from 'types';

export const setLoading = () => {
    return{
        type:LOADING
    };
};

export const getWeather = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid={'+KEY+'}');
        const data = await res.json();

        dispatch({
            type: GET_WEATHER_DATA,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload:'Error buscando la info de Weather \n ' + error
        });
    };
};