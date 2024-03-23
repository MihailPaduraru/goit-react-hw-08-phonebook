import styled from 'styled-components';

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
  border-radius: 8px;
  color: #ffffff;
  background: linear-gradient(
    180deg,
    rgb(88, 93, 154) 0%, rgba(0, 0, 0, 0.86) 100%) ;
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

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2`
  max-width: 500px;
  margin: auto 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding-top: 50px;
  text-align: center;
`;
