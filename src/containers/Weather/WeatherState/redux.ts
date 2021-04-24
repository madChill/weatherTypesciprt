import { keyReducer as key } from '../../../helpers/config';
import { GlobalStore } from "../../../types/storeType"
import {
    WeatherGeoStateType,
    ThunkDispatchWeather,
    SearchWeatherParam, OneCallParam
} from "../../../types/weatherTypes";

import { changeUnit } from "../thunk"
// mapping
export const mapStateToProps = (state: GlobalStore, ownProps: {}): WeatherGeoStateType => {
    return {
        oneCall: state.WEATHER.oneCall,
        air: state.WEATHER.air,
        geo: state.WEATHER.geo,
        unit: state.WEATHER.unit,
        current: state.WEATHER.current,
        error: state.WEATHER.error,
    };
};

export const mapDispatchToProps = (dispatch: ThunkDispatchWeather) => {
    return {
        changeUnit: (unit: string) => dispatch(changeUnit(unit)),
    }
};