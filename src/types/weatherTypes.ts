import { Dispatch, Action } from "redux"
import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { GlobalStore } from "./storeType"

export interface AirPollution {
    "list": [
        {
            "main": {
                "aqi": 4
            },
            "dt": 1619110800
        }
    ]
}

export interface geoType {
    "lat"?: number,
    "lon"?: number,
    "country"?: string,
    "name": string,
    "local_names"?: {
        "ar": string,
        "ascii": string,
        "az": string,
        "bg": string,
        "ca": string,
        "da": string,
        "de": string,
        "el": string,
        "en": string,
        "eu": string,
        "fa": string,
        "feature_name": string,
        "fi": string,
        "fr": string,
        "he": string,
        "hi": string,
        "hu": string,
        "id": string,
        "it": string,
        "ja": string,
        "lt": string,
        "mk": string,
        "nl": string,
        "no": string,
        "pl": string,
        "pt": string,
        "ru": string,
        "sk": string,
        "sl": string,
        "sr": string,
        "th": string,
        "tr": string,
        "vi": string
    }
}

export interface weatherItemType {
    "dt": number,
    "sunrise": number,
    "sunset": number,
    "moonrise": number,
    "moonset": number,
    "moon_phase": number,
    "temp": {
        "day": number,
        "min": number,
        "max": number,
        "night": number,
        "eve": number,
        "morn": number
    },
    "feels_like": {
        "day": number,
        "night": number,
        "eve": number,
        "morn": number
    },
    "pressure": number,
    "humidity": number,
    "dew_point": number,
    "wind_speed": number,
    "wind_deg": number,
    "wind_gust": number,
    "weather":
    {
        "id": number,
        "main": string,
        "description": string,
        "icon": string
    }[]
    ,
    "clouds"?: number,
    "pop"?: number,
    "rain"?: number,
    "uvi"?: number
}
export interface WeatherLocationType {
    activeType: string,
    inactiveType: string,
    aqi: number,
    name: string,
    country: string,
    timezone: string,
    timezone_offset: number,
    current: weatherItemType,
    daily?: weatherItemType[],
}

export interface WeatherGeoStateType {
    geo?: geoType,
    loading?: boolean,
    error?: string,
    oneCall?: WeatherLocationType,
    air?: AirPollution,
    unit?: string,
    current?: weatherItemType
}
export type WeatherStoreActionType = { type: string, payload: WeatherGeoStateType }

export interface ActionType<T> {
    WEATHER_GET_GEO: T,
    WEATHER_GET_ONE_CALL: T,
    WEATHER_LOADING: T,
    WEATHER_GET_AIR_POLLUTION: T,
    WEATHER_CHANGE_CURRENT: T,
    WEATHER_LOADING_FAILED_NOT_FOUND: T,
}

// export type ThunkActionType<T> = <Dispatch><WeatherStoreActionType>

// export type StoreState = { ['WeatherGeoStateType']: WeatherGeoStateType } & 
export type OneCallParam = geoType;
export type SearchWeatherParam = { q: string, cb: (geoInfo: geoType) => void }

export type ThunkActionType = (dispatch: Dispatch<WeatherStoreActionType>) => Promise<AxiosResponse>

export type ThunkResultWeather<R, P> = (param: P) => ThunkAction<R, GlobalStore, null, Action<{ type: string, payload: WeatherGeoStateType }>>

export type ThunkDispatchWeather = ThunkDispatch<GlobalStore, null, Action<{ type: string, payload: WeatherGeoStateType }>>
