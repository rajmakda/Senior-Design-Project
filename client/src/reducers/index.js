import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import timesheetReducer from './timesheetReducer';

export default combineReducers({
    timesheets: timesheetReducer,
    errors: errorReducer
});