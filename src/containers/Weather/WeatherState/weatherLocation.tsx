import React, { FunctionComponent, Fragment, useMemo } from 'react'

import styles from "./style.module.css";
import { WeatherLocationType } from "../../../types/weather";
import { getTimeFromOffset, windDegConvert, convertAirQuality, getImageLink } from "../../../helpers/weatherFunc";
import lang from "../../../helpers/language";

const WeatherLocation: FunctionComponent<WeatherLocationType> = (props) => {
    const { timezone_offset, current } = props;
    const timeWeather = useMemo(() => getTimeFromOffset(timezone_offset), [timezone_offset])
    const wind_deg = useMemo(() => windDegConvert(current.wind_deg), [current.wind_deg])
    const aqi = useMemo(() => convertAirQuality(props.aqi), [props.aqi])
    return (
        <Fragment>
            <div className={styles.location}>
                {props.name}, {props.country}
            </div>
            <div className={styles.tempWeather}>
                {timeWeather} • {current.weather[0].description}
            </div>
            <div className={styles.currentWeather}>
                <div className={styles.currentWeatherLeft}>
                    <div className={styles.currentWeatherLeftImage}>
                        {/* <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="" /> */}
                        <img src={getImageLink(current.weather[0].icon, '@2x')} alt="" />
                    </div>
                    <div className={styles.currentWeatherLeftTemp}>
                        {current.temp}°
                    </div>
                    <div className={props.activeType == 'F' ? styles.currentWeatherLeftFCInactiveType : styles.currentWeatherLeftFCType}>
                        F
                    </div>
                    <div className={styles.currentWeatherLeftFCTypeMiddle}>
                        /
                    </div>
                    <div className={props.activeType == 'C' ? styles.currentWeatherLeftFCInactiveType : styles.currentWeatherLeftFCType}>
                        C
                    </div>
                </div>
                <div className={styles.currentWeatherRight}>
                    <div>{lang.Humidity}: {current.humidity}%</div>
                    <div>{lang.Wind}: {current.wind_speed} {props.activeType == 'F' ? 'MPH' : 'KPH'} {wind_deg}</div>
                    <div>{lang.AirQuality}: {aqi}</div>
                </div>
            </div>
        </Fragment>
    )
}
export default WeatherLocation