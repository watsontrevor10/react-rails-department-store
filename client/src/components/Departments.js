import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Card, Header, Button, } from 'semantic-ui-react';
// import styled from 'styled-components';
import HeaderStyle from './styles/HeaderStyle';
import CardStyle from './styles/CardStyle';
import StyledButton from './styles/ButtonStyle';

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
      <Card as={CardStyle}>
        <Card.Content>
          <Card.Header>{ store.store_name } </Card.Header>
          <StyledButton as={Link} to={`/departments/${store.id}`}>Inventory</StyledButton>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as={HeaderStyle}>Stores</Header>
        <StyledButton bColor='add' as={Link} to="/departments/new">Add Store</StyledButton>
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