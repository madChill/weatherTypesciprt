import React, { useMemo, FunctionComponent } from 'react';

import { getNextFromOffset } from "../../../helpers/weatherFunc"

import WeatherItem from "./weatherItem"
import styles from "./style.module.css";

const defaultProps = [
    {
        "dt": 1619028000,
        "sunrise": 1619005627,
        "sunset": 1619054265,
        "moonrise": 1619031720,
        "moonset": 1618995720,
        "moon_phase": 0.3,
        "temp": {
            "day": 40.89,
            "min": 28.53,
            "max": 47.98,
            "night": 38.16,
            "eve": 46.94,
            "morn": 30.34
        },
        "feels_like": {
            "day": 34.83,
            "night": 22.77,
            "eve": 45.59,
            "morn": 22.77
        },
        "pressure": 1029,
        "humidity": 49,
        "dew_point": 24.22,
        "wind_speed": 12.08,
        "wind_deg": 346,
        "wind_gust": 12.12,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": 32,
        "pop": 0,
        "uvi": 5.99
    },
    {
        "dt": 1619114400,
        "sunrise": 1619091944,
        "sunset": 1619140726,
        "moonrise": 1619122260,
        "moonset": 1619084220,
        "moon_phase": 0.33,
        "temp": {
            "day": 44.1,
            "min": 35.69,
            "max": 47.86,
            "night": 43.41,
            "eve": 43.56,
            "morn": 37.35
        },
        "feels_like": {
            "day": 35.55,
            "night": 31.5,
            "eve": 35.56,
            "morn": 31.5
        },
        "pressure": 1018,
        "humidity": 75,
        "dew_point": 36.84,
        "wind_speed": 21.61,
        "wind_deg": 153,
        "wind_gust": 28.66,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": 99,
        "pop": 0.52,
        "rain": 0.69,
        "uvi": 0.81
    },
    {
        "dt": 1619200800,
        "sunrise": 1619178261,
        "sunset": 1619227187,
        "moonrise": 1619212920,
        "moonset": 1619172540,
        "moon_phase": 0.37,
        "temp": {
            "day": 53.19,
            "min": 43.75,
            "max": 56.28,
            "night": 46.38,
            "eve": 54.52,
            "morn": 43.75
        },
        "feels_like": {
            "day": 51.44,
            "night": 42.04,
            "eve": 52.92,
            "morn": 42.04
        },
        "pressure": 1009,
        "humidity": 69,
        "dew_point": 43.61,
        "wind_speed": 12.01,
        "wind_deg": 157,
        "wind_gust": 13.51,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": 100,
        "pop": 0.08,
        "uvi": 5.87
    },
    {
        "dt": 1619287200,
        "sunrise": 1619264580,
        "sunset": 1619313648,
        "moonrise": 1619303700,
        "moonset": 1619260680,
        "moon_phase": 0.4,
        "temp": {
            "day": 59.34,
            "min": 39.67,
            "max": 63.25,
            "night": 50.16,
            "eve": 58.01,
            "morn": 39.67
        },
        "feels_like": {
            "day": 57.42,
            "night": 35.85,
            "eve": 56.43,
            "morn": 35.85
        },
        "pressure": 1014,
        "humidity": 52,
        "dew_point": 41.95,
        "wind_speed": 9.64,
        "wind_deg": 105,
        "wind_gust": 20.71,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "clouds": 14,
        "pop": 0,
        "uvi": 6.36
    },
    {
        "dt": 1619373600,
        "sunrise": 1619350900,
        "sunset": 1619400109,
        "moonrise": 1619394540,
        "moonset": 1619348820,
        "moon_phase": 0.44,
        "temp": {
            "day": 64.89,
            "min": 48.52,
            "max": 70.43,
            "night": 59.16,
            "eve": 67.1,
            "morn": 48.65
        },
        "feels_like": {
            "day": 63.66,
            "night": 43.21,
            "eve": 66.56,
            "morn": 43.21
        },
        "pressure": 1008,
        "humidity": 55,
        "dew_point": 48.51,
        "wind_speed": 22.35,
        "wind_deg": 176,
        "wind_gust": 35.9,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": 78,
        "pop": 0,
        "uvi": 7
    },
    {
        "dt": 1619460000,
        "sunrise": 1619437221,
        "sunset": 1619486570,
        "moonrise": 1619485560,
        "moonset": 1619436960,
        "moon_phase": 0.5,
        "temp": {
            "day": 81.05,
            "min": 55.36,
            "max": 84.63,
            "night": 72.14,
            "eve": 76.48,
            "morn": 55.36
        },
        "feels_like": {
            "day": 79.77,
            "night": 53.89,
            "eve": 76.23,
            "morn": 53.89
        },
        "pressure": 999,
        "humidity": 29,
        "dew_point": 46.72,
        "wind_speed": 23.02,
        "wind_deg": 172,
        "wind_gust": 46.1,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": 43,
        "pop": 0,
        "uvi": 7
    },
    {
        "dt": 1619546400,
        "sunrise": 1619523542,
        "sunset": 1619573031,
        "moonrise": 1619576700,
        "moonset": 1619525340,
        "moon_phase": 0.52,
        "temp": {
            "day": 70.56,
            "min": 56.05,
            "max": 70.56,
            "night": 56.05,
            "eve": 61.2,
            "morn": 61.14
        },
        "feels_like": {
            "day": 69.94,
            "night": 60.24,
            "eve": 60.64,
            "morn": 60.24
        },
        "pressure": 1006,
        "humidity": 56,
        "dew_point": 54.36,
        "wind_speed": 22.75,
        "wind_deg": 178,
        "wind_gust": 27.22,
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": 100,
        "pop": 0.79,
        "rain": 3.21,
        "uvi": 7
    },
    {
        "dt": 1619632800,
        "sunrise": 1619609865,
        "sunset": 1619659492,
        "moonrise": 1619667840,
        "moonset": 1619613960,
        "moon_phase": 0.56,
        "temp": {
            "day": 59.74,
            "min": 47.23,
            "max": 62.58,
            "night": 51.1,
            "eve": 60.85,
            "morn": 47.23
        },
        "feels_like": {
            "day": 58.19,
            "night": 41.77,
            "eve": 59.36,
            "morn": 41.77
        },
        "pressure": 1013,
        "humidity": 59,
        "dew_point": 45.59,
        "wind_speed": 18.28,
        "wind_deg": 3,
        "wind_gust": 20.18,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": 100,
        "pop": 0.75,
        "rain": 0.12,
        "uvi": 7
    }
];

const Dashboard: FunctionComponent<{ timezone_offset: number }> = (props) => {
    // const timeWeather = 
    const nextFromOffset = useMemo(() => getNextFromOffset(props.timezone_offset), [props.timezone_offset])
    return (
        <div className={styles.weatherListLayout}>
            {defaultProps.map((ite, index) =>
                (<WeatherItem dayOfItem={nextFromOffset[index]} key={ite.dt} {...ite} />))
            }
        </div>
    );
};

export default Dashboard;
