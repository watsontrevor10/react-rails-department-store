import React from 'react';
import axios from 'axios';
import { Form, Header, } from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = { item_name: '', quantity: '', price: '' }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ item_name: res.data.item_name, quantity: res.data.quantity, price: res.data.price })
      })
    }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`/api/departments/${this.props.match.params.department_id}/items`, {...this.state} )
    .then( resp => {
      this.props.history.push(`/departments/${this.props.match.params.department_id}`)
    })
    .catch( err => {
    })
    this.props.history.goBack()
  }

  render() {
    const { item_name, quantity, price } = this.state
    return (
      <div>
        <Header as="h1">Edit Inventory Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
              <Form.Input 
                label="Item Name"
                placeholder="Item Name"
                name="item_name"
                value={item_name}
                onChange={this.handleChange}
                required
                />
              <Form.Input 
                label="Quantity"
                placeholder="Quantity"
                name="quantity"
                value={quantity}
                onChange={this.handleChange}
                required
                />
              <Form.Input 
                label="Price"
                placeholder="Price"
                name="price"
                value={price}
                onChange={this.handleChange}
                required
                />
            </Form.Group>
            <Form.Group>
              <Form.Button color="green inverted">Submit</Form.Button>
              <Form.Button color="blue inverted" onClick={this.props.history.goBack}>Cancel</Form.Button>
            </Form.Group>

        </Form>
      </div>
    )
  }
}

export default ItemForm;