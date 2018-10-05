import React from 'react';

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
            body: formData
        }).catch(err => alert(err))
        .then(res => {
            return res.json();
        }).then(res => {
            if (res.err) return alert(res.err);
            return alert(res.ok);
        })
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button type="Submit" className="btn btn-outline-secondary" id="inputGroupFileAddon04">Upload</button>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ref={this.fileInput} aria-describedby="inputGroupFileAddon04"/>
                            <label htmlFor="file" className="custom-file-label">Choose file to upload GIA data</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Upload;