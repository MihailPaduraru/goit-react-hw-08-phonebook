import styled from 'styled-components';

import BG from '../../img/notebook.webp';

export const Main = styled.main`
  min-height: calc(100vh - 64px);
  padding: 30px;

  @media screen and (min-width: 750px) {
    // display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
