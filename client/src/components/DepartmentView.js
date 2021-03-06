import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Segment, Card, Grid, } from 'semantic-ui-react';
import H2Style from './styles/H2Style';
import CardStyle from './styles/CardStyle';
import StyledButton from './styles/ButtonStyle';
import styled from 'styled-components'

class DepartmentView extends React.Component {
  state = { store: {}, items: [], }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ store: res.data, })
      })
    
    axios.get(`/api/departments/${this.props.match.params.id}/items`)
      .then( resp => {
        this.setState({ items: resp.data, })
      })
      .catch( err => {
      })
  }

  deleteStore = () => {
    axios.delete(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ store: res.data, })
      })
      setTimeout(() => this.props.history.push('/departments'), 1000)
  }

  deleteItem = (id) => {
    axios.delete(`/api/departments/${this.props.match.params.id}/items/${id}`)
      .then( res => {
        this.setState({ items: this.state.items.filter(item => item.id !== id), })    
      })
  }
  
  renderItems = () => {

    if (this.state.items.length <= 0)
      return <H2Style>No Items</H2Style>
    return this.state.items.map( item => (
      <CardStyles>
        <Card.Content>
          <Card.Header>{ item.item_name }</Card.Header>
          <Card.Meta>{ item.quantity }</Card.Meta>
          <Card.Meta>${ item.price }</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <StyledButton 
            as={Link} 
            to={`/api/departments/${this.props.match.params.id}/items/${item.id}`}>
              Edit Item
          </StyledButton>
          <StyledButton 
            bColor="delete" 
            onClick={() => this.deleteItem(item.id)}>
              Delete Item
          </StyledButton>
        </Card.Content>
      </CardStyles>
    ))
  }

  render() {
    const { store: {store_name, }, } = this.state 
    return (
      <div>
        <Segment>
          <Header as="h1">{ store_name }</Header>
        </Segment>
        <StyledButton 
          onClick={this.props.history.goBack}>
            Back
        </StyledButton>
        <StyledButton 
          as={Link} 
          to={`/departments/${this.state.store.id}/edit`}>
            Edit
        </StyledButton>
        <StyledButton 
          onClick={this.deleteStore} 
          bColor="delete"
          justifyContent='right'>
            Delete
        </StyledButton>
        <br />
        <br />
        <H2Style>Inventory</H2Style>
        <hr />
        <br />
        <StyledButton 
          bColor="add" 
          as={Link} 
          to={`/api/departments/${this.props.match.params.id}/new`}>
            Add Item
        </StyledButton>
        <br />
        <br />
      <Grid>
        <Grid.Row relaxed>
          <Grid.Column relaxed columns={4}>
            <Card.Group centered>
              { this.renderItems() }
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

const CardStyles = styled(Card)`
  height: 180px !important;
  width: 250px !important; 
  background: #a0ccf9 !important; 
`

export default DepartmentView;