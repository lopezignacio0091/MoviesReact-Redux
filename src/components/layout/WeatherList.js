import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getWeather} from '../../actions/WeatherActions';
import WeatherItem from './WeatherItem';

const WeatherList = ({weatherReducer: { loading, weatherData}}) => {
    return (
        <div>
            {
                weatherData.map(item => (
                    <WeatherItem />
                ))
            }
        </div>
    );
}

WeatherList.propTypes = {
    weatherReducer: PropTypes.object.isRequired,
}

const mapStateProps = state => ({
    weatherReducer: state.weatherReducer
})

export default connect(mapStateProps,{getWeather})(WeatherList);
