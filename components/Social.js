import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = styled.div`
  display: flex;
  align-items: flex-start;

  .social-icon {
    color: ${props => props.theme.primary};
    margin-left: 10px;
    transition: ${props => props.theme.simpleTransition};
  }
  .social-icon:hover {
    color: ${props => props.theme.offWhite};
    /* color: #4CC2C0; */
    cursor: pointer;
  }

  .instagram {
    /* adjust for icon size difference */
  }
`;

const Social = () => {
  return (
    <SocialIcons>
      <FontAwesomeIcon
        className="social-icon facebook"
        size="2x"
        icon={faFacebookSquare}
      />

      <FontAwesomeIcon
        className="social-icon twitter"
        size="2x"
        icon={faTwitterSquare}
      />

      <FontAwesomeIcon
        className="social-icon instagram"
        size="2x"
        icon={faInstagram}
      />
    </SocialIcons>
  );
};

export default Social;
