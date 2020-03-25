import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from 'react-router-dom';
import { SearchResults } from '../gallery/search-results';
import styled from 'styled-components';
import { AssetTitle, AssetPhotographer } from '../styles';

export const AssetPage = () => {
    const { id } = useParams<{ id: string }>();
    const [assetImages] = useAxios(`https://images-api.nasa.gov/asset/${id}`);
    const [assetData] = useAxios<SearchResults>(`https://images-api.nasa.gov/search?nasa_id=${id}`);

    const data = assetData.data ? assetData.data.collection.items[0].data[0] : undefined;
    const imageUrl = assetImages.data ? assetImages.data.collection.items[0].href : undefined;

    return <div>
        {assetImages.data && data &&
            <>
                <AssetTitle>{data.title}</AssetTitle>
                {data.photographer && <AssetPhotographer>by {data.photographer}</AssetPhotographer>}
                <hr />
                {data.keywords &&
                    <KeywordContainer>
                        {data.keywords.map(keyword => <Keyword key={keyword}>{keyword}</Keyword>)}
                    </KeywordContainer>
                }
                <hr />
                <div>{data.description}</div>
                <a href={imageUrl} target="blank">
                    <AssetImage src={imageUrl} />
                </a>
            </>
        }
    </div>;
};

export const AssetImage = styled.img`
width: 100%;
`;

export const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const Keyword = styled.span`
  border: 1 px solid green;
  background: green;
  color: white;
  border-radius: 4px;
  padding: 5px 10px;
  height: 1em;
  margin-right: 10px;
  margin-bottom: 5px;
`;