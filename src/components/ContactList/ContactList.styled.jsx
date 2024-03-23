import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  text-align: start;
  margin: 0 auto;
`;

export const ContactListItemsStyled = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;

  /* @media screen and (max-width: 750px) {
    max-width: 100px;
  } */

  @media screen and (min-width: 750px) {
    font-size: 15px;
  }
`;

export const DeleteBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
  height: 20px;
  padding: 0px 6px;
  cursor: pointer;

  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(
    180deg,
    rgb(94, 110, 196) 0%, 
    rgba(0, 0, 0, 0.86) 100%);
  );
  
  border: inherit;

  font-family: 'Roboto';
  font-size: 14px;

  &:hover,
  &:focus {
    border: solid 1px #0080ff;
    color: #0080ff;
    background: #ffffff;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }
`;
