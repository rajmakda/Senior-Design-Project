import React, { Component } from 'react'

class TimesheetTable extends Component {

    constructor(props) {
        super(props);

        this.setState = {
            name: '',
            sjsuId: '',
            to: '',
            from: '',
            jobDone: '',
            timeInOut: '',
            totalHours: ''
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.GIAEmployee.timesheets) {
    //         console.log("Got the timesheets");


    //     }
    // }

  render() {
    return (
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>SJSU ID</th>
                    <th>To</th>
                    <th>From</th>
                    <th>Job Done</th>
                    <th>Time in/out</th>
                    <th>Total Hours</th>
                </tr>
            </thead>
        </table>
      </div>
    )
  }
}
export default TimesheetTable;
