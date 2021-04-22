import React from 'react';

import { getImageLink } from "../../../helpers/weatherFunc"

import { weatherItemType } from "../../../types/weatherTypes";
import styles from "./style.module.css";


const Dashboard: React.FunctionComponent<weatherItemType & { dayOfItem: string }> = (props) => {
    const { weather } = props
    return (
        <div className={styles.weatherItemLayout}>
            <div className={styles.dayOfItem}>{props.dayOfItem}</div>
            <div className={styles.imgOfItem}>
                <img src={getImageLink(weather[0].icon)} alt="" />
            </div>
            <div className={styles.maxTemp}>{Math.round(props.temp.max)}°</div>
            <div className={styles.minTemp}>{Math.round(props.temp.min)}°</div>
        </div>
    );
};

export default Dashboard;
