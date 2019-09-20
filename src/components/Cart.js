import React from 'react';
import { Menu, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



export default function Cart(props) {
    return(
        <div>
            {props.cart[0] ? <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Item</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {props.cart.map((item) => 
                    <Table.Row>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>${item.price.toFixed(2)}</Table.Cell>
                    </Table.Row> 
                    )}
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right'>
                        Total: ${Object.values(props.cart).reduce((a, {price}) => a + price, 0).toFixed(2)}
                    </Menu>
                    {props.cart.find(item => item.product_type == "bike") ? <Link to="/checkout"><Button active>Check Out</Button></Link> : <Button disabled>You need to have a bike in your cart.</Button>}
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table> : "There are no items in your cart"}
        </div>
    )
}
