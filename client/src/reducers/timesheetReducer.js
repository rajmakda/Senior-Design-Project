import { GET_TIMESHEETS, GET_TIMESHEET } from '../actions/types';

const initialState = {
    timesheet: null,
    timesheets: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TIMESHEET:
            return {
                ...state,
                timesheet: action.payload
            }
        case GET_TIMESHEETS:
            return {
                ...state,
                timesheets: action.payload
            }
        default: 
            return state;
    };
};