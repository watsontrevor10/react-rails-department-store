import React from 'react';
import Departments from './Departments'
import { Header, } from 'semantic-ui-react';
import styled from 'styled-components';

const Home = () => (
  <div>
    <Header as="h1">Great Corp. Department Stores</Header>
    <br />
    <Departments />
  </div>
)

export default Home;