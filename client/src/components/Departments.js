import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Card, Header, Button, } from 'semantic-ui-react';

class Departments extends React.Component { 
  state = { stores: [], }

  componentDidMount() {
    axios.get('/api/departments')
      .then( res => {
        this.setState({ stores: res.data, })
      })
  }

  renderStores = () => {
    const { stores, } = this.state 

    if (stores.length <= 0)
      return <h2>No Stores</h2>
    return stores.map( store => (
      <Card>
        <Card.Content>
          <Card.Header>{ store.store_name } </Card.Header>
          <Button as={Link} to={`/departments/${store.id}`} color="blue inverted">Inventory</Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h2">Stores</Header>
        <br />
        <Button as={Link} to="/departments/new" color="blue inverted">Add Store</Button>
        <br />
        <br />
        <Card.Group>
          { this.renderStores() }
        </Card.Group>
      </div>
    )
  }

}

export default Departments;