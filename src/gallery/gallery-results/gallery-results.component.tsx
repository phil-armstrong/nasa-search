import React from 'react';
import { GalleryAsset } from '../gallery-image';
import { GalleryContainer } from './gallery-results.styles';
import { Item } from '../search-results';

export const GalleryResults: React.FC<{ assets: Item[] }> = ({ assets }) => {
  return (
    <GalleryContainer>
      {assets.map((asset) => (
        <GalleryAsset key={asset.data[0].nasa_id} asset={asset} />
      ))}
    </GalleryContainer>
  );
};
