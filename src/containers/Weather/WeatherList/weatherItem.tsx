import React from 'react';

import { getImageLink } from "../../../helpers/weatherFunc"
import { get } from "../../../helpers/helperFunc"

import { weatherItemType } from "../../../types/weatherTypes";
import styles from "./style.module.css";

type PropsType = {
    item: weatherItemType,
    isActive: boolean,
    dayOfItem: string,
    onChangeCurrent: (ite: weatherItemType) => void
}

const Item: React.FunctionComponent<PropsType> = (props) => {
    const { item, onChangeCurrent, dayOfItem, isActive } = props;

    return (
        <div className={isActive ? styles.weatherItemLayoutActive : styles.weatherItemLayout}
            onClick={() => onChangeCurrent(item)}
        >
            <div className={styles.dayOfItem}>{dayOfItem}</div>
            <div className={styles.imgOfItem}>
                <img src={getImageLink(item.weather[0].icon)} alt="" />
            </div>
            <div className={styles.maxTemp}>{Math.round(item.temp.max)}°</div>
            <div className={styles.minTemp}>{Math.round(item.temp.min)}°</div>
        </div>
    );
};

export default Item;
