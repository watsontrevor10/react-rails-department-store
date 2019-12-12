import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Form, Header, } from 'semantic-ui-react';

class DeptEdit extends React.Component {
  state = { store_name: '', }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ store_name: res.data.store_name, })
      })
    }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`/api/departments/${this.props.match.params.id}`, {...this.state} )
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.id}`)
      })
      .catch( err => {
        debugger
      })
    
  }

  render() {
    const { store_name, } = this.state
    return (
      <div>
        <Header as="h1">Edit Inventory Item</Header>
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
            <Form.Group>
              <Form.Button color="green inverted">Submit</Form.Button>
              <Form.Button color="blue inverted" onClick={() => this.props.history.goBack()}>Cancel</Form.Button>
            </Form.Group>
        </Form>
      </div>
    )
  }
}

export default DeptEdit;
