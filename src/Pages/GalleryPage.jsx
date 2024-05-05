import { useState, useEffect } from "react";
import { client } from '../utils/schema.js';
import "../css/GalleryPage.scss"
const GalleryPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesData = await client.fetch(`*[_type == "gallery"] {
          title,
          mainImage {
            asset-> {
              _id,
              url
            },
            alt
          }
        }`);
        setData(imagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="galleryPage">
      <h1 className="galleryTitle">Images from our <span className="academy">Academy</span> </h1>
      <div className="galleryContainer">
        {data && data.map((image, index) => (
          <div className="galleryImage" key={index}>
            <h3 className="imgTitle">{image.title}</h3>
            <img src={image.mainImage.asset.url} alt={image.mainImage.alt} className="image" />
          </div>
        ))}
      </div>
    </div >
  );
};

export default GalleryPage;