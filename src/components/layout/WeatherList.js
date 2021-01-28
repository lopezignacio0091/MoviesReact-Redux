import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './WeatherItem';

const WeatherList = ({weatherData}) => {
    return (
        <Fragment>
            {
                weatherData.map(item => (
                    <WeatherItem />
                ))
            }
        </Fragment>
    );
}

WeatherList.propTypes = {
    weatherData: PropTypes.object.isRequired,
}

export default WeatherList;
