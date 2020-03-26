import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { PaginationControls } from './pagination.component';
import '@testing-library/jest-dom/extend-expect';

describe('Pagination Controls', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const mockCallback = jest.fn(() => {});

  afterEach(cleanup);

  describe('on page 1 of 2', () => {
    beforeEach(() => {
      render(
        <PaginationControls
          currentPage={1}
          totalResults={200}
          updatePageNumber={mockCallback}
        />
      );
    });

    describe('previous button', () => {
      it('previous button should be displayed', () => {
        expect(screen.queryByTestId('previous-button')).not.toBeNull();
      });

      it('previous button should be disabled', () => {
        expect(screen.queryByTestId('previous-button')).toBeDisabled();
      });
    });

    describe('next button', () => {
      it('next button should be displayed', () => {
        expect(screen.queryByTestId('next-button')).not.toBeNull();
      });

      it('next button should not be disabled', () => {
        expect(screen.queryByTestId('next-button')).not.toBeDisabled();
      });

      it('should fire callback when clicked', () => {
        fireEvent.click(screen.queryByTestId('next-button')!);
        expect(mockCallback).toHaveBeenCalledWith(2);
      });
    });
  });

  describe('on page 2 of 2', () => {
    beforeEach(() => {
      render(
        <PaginationControls
          currentPage={2}
          totalResults={200}
          updatePageNumber={mockCallback}
        />
      );
    });

    describe('previous button', () => {
      it('previous button should be displayed', () => {
        expect(screen.queryByTestId('previous-button')).not.toBeNull();
      });

      it('previous button should not be disabled', () => {
        expect(screen.queryByTestId('previous-button')).not.toBeDisabled();
      });

      it('should fire callback when clicked', () => {
        fireEvent.click(screen.queryByTestId('previous-button')!);
        expect(mockCallback).toHaveBeenCalledWith(1);
      });
    });

    describe('next button', () => {
      it('next button should be displayed', () => {
        expect(screen.queryByTestId('next-button')).not.toBeNull();
      });

      it('next button should be disabled', () => {
        expect(screen.queryByTestId('next-button')).toBeDisabled();
      });
    });
  });
});
