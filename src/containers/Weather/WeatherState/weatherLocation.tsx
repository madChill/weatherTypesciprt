import React, {
    FunctionComponent, Fragment,
    useMemo, useState, useEffect
} from 'react'
import { connect } from "react-redux"

import styles from "./style.module.css";
import { mapStateToProps, mapDispatchToProps } from "./redux";
import {
    weatherItemType, AirPollution, geoType,
    WeatherGeoStateType, WeatherLocationType
} from "../../../types/weatherTypes";
import { GlobalStore } from "../../../types/storeType";
import { get } from "../../../helpers/helperFunc"
import {
    getTimeFromOffset, windDegConvert,
    convertAirQuality, getImageLink
} from "../../../helpers/weatherFunc";
import lang from "../../../helpers/language";
type PropsType = {
    air?: AirPollution,
    geo?: geoType,
    oneCall?: WeatherLocationType,
    unit?: string,
    current?: weatherItemType,
    error?: string,
    changeUnit: (unit: string) => void;
}
const WeatherLocation: FunctionComponent<PropsType> = (props) => {
    const [activeType, setActiveType] = useState<string>('imperial');//metric
    const { air, geo, changeUnit } = props;

    const current: weatherItemType = props.current || get(props, 'oneCall.current');
    const timezone_offset: number = get(props, 'oneCall.timezone_offset');

    const timeWeather = useMemo(() => getTimeFromOffset(timezone_offset), [timezone_offset])
    const wind_deg = useMemo(() => windDegConvert(get(current, 'wind_deg')), [get(current, 'wind_deg')])
    const aqi = useMemo(() => convertAirQuality(get(air, 'list[0].main.aqi')), [get(air, 'list[0].main.aqi')])
    return current ? (
        <Fragment>
            <div className={styles.location}>
                {geo?.local_names?.ascii}, {geo?.country}
            </div>
            <div className={styles.tempWeather}>
                {timeWeather} • {current.weather[0].description}
            </div>
            <div className={styles.currentWeather}>
                <div className={styles.currentWeatherLeft}>
                    <div className={styles.currentWeatherLeftImage}>
                        <img src={getImageLink(current.weather[0].icon, '@2x')} alt="" />
                    </div>
                    <div className={styles.currentWeatherLeftTemp}>
                        {Math.round(Number(current.temp) || current.temp.max)}°
                    </div>
                    <div className={activeType === 'imperial' ? styles.currentWeatherLeftFCInactiveType : styles.currentWeatherLeftFCType}>
                        <button onClick={() => {
                            setActiveType('imperial');
                            changeUnit('imperial');
                        }}>F</button>
                    </div>
                    <div className={styles.currentWeatherLeftFCTypeMiddle}>
                        /
                    </div>
                    <div className={activeType !== 'imperial' ? styles.currentWeatherLeftFCInactiveType : styles.currentWeatherLeftFCType}>
                        <button onClick={() => {
                            setActiveType('metric');
                            changeUnit('metric');
                        }}>C</button>
                    </div>
                </div>
                <div className={styles.currentWeatherRight}>
                    <div>{lang.Humidity}: {current.humidity}%</div>
                    <div>{lang.Wind}: {current.wind_speed} {activeType === 'imperial' ? 'MPH' : 'KPH'} {wind_deg}</div>
                    {!props.current && <div>{lang.AirQuality}: {aqi}</div>}
                </div>
            </div>
        </Fragment>
    ) : <div></div>
}



const withRedux = connect<WeatherGeoStateType, {
    changeUnit: (unit: string) => void;
}, {}, GlobalStore>(mapStateToProps, mapDispatchToProps);
export default withRedux(WeatherLocation);
