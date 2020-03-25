import React from 'react';
import useAxios from 'axios-hooks';
import { useParams, useHistory } from 'react-router-dom';
import { SearchResults } from '../gallery/search-results';
import { AssetTitle, AssetPhotographer, Button } from '../styles';
import { KeywordContainer, Keyword, AssetImage } from './asset.styles';

export const AssetPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [assetImages] = useAxios(`https://images-api.nasa.gov/asset/${id}`);
  const [assetData] = useAxios<SearchResults>(
    `https://images-api.nasa.gov/search?nasa_id=${id}`
  );

  const data = assetData.data
    ? assetData.data.collection.items[0].data[0]
    : undefined;
  const imageUrl = assetImages.data
    ? assetImages.data.collection.items[0].href
    : undefined;

  return (
    <div>
      {assetImages.data && data && (
        <>
          <Button onClick={history.goBack}>Back to Search</Button>
          <AssetTitle>{data.title}</AssetTitle>
          {data.photographer && (
            <AssetPhotographer>by {data.photographer}</AssetPhotographer>
          )}
          <hr />
          {data.keywords && (
            <KeywordContainer>
              {data.keywords.map((keyword) => (
                <Keyword key={keyword} href={`/search?q=${keyword}`}>
                  {keyword}
                </Keyword>
              ))}
            </KeywordContainer>
          )}
          <hr />
          <div>{data.description}</div>
          <a href={imageUrl} target="blank">
            <AssetImage src={imageUrl} alt={data.title} />
          </a>
        </>
      )}
    </div>
  );
};
