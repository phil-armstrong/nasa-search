import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  PaginationWrapper,
  PaginationPrevious,
  ButtonText,
  PaginationNext,
} from './pagination.styles';

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
        data-testid="previous-button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <ButtonText>Prev</ButtonText>
      </PaginationPrevious>
      <PaginationNext
        disabled={!hasNext}
        onClick={() => updatePageNumber(currentPage + 1)}
        type="button"
        data-testid="next-button"
      >
        <ButtonText>Next</ButtonText>
        <FontAwesomeIcon icon={faArrowRight} />
      </PaginationNext>
    </PaginationWrapper>
  );
};
