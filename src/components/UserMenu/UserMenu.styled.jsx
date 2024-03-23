import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LogoutBtn = styled.button`
  padding: 10px 7px;
  cursor: pointer;
  width: 100px;
  border-radius: 8px;
  color: #ffffff;
  background: linear-gradient(
    180deg,
    rgb(10, 21, 213) 0%, 
    rgba(0, 0, 0, 0.86) 100%);
  );
  
  border: inherit;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;

  &:hover,
  &:focus {
    border: solid 1px #0080ff;
    color: rgb(10, 21, 213);
    background: #a4140c;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }

  @media screen and (min-width: 750px) {
    font-size: 20px;
  }
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-right: 10px;
  @media screen and (min-width: 750px) {
    font-size: 20px;
  }
`;
