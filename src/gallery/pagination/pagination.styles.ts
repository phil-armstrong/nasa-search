import styled from 'styled-components';
import { Button } from '../../styles';

export const PaginationWrapper = styled.div`
  margin-bottom: 10px;
`;

export const ButtonText = styled.span`
  margin: 0 10px;
`;

export const PaginationPrevious = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
`;

export const PaginationNext = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
