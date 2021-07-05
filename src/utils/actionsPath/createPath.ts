import { ListRoute, ListDefaultRouter } from "./const"

function createRoutineCreator(stage: string) {
    return function <T>(payload: T): { type: string, payload: T } {
        return { type: stage, payload }
    }
}

type ListRouteType = typeof ListRoute;
type ListRouteFuncType = {
    trigger: <T>(payload?: T) => { type: string, payload: T },
    request: <T>(payload?: T) => { type: string, payload?: T },
    success: <T>(payload?: T) => { type: string, payload?: T },
    failure: <T>(payload?: T) => { type: string, payload?: T },
    fullfil: <T>(payload?: T) => { type: string, payload?: T },
}
export function createRoutine<T>({ key, payload }: { key: string, payload?: T }):
    (ListRouteType & ListRouteFuncType) {
    return {
        TRIGGER: key + ListRoute.TRIGGER,
        trigger: createRoutineCreator(key + ListRoute.TRIGGER),

        REQUEST: key + ListRoute.REQUEST,
        request: createRoutineCreator(key + ListRoute.REQUEST),

        SUCCESS: key + ListRoute.SUCCESS,
        success: createRoutineCreator(key + ListRoute.SUCCESS),

        FAILURE: key + ListRoute.FAILURE,
        failure: createRoutineCreator(key + ListRoute.FAILURE),

        FULFILL: key + ListRoute.FULFILL,
        fullfil: createRoutineCreator(key + ListRoute.FULFILL)
    }
}