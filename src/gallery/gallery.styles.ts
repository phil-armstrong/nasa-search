import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = styled(FontAwesomeIcon)`
  vertical-align: middle;
`;

export const SearchField = styled.input`
  margin-left: 4px;
  width: 90%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;

  :hover:enabled {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const SearchFieldWrapper = styled.div`
  width: 20em;
  margin: 0 auto;
`;
