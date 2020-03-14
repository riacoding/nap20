import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import FooterNav from './FooterNav';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${props => (props.open ? '220px' : '30px')};
  transition: height;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  background-color: white;
  width: 100%;
`;

const LinkBar = styled.div`
  height: 30px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-content: center;
  box-shadow: 0 4px 4px #000;

  .buttonBar {
    display: flex;
    width: 25%;
  }

  button {
    background-color: ${props => props.theme.lightgrey};
    border: none;
    justify-content: flex-start;
    color: ${props => props.theme.offWhite};
    width: 30px;

    &:focus {
      outline: thin;
    }
  }
`;

const Copyright = styled.div`
  color: #8a8a8a;
  font-size: 0.8em;
  font-weight: 100;
  flex-basis: 15%;
  padding: 5px;
  line-height: 1;
  span {
    display: block;
  }
`;

const handleNavClick = () => {
  console.log('close clicked');
  console.log(FooterContainer);
};

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <FooterContainer open={open}>
      <LinkBar>
        <Copyright>
          &copy; {new Date().getFullYear()} <span> New American Paintings</span>
        </Copyright>
        <FooterNav />
        <div className="buttonBar">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <span>
                <FontAwesomeIcon
                  className="icon"
                  size="2x"
                  icon={faChevronDown}
                />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon
                  className="icon"
                  size="2x"
                  icon={faChevronUp}
                />
              </span>
            )}
          </button>
        </div>
      </LinkBar>
      Footer
    </FooterContainer>
  );
};

export default Footer;
