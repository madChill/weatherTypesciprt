import { Dispatch } from "redux"
import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { WeatherApiRouteList } from "../../helpers/api";
import { get } from "../../helpers/helperFunc"
import { ActionList, action } from './redux';
import {
    ThunkResultWeather, WeatherStoreActionType,
    geoType, AirPollution, SearchWeatherParam, OneCallParam
} from "../../types/weatherTypes";
import lang from "../../helpers/language"

import { GlobalStore } from "../../types/storeType"

export const getOneCall: ThunkResultWeather<void, OneCallParam> = (params: OneCallParam) => {
    return (dispatch: Dispatch<WeatherStoreActionType>, getState: () => GlobalStore) => {
        const store = getState();
        const units: string = get(store, 'WEATHER.unit');
        Promise.all([WeatherApiRouteList.oneCall({
            params: {
                lat: params.lat,
                lon: params.lon,
                units
            }
        }), WeatherApiRouteList.airPollution({
            params: {
                lat: params.lat,
                lon: params.lon,
            }
        }
        )])
            .then(([res1, res2]) => {
                dispatch(action[ActionList.WEATHER_CHANGE_CURRENT]({ current: res1.data.current }));
                dispatch(action[ActionList.WEATHER_GET_ONE_CALL]({ oneCall: res1.data }));
                dispatch(action[ActionList.WEATHER_GET_AIR_POLLUTION]({ air: res2.data }));
            })
            .catch((err: AxiosError) => {
            })
            .finally(() => dispatch(action[ActionList.WEATHER_LOADING]({ loading: false })))
    }
};


export const searchWeather: ThunkResultWeather<void, SearchWeatherParam> = (params: SearchWeatherParam) => {
    return (dispatch: Dispatch<WeatherStoreActionType>) => {
        dispatch(action[ActionList.WEATHER_LOADING]({ loading: true }))
        const { q, cb } = params;
        WeatherApiRouteList.getGeo({
            params: {
                q,
                limit: 1
            }
        }).then((resq: AxiosResponse<geoType[]>) => {
            dispatch(action[ActionList.WEATHER_GET_GEO]({ geo: resq.data[0] }));
            if (resq.data[0]) { cb(resq.data[0]); }
            else {
                dispatch(action[ActionList.WEATHER_LOADING]({ loading: false }));
                dispatch(action[ActionList.WEATHER_LOADING_FAILED_NOT_FOUND]({ error: lang.notFoundLocation }));
            }
        })
            .catch((err: AxiosError) => dispatch(action[ActionList.WEATHER_LOADING]({ loading: false })))
    }

}

export const changeUnit: ThunkResultWeather<void, string> = (units: string) => {
    return (dispatch: Dispatch<WeatherStoreActionType>, getState: () => GlobalStore) => {
        const store = getState();
        const params: OneCallParam = get(store, 'WEATHER.geo');
        Promise.all([WeatherApiRouteList.oneCall({
            params: {
                lat: params.lat,
                lon: params.lon,
                units
            }
        }), WeatherApiRouteList.airPollution({
            params: {
                lat: params.lat,
                lon: params.lon,
            }
        }
        )])
            .then(([res1, res2]) => {
                dispatch(action[ActionList.WEATHER_CHANGE_CURRENT]({ current: res1.data.current }));
                dispatch(action[ActionList.WEATHER_GET_ONE_CALL]({ oneCall: res1.data }));
                dispatch(action[ActionList.WEATHER_GET_AIR_POLLUTION]({ air: res2.data }));
            })
            .catch((err: AxiosError) => {
            })
            .finally(() => dispatch(action[ActionList.WEATHER_LOADING]({ loading: false })))
    }
};
