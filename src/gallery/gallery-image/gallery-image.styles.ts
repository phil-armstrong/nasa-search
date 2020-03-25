import styled from 'styled-components';

export const GalleryCard = styled.a`
  width: 100%;
  max-width: 500px;
  border: 1px solid black;
  border-radius: 5px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;

  @media (min-width: 1000px) {
    width: 240px;

    :hover {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;

export const GalleryImageWrapper = styled.div`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid black;
  height: 240px;
  background: grey;
`;

export const GalleryImage = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid black;
  max-height: 100%;
`;
