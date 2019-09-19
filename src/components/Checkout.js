import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'



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
    render() {
        return(
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
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
