import { useState, useEffect } from "react";
import { client } from "../utils/schema.js";
import "../css/GalleryPage.scss";
import Loader from "../components/Loader/Loader.jsx";
const GalleryPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="galleryPage">
      <div className="galleryTitle">
        <h1>
          Image <span className="academy"> Gallery </span>
        </h1>
        <p>Embark on a Journey of Knowledge with Our Academy</p>
      </div>
      <div className="galleryContainer">
        {data &&
          data.map((image, index) => (
            <div className="galleryImage" key={index}>
              <h3 className="imgTitle">{image.title}</h3>
              <img
                src={image.mainImage.asset.url}
                alt={image.mainImage.alt}
                className="image"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryPage;
