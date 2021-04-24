import React, { useState, ChangeEvent, useEffect, useMemo, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Search } from './sideEffect';
// import { dashboardStoreType } from '../../types/weatherTypes';
import Search from "./components/search";
import NotFound from "./components/notFound";
import Loading from "./components/loading";
import CurrentWeather from "./WeatherState/weatherLocation"
import WeatherList from "./WeatherList/weatherList";
import useDebounce from "../../components/debound";
import { WeatherGeoStateType, SearchWeatherParam, OneCallParam, geoType } from "../../types/weatherTypes";

import { mapStateToProps, mapDispatchToProps } from "./redux"

import styles from "./style.module.css";

type PropsType = {
  error?: string,
  loading?: boolean,
  searchWeather: (param: SearchWeatherParam) => void,
  getOneCall: (param: OneCallParam) => void,

}
const Dashboard: React.FunctionComponent<PropsType> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string | null>('');
  const debouncedSearchTerm: string = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      props.searchWeather({
        q: debouncedSearchTerm, cb: (info: geoType) => {
          props.getOneCall({ ...info })
        }
      });
    }
  }, [debouncedSearchTerm])


  return (
    <div className={styles.root}>
      <Search onChange={(val: ChangeEvent<HTMLInputElement>) => setSearchTerm(val.target.value)} />
      <div className={styles.content}>
        {!props.error && !props.loading && (<Fragment>
          <CurrentWeather />
          <WeatherList />
        </Fragment>)}
        {props.loading && (<Loading />)}
        {props.error && (<NotFound />)}
      </div>
    </div>
  );
};

const withRedux = connect(mapStateToProps, mapDispatchToProps);
export default withRedux(Dashboard);
