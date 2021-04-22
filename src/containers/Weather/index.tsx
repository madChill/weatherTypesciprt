import React, { useState, ChangeEvent, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
// import { Search } from './sideEffect';
// import { dashboardStoreType } from '../../types/weatherTypes';
import Search from "./components/search";
import CurrentWeather from "./WeatherState/weatherLocation"
import WeatherList from "./WeatherList/weatherList";
import useDebounce from "../../components/debound";
import { WeatherGeoStateType, WeatherGeoActionType, geoType } from "../../types/weatherTypes";

import { mapDispatchToProps } from "./redux"

import styles from "./style.module.css";

const defaultProps = {
  activeType: "C",
  inactiveType: "F",
  name: "Ha Noi",
  country: "VN",
  aqi: 4,
  "timezone": "Asia/Bangkok",
  "timezone_offset": 25200,
  "current": {
    "dt": 1618981583,
    "sunrise": 1618957984,
    "sunset": 1619003838,
    "temp": 31,
    "feels_like": 35.35,
    "pressure": 1009,
    "humidity": 62,
    "dew_point": 22.86,
    "uvi": 10.84,
    "clouds": 40,
    "visibility": 10000,
    "wind_speed": 4.63,
    "wind_deg": 140,
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ]
  },
};
type PropsType = {
  searchWeather: (q: string, cb: (geoInfo: geoType) => void) => {},
  getOneCall: (params: geoType & { units: string }) => void,

}
const Dashboard: React.FunctionComponent<PropsType> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string | null>('');
  const [unit, setUnit] = useState<string>('imperial');//metric
  const debouncedSearchTerm: string = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      props.searchWeather(debouncedSearchTerm, (info: geoType) => {
        props.getOneCall({ ...info, units: unit })
      });
    }
  }, [debouncedSearchTerm])


  return (
    <div className={styles.root}>
      <Search onChange={(val: ChangeEvent<HTMLInputElement>) => setSearchTerm(val.target.value)} />
      <div className={styles.content}>
        <CurrentWeather {...defaultProps} />
        <WeatherList timezone_offset={defaultProps.timezone_offset} />
      </div>
    </div>
  );
};

const withRedux = connect(null, mapDispatchToProps);
export default withRedux(Dashboard);
