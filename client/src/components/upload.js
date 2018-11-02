import React from 'react';
import NavBar from '../components/Nav_Bar';

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
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

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button type="Submit" className="btn btn-outline-secondary" id="inputGroupFileAddon04">Upload</button>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ref={this.fileInput} aria-describedby="inputGroupFileAddon04" />
                                <label htmlFor="file" className="custom-file-label">Choose file to upload GIA data</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Upload;