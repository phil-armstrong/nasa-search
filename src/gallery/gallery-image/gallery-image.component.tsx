import React from 'react';
import {
  GalleryCard,
  GalleryImageWrapper,
  GalleryImage,
} from './gallery-image.styles';
import { Item } from '../search-results';
import { AssetTitle, AssetPhotographer } from '../../styles';

export const GalleryAsset: React.FC<{ asset: Item }> = ({ asset }) => {
  const previewImage = asset.links.filter((link) => link.rel === 'preview')[0];
  const data = asset.data[0];

  return (
    <>
      <GalleryCard href={encodeURI(`asset/${data.nasa_id}`)}>
        <GalleryImageWrapper>
          <GalleryImage src={previewImage.href} alt={data.title} />
        </GalleryImageWrapper>
        <AssetTitle>{data.title}</AssetTitle>
        {data.photographer && (
          <AssetPhotographer>by {data.photographer}</AssetPhotographer>
        )}
      </GalleryCard>
    </>
  );
};
