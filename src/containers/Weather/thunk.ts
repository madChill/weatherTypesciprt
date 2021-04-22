import { Dispatch } from "redux"
import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { WeatherApiRouteList } from "../../helpers/api";

import { ActionList, action } from './redux';
import { WeatherGeoStateType, WeatherGeoActionType, geoType, AirPollution, WeatherLocationType } from "../../types/weatherTypes";
export function getOneCall(params: geoType[] & { units: string }) {
    return (dispatch: Dispatch<WeatherGeoActionType>) => {
        console.log(params, "===params===");

        Promise.all([WeatherApiRouteList.oneCall({
            params: {
                lat: params[0].lat,
                lon: params[0].lon,
                units: params.units
            }
        }), WeatherApiRouteList.airPollution({
            params: {
                lat: params[0].lat,
                lon: params[0].lon,
            }
        }
        )])
            .then(([res1, res2]) => {
                dispatch(action[ActionList.GET_ONE_CALL]({ oneCall: res1.data }));
                dispatch(action[ActionList.GET_AIR_POLLUTION]({ air: res2.data }));
            })
            .catch((err: AxiosError) => { })
            .finally(() => dispatch(action[ActionList.LOADING]({ loading: false })))
    }
};


export function searchWeather(q: string, cb: (geoInfo: geoType) => void) {
    return (dispatch: Dispatch<WeatherGeoActionType>) => {
        dispatch(action[ActionList.LOADING]({ loading: true }))
        WeatherApiRouteList.getGeo({
            params: {
                q,
                limit: 1
            }
        }).then((resq: AxiosResponse<geoType>) => {
            dispatch(action[ActionList.GET_GEO]({ geo: resq.data }));
            cb(resq.data)
        })
            .catch((err: AxiosError) => dispatch(action[ActionList.LOADING]({ loading: false })))
    }

}



// export function getListTodo() {
//     return function (dispatch: Function, getState: Function, api: string) {
//         return axios
//             .get(api + '/todo')
//             .then((res) => {
//                 dispatch({ data: res.data, type: Types.FETCH_LIST });
//             })
//             .catch((err) => { });
//     };
// }
