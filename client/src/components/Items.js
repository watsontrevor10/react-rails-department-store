import React from 'react';
// import axios from 'axios';
import { Card, } from 'semantic-ui-react';

class Items extends React.Component {
  // defaultValues = { ...this.props.items }
  state = { items: [], }

  itemsState = () => {
    this.setState({ items: this.props.items })
  }

  renderItems = () => {
    const { items, } = this.state

    if (items.length <= 0)
      return <h2>No Items</h2>
    return items.map( item => (
      <Card>
        <Card.Content>
        <Card.Header>{ item.item_name }</Card.Header>
        <Card.Meta>{ item.quantity }</Card.Meta>
        <Card.Meta>${ item.price }</Card.Meta>
        </Card.Content>
      </Card>
    ))
  }


  render() {
    return (
      <div>
        <Card.Group>
          { this.renderItems() }
        </Card.Group>
      </div>
    )
  }
}

export default Items;