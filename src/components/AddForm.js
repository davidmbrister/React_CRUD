import React, { Component } from 'react'
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props)
      
      this.state = {
        category_id: '',
        title: '',
        description: '',
        price: '',
        quantity: '',
        SKU: ''
        
      };
  }

  _handleTextChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  _add = () => {
    this.props.onAddEntry(this.state);
    this._clear();
  };

  _clear = () => {
    this.setState({
      category_id: '',
      title: '',
      description: '',
      price: '',
      quantity: '',
      SKU: ''
    });
  };

  render() {
    return (
    <div style={{marginTop: 16}}>
    <Button title="Add Entry" onClick={this._add} />
    <br />

<input type="text"
    placeholder = "Category ID"
    value={this.state.category_id}
    onChange={event =>
    this._handleTextChange('category_id', event.target.value)}
    />

<input type="text"
    placeholder = "Title"
    value={this.state.title}
    onChange={event =>
    this._handleTextChange('title', event.target.value)}
    />

<input type="text"
    placeholder = "Description"
    value={this.state.description}
    onChange={event =>
    this._handleTextChange('description', event.target.value)}
    />


<input type="text"
    placeholder = "Price"
    value={this.state.price}
    onChange={event =>
    this._handleTextChange('price', event.target.value)}
    />
<input type="text"
    placeholder = "Quantity"
    value={this.state.quantity}
    onChange={event =>
    this._handleTextChange('quantity', event.target.value)}
    />
<input type="text"
    placeholder = "SKU"
    value={this.state.SKU}
    onChange={event =>
    this._handleTextChange('SKU', event.target.value)}
    />

    </div>
    );
  }
}

export default Form;