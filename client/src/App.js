import './App.css';
import React from "react"

class App extends React.Component {
  state = {
    work: [{date:"", job:"", time:"", hours:""}],

  }

handleChange = (e) => {
    if (["date", "job", "time", "hours"].includes(e.target.className) ) {
      let work = [...this.state.work]
      work[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ work }, () => console.log(this.state.work))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }

addRow = (e) => {
    this.setState((prevState) => ({
      work: [...prevState.work, {date:"", job:"", time:"", hours:""}],
    }));
  }

handleSubmit = (e) => {
    var n = JSON.stringify(this.state.work);
    alert(n);
    e.preventDefault() }

render() {
    let {owner, description, work} = this.state
    return (
        
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
       <h1>&emsp;Work Log</h1>
       <h2 className="header">Date&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
	     Job Description&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
	     Time In/Out&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;
	     Hours Worked
         </h2>
        {
          work.map((val, idx)=> {
            let dateId = `date-${idx}`, jobId = `job-${idx}`, timeId = `time-${idx}`, hoursId = `hours-${idx}`
            return (
              <div key={idx}>
               
                <input
                  type="text"
                  size="15"
                  date={dateId}
                  data-id={idx}
                  id={dateId}
                  value={work[idx].date} 
                  className="date"
                />
                
                <input
                  type="text"
                  size="40"
                  date={jobId}
                  data-id={idx}
                  id={jobId}
                  value={work[idx].job} 
                  className="job"
                />
                 
                <input
                  type="text"
                  size="15"
                  date={timeId}
                  data-id={idx}
                  id={timeId}
                  value={work[idx].time} 
                  className="time"
                />
                
                <input
                  type="text"
                  size="15"
                  date={hoursId}
                  data-id={idx}
                  id={hoursId}
                  value={work[idx].hours} 
                  className="hours"
                />
                <p></p>
              </div>
            )
          })
        }
   
        <input type="button" className="button" value="+" onClick={this.addRow}/>
        <input className="button3" type="submit" value="Submit" /> 
      </form>
    )
  }
}
export default App
