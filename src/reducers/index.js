import { combineReducers } from 'redux';
import clockReducers from './clock_reducer';

export default combineReducers({
    //set all reducers key value pair here
    clock: clockReducers
});
