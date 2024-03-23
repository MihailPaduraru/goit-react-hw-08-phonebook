import styled from 'styled-components';

export const Header = styled.header`
  background: inherit;
  display: flex;
  justify-content: space-between;

  align-items: center;
  height: 80px;

  padding: 0px 20px;
  color: #3c322d;
  font-size: 25px;
  font-weight: 700px;
  border-bottom: solid 2px #0080ff;

  @media screen and (max-width: 749.9px) {
    height: 80px;
  }
`;
