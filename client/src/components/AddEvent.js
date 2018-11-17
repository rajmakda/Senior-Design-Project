import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormGroup, FormLabel, FormControl, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal'
import ModalHeader from 'react-bootstrap/lib/ModalHeader'
import ModalTitle from 'react-bootstrap/lib/ModalTitle'
import ModalBody from 'react-bootstrap/lib/ModalBody'
import ModalFooter from 'react-bootstrap/lib/ModalFooter'

class AddEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            when: "",
            where: "",
            title: "",
            description: "",
            imgPath: "",
            owner: ""
        }
        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let event = {
            when: this.state.when,
            where: this.state.where,
            title: this.state.title,
            description: this.state.description,
            owner: this.state.owner,
        }
        let img = this.fileInput.current.files[0];
        let formData = new FormData();
        formData.append("img", img);
        formData.append("event", JSON.stringify(event));
        fetch("/api/event", {
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
            if (res.err) return alert(res.err)
            alert("Successfully added")
            window.location.reload();
        }).catch(err => console.log(err))
    }

    render() {
        return (

            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                <ModalHeader closeButton>
                    <ModalTitle id="contained-modal-title-vcenter">
                        Create a new Event
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <div className="container-fluid">
                        <Form onSubmit={this.handleSubmit}>
                                <FormGroup as={Row} >
                                    <FormLabel column sm={2}>Title</FormLabel>
                                    <Col sm={10}>
                                        <FormControl id="title" type="text" required value={this.state.title} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row}>
                                    <FormLabel column sm={2}>Date</FormLabel>
                                    <Col sm={10}>
                                        <FormControl id="when" type="date" required value={this.state.when} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row}>
                                    <FormLabel column sm={2}>Location</FormLabel>
                                    <Col sm={10}>
                                        <FormControl id="where" type="text" required value={this.state.where} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row}>
                                    <FormLabel column sm={2}>Organizer</FormLabel>
                                    <Col sm={10}>
                                        <FormControl id="owner" type="text" required  value={this.state.owner} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row}>
                                    <FormLabel column sm={2}>Image</FormLabel>
                                    <Col sm={10}>
                                        <FormControl id="img" type="file" accept="image/*" required ref={this.fileInput} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row}>
                                    <FormLabel column sm={2}>Notes</FormLabel>
                                    <Col sm={10}>
                                        <FormControl id="description" rows="3" as="textarea" required value={this.state.description} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                            <Row>
                                <Button variant="outline-success" type="submit">
                                    Submit
                            </Button>
                            </Row>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.props.onHide}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default AddEvent;