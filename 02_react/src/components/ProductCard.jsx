import React, { useState } from 'react';
import Loader from './Loader'; // Import the loader component

const ProductCard = ({ thumbnail, title }) => {
  // State to track if the image is loaded
  const [isLoading, setIsLoading] = useState(true);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading state to false once the image is loaded
  };

  // Handle image error event (optional, if you want to handle broken images)
  const handleImageError = () => {
    setIsLoading(false); // Hide loader if image fails to load
    // You can set a fallback image here if you want
  };

  return (
    <div className="product-card">
      {/* Conditionally render loader or image based on the isLoading state */}
      {isLoading && <Loader />} {/* Show loader while image is loading */}
      
      <img
        className="product-img"
        src={thumbnail}
        alt={title}
        onLoad={handleImageLoad} // Trigger the handleImageLoad function when image loads
        onError={handleImageError} // Trigger the handleImageError function if there's an error loading the image
        style={{ display: isLoading ? 'none' : 'block' }} // Hide the image while loading
      />
      
      <span className='title'>{title}</span>
    </div>
  );
};

export default ProductCard;
