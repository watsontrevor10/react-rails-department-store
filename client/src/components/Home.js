import React from 'react';
import Departments from './Departments'
// import { Header, } from 'semantic-ui-react';
import TitleStyle from './styles/TitleStyle';
// import styled from 'styled-components';

const Home = () => (
  <div>
    <TitleStyle>Great Corp. Department Stores</TitleStyle>
    <hr />
    <Departments />
  </div>
)

export default Home;