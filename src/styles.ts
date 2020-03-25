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

export const Button = styled.button`
  border: 1px solid black;
  background: transparent;
  width: 10em;
  border-radius: 5px;

  :disabled {
    cursor: no-drop;
  }

  :hover:enabled {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
