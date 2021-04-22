import { Dispatch, Action, bindActionCreators } from 'redux';
import { keyReducer as key } from '../../helpers/config';
import { searchWeather, getOneCall } from './thunk';
import { WeatherGeoStateType, ActionType, WeatherGeoActionType, geoType } from "../../types/weatherTypes";

export const INITIAL_STATE: WeatherGeoStateType = {
    geo: { name: "" },
    loading: false,
    error: null
};

//action
export const ActionList: ActionType<string> = {
    GET_GEO: 'GET_GEO',
    GET_ONE_CALL: 'GET_ONE_CALL',
    LOADING: 'LOADING',
    GET_AIR_POLLUTION: 'GET_AIR_POLLUTION',
};
// let action: ActionType<() => {}>;
export const action: ActionType<(payload: WeatherGeoStateType) => {}> = {
    GET_GEO: (payload: WeatherGeoStateType) => ({
        type: key.weather + ActionList.GET_GEO,
        payload
    }),
    GET_ONE_CALL: (payload: WeatherGeoStateType) => ({
        type: key.weather + ActionList.GET_ONE_CALL,
        payload
    }),
    GET_AIR_POLLUTION: (payload: WeatherGeoStateType) => ({
        type: key.weather + ActionList.GET_ONE_CALL,
        payload
    }),
    LOADING: (payload: WeatherGeoStateType) => ({
        type: key.weather + ActionList.LOADING,
        payload
    })
}

//reducer
export const reducer = (state: WeatherGeoStateType = INITIAL_STATE, payload: WeatherGeoActionType):
    WeatherGeoStateType => {
    switch (payload.type) {
        case ActionList.LOADING:
            return { ...state, loading: payload.loading };
        case ActionList.GET_GEO:
            return { ...state, geo: payload.geo };
        case ActionList.GET_ONE_CALL:
            return { ...state, oneCall: payload.oneCall };
        case ActionList.GET_AIR_POLLUTION:
            return { ...state, air: payload.air };
        default:
            return state;
    }
};

// mapping
export const mapStateToProps = (state: WeatherGeoStateType) => {
    return {
        // [key.weather]: state[key.weather]
    };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        searchWeather,
        getOneCall
    }, dispatch)
};
