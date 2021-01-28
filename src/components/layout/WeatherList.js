import React, {Fragment} from 'react';
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
