import React, { Component } from 'react';
import { Button, Form, Table, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



export default class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            street: "",
            zip: "",
            city: "",
            state: "",
            creditcard: ""
        }
    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    onSubmitConfirm = () => {
        alert("Success!")
    }

    displayModal = () => {
        let modal = document.querySelector(".modalcheckout")
        modal.style.display = "block"
    }

    render() {
        return(this.props.cart[0] ?
            <div>
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input label='Name' placeholder='Name' name="name" value={this.state.name} onChange={this.onChange}/>
                        <Form.Input label='Street' placeholder='Street' name="street" value={this.state.street} onChange={this.onChange}/>
                        <Form.Input label='City' placeholder='City' name="city" value={this.state.city} onChange={this.onChange}/>
                        <Form.Input label='State' placeholder='State' name="state" value={this.state.state} onChange={this.onChange}/>
                        <Form.Input label='Zip Code' placeholder='Zip Code'name="zip" value={this.state.zip} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Field>
                        <label>Credit Card Number</label>
                        <input placeholder='Credit Card' name="creditcard" value={this.state.creditcard} onChange={this.onChange}/>
                    </Form.Field>
                </Form>
                <div>
                <Modal trigger={<Button>Submit</Button>}>
                    <Modal.Header>TOTAL: ${Object.values(this.props.cart).reduce((a, {price}) => a + price, 0).toFixed(2)}</Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                        <p>SHIP TO: {this.state.name}, {this.state.street}, {this.state.city} {this.state.state}, {this.state.zip}</p>
                        <Table celled>
                            <Table.Body>
                            {this.props.cart.map((item) => 
                                <Table.Row>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>${item.price.toFixed(2)}</Table.Cell>
                                </Table.Row> 
                                )}
                            </Table.Body>
                        </Table>
                    </Modal.Description>
                    </Modal.Content>
                    <Link to="/"><Button>Submit</Button></Link>
                </Modal>
                </div>
            </div> : "You need items in your cart before you can checkout"
        )
    }
}
