import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Mono = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 15px;
  height: 575px;
`;

const CallToAction = styled.div`
  line-height: 1;
  padding: 0;
  margin: 0;
  p {
    text-transform: uppercase;
    color: white;
  }
`;

class Monolith extends Component {
  render() {
    return (
      <Mono>
        <img src="naplogo.png" alt="logo" />
        <img src="141Cover.jpg" alt="issue 141 cover" />
        <CallToAction>
          <Link href="/store">
            <a>
              <p>NEW ISSUE ON SALE NOW</p>
              <p>➔</p>
            </a>
          </Link>
        </CallToAction>
        <CallToAction>
          <Link href="/backissues">
            <a>
              <p>Buy Back issues</p>
              <p>➔</p>
            </a>
          </Link>
        </CallToAction>
      </Mono>
    );
  }
}

export default Monolith;
