import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class UpdateForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.updateTheApi}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Drink Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.item.name} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="img">
                    <Form.Label>Image source</Form.Label>
                    <Form.Control type="text" placeholder={this.props.item.img} />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        )
    }
}

export default UpdateForm
