import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Navbar = () => (
  <Menu inverted pointing primary>
    <Menu.Item as={Link} to='/'>
      Home
    </Menu.Item>
  </Menu>
)

export default Navbar;