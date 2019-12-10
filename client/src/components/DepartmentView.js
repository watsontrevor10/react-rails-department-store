import React from 'react';
import axios from 'axios';
import { Button, Header, Segment, } from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state = { store: {}, }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ store: res.data, })
      })
  }

  deleteStore = () => {
    axios.delete(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ store: res.data, })
      })
      this.props.history.goBack()
  }

  render() {
    const { store_name, } = this.state.store 
    return (
      <div>
        <Segment>
          <Header as="h1">{ store_name }</Header>
        </Segment>
        <Button onClick={this.props.history.goBack}>Back</Button>
        <Button onClick={this.deleteStore}>Delete</Button>
      </div>
    )
  }
}

export default DepartmentView;