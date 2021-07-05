import { ListRoute, ListDefaultRouter } from "./const"

function createRoutineCreator(stage: string) {
    return function <T>(payload?: T): { type: string, payload?: T } {
        return { type: stage, payload }
    }
}

type ListRouteType = typeof ListRoute;
type ListRouteFuncType = {
    trigger: <T>(payload?: T) => { type: string, payload?: T },
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

        REQUEST: key + ListRoute.TRIGGER,
        request: createRoutineCreator(key + ListRoute.TRIGGER),

        SUCCESS: key + ListRoute.TRIGGER,
        success: createRoutineCreator(key + ListRoute.TRIGGER),

        FAILURE: key + ListRoute.TRIGGER,
        failure: createRoutineCreator(key + ListRoute.TRIGGER),

        FULFILL: key + ListRoute.TRIGGER,
        fullfil: createRoutineCreator(key + ListRoute.TRIGGER)
    }
}