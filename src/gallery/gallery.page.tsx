import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useAxios from 'axios-hooks';
import { SearchResults } from './search-results';
import { useQueryParams } from '../utils/useQueryParams';
import { useHistory } from 'react-router-dom';
import * as queryString from 'query-string';
import { PaginationControls } from './pagination/pagination.component';
import { GalleryResults } from './gallery-results';
import { SearchFieldWrapper, Icon, SearchField, Label } from './gallery.styles';

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
  const onSearch = (search: string) =>
    updatedQueryParams({ q: search, page: 1 });
  const updatePageNumber = (page: number) => updatedQueryParams({ page });

  return (
    <>
      <SearchFieldWrapper>
        <Label htmlFor="search">
          <span>Search</span>
          <Icon icon={faSearch} />
        </Label>
        <SearchField
          id="search"
          type="text"
          defaultValue={queryParams.q}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="search all NASA images"
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
