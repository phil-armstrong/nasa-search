import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = styled(FontAwesomeIcon)`
  vertical-align: middle;
`;

export const SearchField = styled.input`
  margin-left: 4px;
  width: 20em;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;

  :hover:enabled {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const SearchFieldWrapper = styled.div`
  width: 30em;
  margin: 0 auto;
`;

export const Label = styled.label`
  width: 10em;

  span {
    margin-right: 5px;
  }
`;
