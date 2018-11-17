import React from 'react';
import NavBar from '../components/Nav_Bar';

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            fileName: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.fileInput.current.files[0]);
        fetch("/api/upload/gia", {
            method: "POST",
            body: formData,
            headers: {
                "x-access-token": `${localStorage.getItem('token')}`
            }
        }).catch(err => alert(err))
        .then(res => {
            return res.json();
        }).catch(err => console.log(err))
        .then(res => {
            if (res.ok) return alert(res.ok);
            if (res.err) return alert(res.err);
            if (res.message) return alert(res.message);
            alert(res);
        }).catch(err => console.log(err))
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        var filename = value.split('\\').pop().split('/').pop();
        this.setState({
        fileName: filename
        });
  }

    render() {
        return(
            <div>
                <NavBar />
                <div className='jumbotron' style={{ marginTop: '4%' }}>
                    <h1 className='display-4'>Upload Data for GIA Applications</h1>
                </div>
                <div className="container-fluid">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button type="Submit" className="btn btn-outline-secondary" id="inputGroupFileAddon04">Upload</button>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={this.handleInputChange} ref={this.fileInput} aria-describedby="inputGroupFileAddon04" />
                                <label htmlFor="file" className="custom-file-label">{this.state.fileName ? this.state.fileName : "Choose a file"}</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Upload;