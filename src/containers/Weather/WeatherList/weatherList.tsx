import React, { useMemo, FunctionComponent, useState } from 'react';
import { connect } from "react-redux"

import { getNextFromOffset } from "../../../helpers/weatherFunc"
import { get } from "../../../helpers/helperFunc"
import { mapStateToProps, mapDispatchToProps } from "./redux"
import WeatherItem from "./weatherItem"
import styles from "./style.module.css";
import {
    weatherItemType, WeatherGeoStateType
} from "../../../types/weatherTypes";

type PropsType = {
    daily?: weatherItemType[],
    timezone_offset?: number,
    changeCurrentDay: (param: { current: weatherItemType }) => void
}

const WeatherList: FunctionComponent<PropsType> = (props) => {
    const { daily, changeCurrentDay } = props
    const [activeItem, setActiveItem] = useState<number>(0);

    const nextFromOffset = useMemo(() => getNextFromOffset(get(props, 'timezone_offset')), [props.timezone_offset])
    return (
        <div className={styles.weatherListLayout}>
            {Array.isArray(daily) && daily.map((ite, index) =>
            (<WeatherItem onChangeCurrent={(item: weatherItemType) => {
                setActiveItem(index + 1);
                changeCurrentDay({ current: item });
            }}
                isActive={activeItem - 1 === index}
                dayOfItem={nextFromOffset[index]} key={ite.dt} item={ite} />))
            }
        </div>
    );
};

const withRedux = connect(mapStateToProps, mapDispatchToProps);
export default withRedux(WeatherList);
