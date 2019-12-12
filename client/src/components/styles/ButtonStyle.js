import React from 'react';
import styled from 'styled-components';

const buttonColor = (bColor) => {
  switch(bColor) {
    case 'add':
      return '#21ba45';
    case 'delete':
      return '#db2828';
    default:
      return '#2185d0';
  }
}

const StyledButton = styled.button` 
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${props => buttonColor(props.bColor)} !important; none;
  color: rgba(0,0,0,.6);
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0 .25em 0 0;
  padding: .78571429em 1.5em .78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: .28571429rem;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
`

export default StyledButton;