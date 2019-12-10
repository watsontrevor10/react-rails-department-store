import React from 'react';
import axios from 'axios';
// import { Link, } from 'react-router-dom';
import { Header, Form, } from 'semantic-ui-react';

class StoreForm extends React.Component {
  defaultValues = { store_name: '', }
  state = { ...this.defaultValues, }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const store = { ...this.state, }

    axios.post('/api/departments', {...this.state})
      .then( res => {
        this.props.history.push('/departments')
      })
      .catch( err => {
        console.log(err)
      })

    this.setState({ ...this.defaultValues })
  }

  render() {
    const { store_name, } = this.state 

    return (
      <div>
        <Header as="h1">New Store</Header>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input 
              label="Store Name"
              placeholder="Store Name"
              name="store_name"
              value={store_name}
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

export default StoreForm;