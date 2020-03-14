import styled from 'styled-components';

const NavULStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  font-size: 2rem;
  a,
  button {
    padding: 0 10px;

    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 1.8rem;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.primary};
    font-weight: 700;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }

    &:hover {
      outline: none;
      color: ${props => props.theme.offWhite};
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavULStyles;
