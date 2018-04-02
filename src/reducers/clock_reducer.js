import types from '../actions/types';

const DEFAULT_STATE = { currentTime: new Date().toLocaleTimeString() };

export default function ( state = DEFAULT_STATE, action) {
    switch (action.type){
        case types.TICK:
            //do this when there're no payload in action
            // return {...state, currentTime: new Date().toLocaleTimeString()};
            return {...state, currentTime: action.payload};
        default:
            return state;
    }
}