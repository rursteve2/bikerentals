import React, { Component } from 'react';
import './App.css';
import bikeRentals from './bikerentals'
import Items from './components/Items'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      cart: []
    }
  }

  componentDidMount = async () => {
    let data = await bikeRentals
    this.setState({
      data: data.products
    })
    console.log(this.state.data)
  }

  addToCart = (id) => {
    let cart = []
    cart.push(this.state.cart)
    
  }

  render() {
    return (
      <div className="App">
        {this.state.data && this.state.data.map((item, key) => 
          <Items 
            item={item} 
            key={key} 
            cart={this.state.cart}/>)}
        
      </div>
    );
  }
}

export default App;
