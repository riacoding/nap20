import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Login = styled.a`
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.theme.highlight};
    cursor: pointer;
  }
`;

class LoggedIn extends Component {
  render() {
    return (
      <Link href="/login">
        <Login>Log in</Login>
      </Link>
    );
  }
}

export default LoggedIn;
