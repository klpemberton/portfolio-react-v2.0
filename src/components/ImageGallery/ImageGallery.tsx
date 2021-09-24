import React from 'react';
import Gallery from 'react-photo-gallery';
import { Photo } from '../../../pages/about';

interface ImageGalleryProps {
  images: Photo[];
  showGallery: boolean;
}

const ImageGallery = React.forwardRef(({ images, showGallery }: ImageGalleryProps, ref) => {
  const getColumns = (containerWidth: number) => {
    console.log(containerWidth);
    if (containerWidth >= 1500) {
      return 4;
    } else if (containerWidth >= 900) {
      return 3;
    } else if (containerWidth >= 500) {
      return 2;
    }

    return 1;
  };

  return (
    <div ref={ref}>
      {showGallery && <Gallery photos={images} direction="column" columns={getColumns} />}
    </div>
  );
});

export default ImageGallery;
