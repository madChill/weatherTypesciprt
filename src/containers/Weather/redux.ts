import { GlobalStore } from './../../types/storeType';
import { searchWeather, getOneCall } from './thunk';
import {
    WeatherGeoStateType, ActionType, WeatherStoreActionType,
    ThunkDispatchWeather, SearchWeatherParam, OneCallParam
} from "../../types/weatherTypes";

export const INITIAL_STATE: WeatherGeoStateType = {
    geo: { name: "" },
    loading: false,
    unit: 'imperial'
};

//action
export const ActionList: ActionType<string> = {
    WEATHER_GET_GEO: 'WEATHER_GET_GEO',
    WEATHER_GET_ONE_CALL: 'WEATHER_GET_ONE_CALL',
    WEATHER_LOADING: 'WEATHER_LOADING',
    WEATHER_GET_AIR_POLLUTION: 'WEATHER_GET_AIR_POLLUTION',
    WEATHER_CHANGE_CURRENT: 'WEATHER_CHANGE_CURRENT',
    WEATHER_LOADING_FAILED_NOT_FOUND: 'WEATHER_LOADING_FAILED_NOT_FOUND',
};
type ListOfActionType<T> = (payload: T) => WeatherStoreActionType
export const action: ActionType<ListOfActionType<WeatherGeoStateType>> = {
    WEATHER_GET_GEO: (payload: WeatherGeoStateType) => ({
        type: ActionList.WEATHER_GET_GEO,
        payload
    }),
    WEATHER_GET_ONE_CALL: (payload: WeatherGeoStateType) => ({
        type: ActionList.WEATHER_GET_ONE_CALL,
        payload
    }),
    WEATHER_GET_AIR_POLLUTION: (payload: WeatherGeoStateType) => ({
        type: ActionList.WEATHER_GET_AIR_POLLUTION,
        payload
    }),
    WEATHER_LOADING: (payload: WeatherGeoStateType) => ({
        type: ActionList.WEATHER_LOADING,
        payload
    }),
    WEATHER_CHANGE_CURRENT: (payload: WeatherGeoStateType) => ({
        type: ActionList.WEATHER_CHANGE_CURRENT,
        payload
    }),
    WEATHER_LOADING_FAILED_NOT_FOUND: (payload: WeatherGeoStateType) => ({
        type: ActionList.WEATHER_LOADING_FAILED_NOT_FOUND,
        payload
    })
}

//reducer
export const reducer = (state: WeatherGeoStateType = INITIAL_STATE, action: WeatherStoreActionType):
    WeatherGeoStateType => {
    switch (action.type) {
        case ActionList.WEATHER_LOADING:
            return { ...state, loading: action.payload.loading };
        case ActionList.WEATHER_LOADING_FAILED_NOT_FOUND:
            return { ...state, error: action.payload.error };
        case ActionList.WEATHER_GET_GEO:
            return { ...state, geo: action.payload.geo };
        case ActionList.WEATHER_GET_ONE_CALL:
            return { ...state, oneCall: action.payload.oneCall };
        case ActionList.WEATHER_GET_AIR_POLLUTION:
            return { ...state, air: action.payload.air };
        case ActionList.WEATHER_CHANGE_CURRENT:
            return { ...state, current: action.payload.current };
        default:
            return state;
    }
};

// mapping
export const mapStateToProps = (state: GlobalStore) => {
    return {
        error: state.WEATHER.error,
        loading: state.WEATHER.loading
    };
};

export const mapDispatchToProps = (dispatch: ThunkDispatchWeather) => {
    return {
        searchWeather: (param: SearchWeatherParam) => dispatch(searchWeather(param)),
        getOneCall: (param: OneCallParam) => dispatch(getOneCall(param)),
    }
};
