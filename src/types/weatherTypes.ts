
export type AirPollution = {
    "list": [
        {
            "main": {
                "aqi": 4
            },
            "dt": 1619110800
        }
    ]
}

export type geoType = {
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

export type weatherItemType = {
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
export type WeatherLocationType = {
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

export type WeatherGeoStateType = {
    geo?: geoType,
    loading?: boolean,
    error?: null | string,
    oneCall?: WeatherLocationType,
    air?: AirPollution,
}
export type WeatherGeoActionType = { type: string } & WeatherGeoStateType

export type ActionType<T> = {
    GET_GEO: T,
    LOADING: T,
    GET_ONE_CALL: T,
    GET_AIR_POLLUTION: T,
}




