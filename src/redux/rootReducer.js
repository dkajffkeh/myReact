import { INIT_COUNT_STATE } from './state'
import { INCREMENT, DECREMENT } from './action';
import { combineReducers } from 'redux';

function counter (state = INIT_COUNT_STATE, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state
    }
}

const counterReducer = combineReducers({ counter });

export default counterReducer