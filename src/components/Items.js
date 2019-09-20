import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react'


export default function Items(props) {
    return(
        <div>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={5}>
                    <Image src={props.item.image} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                    <h2>{props.item.name}</h2>
                    <h3>Price: ${props.item.price.toFixed(2)}</h3>
                    <Button onClick={() => props.addToCart(props.item.id)}>Add to Cart</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
