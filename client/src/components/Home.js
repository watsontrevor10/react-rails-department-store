import React from 'react';
import Departments from './Departments'
import { Header, } from 'semantic-ui-react';

const Home = () => (
  <div>
    <Header as="h1">Departments Home</Header>
    <Departments />
  </div>
)

export default Home;