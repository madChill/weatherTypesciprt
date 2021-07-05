import { createRoutine } from '../../utils/actionsPath/createPath';
import { key, GET_LIST } from './const';

export default {
    getFruits: createRoutine({ key: GET_LIST })
}