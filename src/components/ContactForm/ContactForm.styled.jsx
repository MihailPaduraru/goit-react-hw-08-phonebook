import styled from 'styled-components';

export const FormTitle = styled.h3`
  margin-bottom: 20px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
`;

export const FormInput = styled.input`
  height: 30px;
  margin-bottom: 20px;
  padding: 2px 20px;
  width: 100px;

  border: solid 2px #0080ff;
  border-radius: 8px;
  background-color: inherit;

  outline: none;

  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #0080ff;
  &:hover,
  &:focus {
    border: solid 2px #3c322d;
  }

  @media screen and (min-width: 750px) {
    max-width: 250px;
    width: 100%;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 5px;
  cursor: pointer;
  width: 100px;
  border-radius: 6px;
  color: #ffffff;
   background: linear-gradient(
    180deg,
    rgb(94, 110, 196) 0%, 
    rgba(0, 0, 0, 0.86) 100%);
  );
  
  border: inherit;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;

  &:hover,
  &:focus {
    border: solid 1px #0080ff;
    color: #0080ff;
    background: #ffffff;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }

  @media screen and (min-width: 750px) {
    width: 250px;
    font-size: 20px;
  }
`;
