import React from 'react';

import NavULStyles from './styles/NavStyles';
import styled from 'styled-components';

const FooterListItem = styled.li`
  list-style: none;

  .selected {
    color: ${props => props.theme.offWhite};
    /* border-top: 4px solid ${props => props.theme.primary}; */ 
  }

  a.selected::before {
      background: ${props => props.theme.primary};
     height: 5px;
      content: '';
      width: 90%;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      top: 0;
      position: absolute;
     } 

     a.selected:hover {
       &:before{
        width: 80%;
       }
     
     }
    
`;

const FooterNav = () => {
  return (
    <nav>
      <NavULStyles>
        <FooterListItem>
          <a href="#pane-1">Current Competiton</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#pane-2" className="selected">
            Current Issue
          </a>
        </FooterListItem>
        <FooterListItem>
          <a href="#pane-3">Blog</a>
        </FooterListItem>
      </NavULStyles>
    </nav>
  );
};

export default FooterNav;
