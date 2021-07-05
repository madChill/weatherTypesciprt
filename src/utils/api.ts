import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import FruitsType from "../interfaces/fruits"

import { api, apiKey } from "./config";

const instance = axios.create({
    //   baseURL: giphyV1Url,
});

export type ApiRouteListType = {
    // getFruits: (payload: AxiosRequestConfig) => Promise<AxiosResponse<FruitsType[]>>,
    getFruits: (payload: AxiosRequestConfig) => Promise<AxiosResponse<FruitsType[]>>,
    // oneCall(payload: AxiosRequestConfig): Promise<AxiosResponse<WeatherLocationType>>,
    // airPollution(payload: AxiosRequestConfig): Promise<AxiosResponse<AirPollution>>,
};

export default {
    getFruits: (payload: AxiosRequestConfig): Promise<AxiosResponse<FruitsType[]>> => {
        payload.params = { ...payload.params, appid: apiKey, }

        return instance.get(`${api}/fruits`, payload)
    },
}

export const getFruits = (payload: { name: string }): Promise<AxiosResponse<FruitsType[]>> => {
    // payload.params = { ...payload.params, appid: apiKey, }
    return instance.get(`${api}/fruits`, {})
};
export async function fetchLyrics(
    artist: string,
    song: string
): Promise<AxiosResponse<FruitsType[]>> {
    return instance.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}
