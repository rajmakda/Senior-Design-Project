import { GET_TIMESHEET, GET_TIMESHEETS } from './types';

export const getTimeSheet = () => dispatch => {

} 

export const getTimeSheets = (from, to) => dispatch => {
    fetch(`/api/timesheet/${from}/${to}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-access-token": `${localStorage.getItem('token')}`
            },
        })
        .then(res => {
            return res.json();
        })
        .catch(err => dispatch({
             type: GET_TIMESHEETS,
             payload: {}
        }))
        .then(res => dispatch({
            type: GET_TIMESHEETS,
            payload: res
        }))
}