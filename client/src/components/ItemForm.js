import React from 'react';
import axios from 'axios';
import { Form, Header, } from 'semantic-ui-react';

class ItemForm extends React.Component {
  defaultValues = [{ item_name: '', quantity: '', price: '', }]
  state = { ...this.defaultValues }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`/api/departments/${this.props.match.params.department_id}/items`)
    .then( resp => {
      this.props.history.push(`/departments/${this.props.match.params.department_id}`)
    })
    .catch( err => {
    })

    this.setState({ ...this.defaultValues })
  }

  render() {
    return (
      <div>
        <Header as="h1">New Inventory Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
              <Form.Input 
                label="item Name"
                placeholder="item Name"
                name="item_name"
                value={this.state.item_name}
                onChange={this.handleChange}
                required
                />
              <Form.Input 
                label="Quantity"
                placeholder="Quantity"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
                required
                />
              <Form.Input 
                label="Price"
                placeholder="Price"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                required
                />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm;