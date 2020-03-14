import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchIcon = styled.div`
 /* space taken on header */
  flex-basis: 20%;
  display: flex;
  align-items: center;
  .icon {
    color: ${props => props.theme.primary};
    margin-left: 10px;
  }

  .icon:hover {
    transition: ${props => props.theme.simpleTransition};
    /* color: ${props => props.theme.offWhite}; */
    color: #4CC2C0;
    cursor: pointer;
  }
  input[type='search'] {
    width: 200px;
    background-color: white;
    font-size: 1.5rem;
    appearance: none;
    border-style: none;
    
  }

  @media (max-width: 900px) {
   input[type='search']{
   display: none;
   }
  }
`;

const Search = () => {
  return (
    <SearchIcon>
      <input type="search" placeholder="Search For An Item" id="search" />
      <FontAwesomeIcon className="icon" size="2x" icon={faSearch} />
    </SearchIcon>
  );
};

export default Search;
