import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { api, apiKey } from "../config";
import { geoType, WeatherLocationType, AirPollution } from "../../types/weatherTypes"

const instance = axios.create({
    //   baseURL: giphyV1Url,
});

export default instance;
export type WeatherApiRouteListType = {
    getGeo(payload: AxiosRequestConfig): Promise<AxiosResponse<geoType>>,
    oneCall(payload: AxiosRequestConfig): Promise<AxiosResponse<WeatherLocationType>>,
    airPollution(payload: AxiosRequestConfig): Promise<AxiosResponse<AirPollution>>,
    search(payload: AxiosRequestConfig): any,
    // searchListIds(payload: AxiosRequestConfig): any,
};

export const WeatherApiRouteList: WeatherApiRouteListType = {
    getGeo: (payload: AxiosRequestConfig) => {
        payload.params = { ...payload.params, appid: apiKey, }
        return instance.get(`${api}/geo/1.0/direct`, payload)
    },
    oneCall: (payload: AxiosRequestConfig) => {
        // lat=39.76&lon=-98.5&units=imperial
        payload.params = { ...payload.params, appid: apiKey, exclude: 'minutely,hourly' }
        return instance.get(`${api}/data/2.5/onecall`, payload)
    },
    airPollution: (payload: AxiosRequestConfig) => {
        // lat=21.0245&lon=105.8412
        payload.params = { ...payload.params, appid: apiKey, }
        return instance.get(`${api}/data/2.5/air_pollution`, payload)
    },
    search: (payload: AxiosRequestConfig) => {
        payload.params = { ...payload.params, appid: apiKey }
        return instance.get(`${api}/geo/1.0/direct?q=ha noi&limit=1&appid=1c5da32bd6a0d1c4c017b21b49833c7f`, payload)
    },
    // searchListIds: (payload: AxiosRequestConfig) => {
    //     payload.params = { ...payload.params, api_key: apiKey }
    //     return instance.get(`${api}/gifs`, payload)
    // },

}
