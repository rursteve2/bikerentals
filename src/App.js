import React, { Component } from 'react';
import './App.css';
import bikeRentals from './bikerentals'
import Items from './components/Items'
import { Link, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

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
  }

  addToCart = async (id) => {
    let cart = []
    let item = await this.state.data.find(item => item.id === id)
    cart = [...this.state.cart, item]
    this.setState({cart})
    alert("Added " + item.name + " to cart")
  }

  render() {
    return (
      <div className="App">
        <Link to="/"><h1>Bike Rentals</h1></Link>
        <h4><Link to="/cart">View Cart</Link>: {this.state.cart[0] && "$"}{Object.values(this.state.cart).reduce((a, {price}) => a + price, 0).toFixed(2)}</h4>
        <Switch>
          <Route exact path="/" render={() => this.state.data && this.state.data.map((item, key) => 
            <Items 
              item={item} 
              key={key} 
              cart={this.state.cart}
              addToCart={this.addToCart}
              />)}
          />
          <Route path="/cart" render={() => 
            <Cart 
            cart={this.state.cart}
            />} />
          <Route path="/checkout" render={() => 
          <Checkout 
            cart={this.state.cart.map((item) => item)}
          />} />
        </Switch>
      </div>
    );
  }
}

export default App;
