import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { api, apiKey } from "./config";
import FruitsType from "../interfaces/fruits"

const instance = axios.create({
    //   baseURL: giphyV1Url,
});

export type ApiRouteListType = {
    getFruits(payload: AxiosRequestConfig): Promise<AxiosResponse<FruitsType[]>>,
    // oneCall(payload: AxiosRequestConfig): Promise<AxiosResponse<WeatherLocationType>>,
    // airPollution(payload: AxiosRequestConfig): Promise<AxiosResponse<AirPollution>>,
};

export default {
    getFruits: (payload: AxiosRequestConfig) => {
        payload.params = { ...payload.params, appid: apiKey, }
        return instance.get(`${api}/fruits`, payload)
    },

}
