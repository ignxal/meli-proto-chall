import "./Gallery.css";
import { useState } from "react";
import type { Pictures } from "../../../types/product";

interface GalleryProps {
  pictures: Pictures[];
}

const Gallery = ({ pictures }: GalleryProps) => {
  const [pictureState, setPictureState] = useState(() =>
    pictures.length > 0
      ? pictures.map((picture) => ({
          ...picture,
          selected: false,
        }))
      : []
  );

  const [selectedPicture, setSelectedPicture] = useState(() =>
    pictures.length > 0 ? { ...pictures[0], selected: true } : null
  );

  const handleSelectThumbnail = (thumbnailId: string) => {
    setPictureState((prevPictures) =>
      prevPictures.map((picture) => {
        const isSelected = picture.id === thumbnailId;
        if (isSelected) {
          setSelectedPicture({ ...picture, selected: true });
        }
        return { ...picture, selected: isSelected };
      })
    );
  };

  const thumbnailElements = pictureState.map((picture) => (
    <img
      src={picture.url}
      alt="Imagen miniatura del producto"
      key={picture.id}
      className={picture.selected ? "selected-thumbnail" : undefined}
      onClick={() => handleSelectThumbnail(picture.id)}
    />
  ));

  return (
    <section>
      <div className="gallery-container">
        <div className="thumbnail-container">{thumbnailElements}</div>

        <div className="main-img">
          {selectedPicture ? (
            <img
              src={selectedPicture.url}
              alt="Imagen del producto"
              style={{ maxWidth: "350px" }}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
