import axios from 'axios';
import { GET_TIMESHEET, GET_TIMESHEETS } from './types';

export const getTimeSheet = () => dispatch => {

} 

export const getTimeSheets = (from, to) => dispatch => {
    axios
        .get(`/api/timesheet/${from}/${to}`)
        .then(res => dispatch({
                type: GET_TIMESHEETS,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: GET_TIMESHEETS,
                payload: {}
            }))
}