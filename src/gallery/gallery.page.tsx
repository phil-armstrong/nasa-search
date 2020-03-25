import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useAxios from 'axios-hooks';
import { SearchResults } from './search-results';
import { useQueryParams } from '../utils/useQueryParams';
import { useHistory } from 'react-router-dom';
import * as queryString from 'query-string';
import { PaginationControls } from './pagination.component';
import { GalleryResults } from './gallery-results';

export const GalleryPage: React.FC = () => {
  const queryParams = useQueryParams({ page: 1, media_type: 'image', q: '' });
  const [{ data }] = useAxios<SearchResults>(
    `https://images-api.nasa.gov/search?${queryString.stringify(queryParams)}`
  );

  const history = useHistory();

  const updatedQueryParams = (updatedParams: { [key: string]: any }) =>
    history.push(
      `/search?${queryString.stringify({ ...queryParams, ...updatedParams })}`
    );
  const onSearch = (search: string) => updatedQueryParams({ q: search, page: 1 });
  const updatePageNumber = (page: number) => updatedQueryParams({ page });

  return (
    <>
      <SearchFieldWrapper>
        <Icon icon={faSearch} />
        <SearchField
          type="text"
          defaultValue={queryParams.q}
          onChange={(e) => onSearch(e.target.value)}
        />
      </SearchFieldWrapper>

      {data && (
        <>
          <div>
            <p>
              Number of results:{' '}
              {data.collection.metadata.total_hits.toLocaleString()}
            </p>
            <PaginationControls
              updatePageNumber={updatePageNumber}
              currentPage={Number(queryParams.page)}
              totalResults={data.collection.metadata.total_hits}
            />
          </div>

          <GalleryResults assets={data.collection.items} />
        </>
      )}
    </>
  );
};

export const Icon = styled(FontAwesomeIcon)`
  vertical-align: middle;
`;

export const SearchField = styled.input`
  margin-left: 4px;
  width: 90%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;

export const SearchFieldWrapper = styled.div`
  width: 20em;
  margin: 0 auto;
`;
