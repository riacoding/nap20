import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = styled.div`
  color: ${props => props.theme.primary};
  padding-left: 20px;
  @media (min-width: 851px) {
    display: none;
  }
`;

class MobileMenu extends Component {
  render() {
    return (
      <Menu>
        <FontAwesomeIcon
          onClick={this.props.handleMenuClick}
          className="mobile_menu"
          size="2x"
          icon={faBars}
        />
      </Menu>
    );
  }
}

export default MobileMenu;
