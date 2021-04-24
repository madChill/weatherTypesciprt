import {
    WeatherGeoStateType, weatherItemType, WeatherStoreActionType,
    geoType, ThunkDispatchWeather, SearchWeatherParam, OneCallParam
} from "../../../types/weatherTypes";
import { GlobalStore } from "../../../types/storeType"
import { action, ActionList } from "../redux"
// mapping
export const mapStateToProps = (state: GlobalStore) => {
    return {
        daily: state.WEATHER.oneCall?.daily,
        timezone_offset: state.WEATHER.oneCall?.timezone_offset,
    };
};

export const mapDispatchToProps = (dispatch: ThunkDispatchWeather) => {
    return {
        changeCurrentDay: (param: { current: weatherItemType }) => dispatch(action[ActionList.WEATHER_CHANGE_CURRENT](param)),
    }
};