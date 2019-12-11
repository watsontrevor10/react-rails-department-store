import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Button, Header, Segment, Card, } from 'semantic-ui-react';

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
      this.props.history.goBack()
  }

  deleteItem = (id) => {
    axios.delete(`/api/departments/${this.props.match.params.id}/items/${id}`)
      .then( res => {
        this.setState({ items: this.state.items.filter(item => item.id !== id), })
      })
    
  }
  
  renderItems = () => {

    if (this.state.items.length <= 0)
      return <h2>No Items</h2>
    return this.state.items.map( item => (
      <Card>
        <Card.Content>
        <Card.Header>{ item.item_name }</Card.Header>
        <Card.Meta>{ item.quantity }</Card.Meta>
        <Card.Meta>${ item.price }</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button color="red inverted" onClick={() => this.deleteItem(item.id)}>Delete Item</Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    const { store: {store_name, }, } = this.state 
    return (
      <div>
        <Segment>
          <Header as="h1">{ store_name }</Header>
        </Segment>
        <Button onClick={this.props.history.goBack} color="blue inverted">Back</Button>
        <Button onClick={this.deleteStore} color="red inverted">Delete</Button>
        <br />
        <br />
        <hr />
        <Header as="h2">Inventory</Header>
        <br />
        <Button as={Link} to={`/api/departments/${this.props.match.params.id}/new`}>Add Item</Button>
        <br />
        <br />

        <Card.Group>
          { this.renderItems() }
        </Card.Group>
      </div>
    )
  }
}

export default DepartmentView;