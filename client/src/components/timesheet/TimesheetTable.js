import React, { Component } from 'react'
import { connect } from 'react-redux';
import Moment from 'react-moment';

class TimesheetTable extends Component {

    constructor(props) {
        super(props);
    }

  render() {

    if (this.props.timesheets.timesheets === null) {
        return (
            <div>
                No timesheets
            </div>
        )
    } else {

        const sheet = this.props.timesheets.timesheets.map(sht => (
        <tr key={sht._id}>
            <td>{sht.sjsuid}</td>
            <td>{sht.name}</td>
            <td><Moment format="MM/DD/YYYY">{sht.timesheets.timeperiod.from}</Moment></td>
            <td><Moment format="MM/DD/YYYY">{sht.timesheets.timeperiod.to}</Moment></td>
            <td>{sht.timesheets.worklog[0].job}</td>
            <td>{sht.timesheets.worklog[0].time}</td>
            <td>{sht.timesheets.worklog[0].hours}</td>
        </tr>
    ));
        return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>SJSU ID</th>
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Job Done</th>
                        <th>Time in/out</th>
                        <th>Total Hours</th>
                    </tr>
                    {sheet}
                </thead>
            </table>
        </div>
        )
    }
  }
}

const mapStateToProps = state => ({
    timesheets: state.timesheets,
    errors: state.errors
});


export default connect(mapStateToProps)(TimesheetTable);
