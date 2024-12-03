// Import React and useState hook to manage component state
import React, { useState } from "react";
// Import CSS for styling the slideshow
import './slide.css';

// Define the SlidShow component
const SlidShow = () => {
  // Array of image URLs for the slideshow
  const images = [
    "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ce0358ee7bb244899f5caa36c93c028f.png",
    "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e65a75f93fa64ca196feaeb675f15ee6.png",
    "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b9115bf0d19347e0bc82017cc2bf10c3.png",
    "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/932be30e425b4632b812174cb7d8312c.png",
  ];

  // State variable to track the current index of the displayed image
  const [index, setIndex] = useState(0);

  // Handler function to move to the next image
  const nextImageHandle = () => {
    // Check if the current index is the last image
    if (index >= images.length - 1) {
      setIndex(0); // Loop back to the first image
    } else {
      setIndex(index + 1); // Move to the next image
    }
  };

  // Handler function to move to the previous image
  const prevImageHandler = () => {
    // Check if the current index is the first image
    if (index <= 0) {
      setIndex(images.length - 1); // Loop back to the last image
    } else {
      setIndex(index - 1); // Move to the previous image
    }
  };

  // Return the JSX for the slideshow component
  return (
    <div className="container">
      {/* Title of the slideshow */}
      <h1 className="title">SlideShow</h1>
      
      {/* Slideshow container */}
      <div className="slideshow">
        {/* Button to move to the previous image */}
        <button className="prev-btn" onClick={prevImageHandler}>prev</button>
        
        {/* Display the current image based on the index */}
        <img
          src={images[index]} // Dynamically set the image source
          className="image" // CSS class for styling the image
          alt="Slideshow" // Alt text for the image
        />
        
        {/* Button to move to the next image */}
        <button className="next-btn" onClick={nextImageHandle}>next</button>
      </div>
    </div>
  );
};

// Export the SlidShow component for use in other parts of the application
export default SlidShow;
