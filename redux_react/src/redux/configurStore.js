import { combineReducers, createStore } from 'redux';
import getValueReduser from './redusers/getValueReducer'

const reducers = combineReducers({
    getValue : getValueReduser
})
const store =  createStore(reducers)

export default store 