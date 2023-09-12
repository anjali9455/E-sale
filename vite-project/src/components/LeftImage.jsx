import React from 'react';

const LeftImage = () => {
  return (
    <div className="d-flex justify-content-start align-items-center" style={{ marginTop: '20px' }}>
      {/* Add Bootstrap classes to the img tag */}
      <img
        src="/images/left-image.png" // Adjust the path to your image
        alt="Left Image"
        className="img img-fluid" // Use Bootstrap classes
      />
    </div>
  );
};

export default LeftImage;
