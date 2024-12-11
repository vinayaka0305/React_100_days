import React from "react";

const Summary = ({ formData }) => {
  console.log(formData);
  return (
    <div>
      <h2>Summary</h2>
      <p>Form Type :{formData.type}</p>
      <p>Age: {formData.age}</p>
      {formData.dcShows ? (
        <p>DC Shows:{formData.dcShows}</p>
      ) : (
        <p>MarvelShows:{formData.marvelShows}</p>
      )}
    </div>
  );
};

export default Summary;
