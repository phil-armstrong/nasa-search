import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface PaginationProps {
  updatePageNumber: (page: number) => void;
  currentPage: number;
  totalResults: number;
}

export const PaginationControls: React.FC<PaginationProps> = ({
  updatePageNumber,
  currentPage,
  totalResults,
}) => {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalResults / 100;

  return (
    <PaginationWrapper>
      <PaginationPrevious
        disabled={!hasPrevious}
        onClick={() => updatePageNumber(currentPage - 1)}
        type="button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <ButtonText>Prev</ButtonText>
      </PaginationPrevious>
      <PaginationNext
        disabled={!hasNext}
        onClick={() => updatePageNumber(currentPage + 1)}
        type="button"
      >
        <ButtonText>Next</ButtonText>
        <FontAwesomeIcon icon={faArrowRight} />
      </PaginationNext>
    </PaginationWrapper>
  );
};

export const PaginationWrapper = styled.div`
  margin-bottom: 10px;
`;

export const ButtonText = styled.span`
  margin: 0 10px;
`;

export const PaginationButton = styled.button`
  border: 1px solid black;
  background: transparent;
  width: 10em;

  :hover {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const PaginationPrevious = styled(PaginationButton)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 0;
`;

export const PaginationNext = styled(PaginationButton)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
