import React from 'react';

const ServiceCard = ({ title, description, img1, img2 }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="service-images">
        <img src={img1} class="padded-image1" alt={`${title} 1`} />
        <img src={img2} class="padded-image2"alt={`${title} 2`} />
      </div>
    </div>
  );
}

export default ServiceCard;
