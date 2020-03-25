import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;

  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

export const Title = styled.h1``;

export const AssetPhotographer = styled.span`
  font-style: italic;
`;

export const AssetTitle = styled.h2`
  font-size: 2em;
  margin: 5px;
  margin-bottom: 0;

  @media (min-width: 1000px) {
    font-size: 1.25em;
  }
`;
