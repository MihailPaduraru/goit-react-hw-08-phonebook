import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyles = styled(NavLink)`
  padding: 10px 7px;
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;

  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ff0d00;
  }

  &.active {
    color: white;
    background: linear-gradient(
      180deg,
      rgb(94, 110, 196) 0%, 
      rgba(0, 0, 0, 0.86) 100%);
    );
    
  }

  @media screen and (min-width: 750px) {
    font-size: 20px;
  }
`;
