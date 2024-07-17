import React from 'react';
import ServiceCard from '../components/ServiceCard';
import ss1 from '../assets/images/ss1.png';
import ss2 from '../assets/images/ss2.png';
import ss3 from '../assets/images/ss3.png';
import ss4 from '../assets/images/ss4.png';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to CV Roofing</h1>
      <p>We provide the best roofing services.</p>
      <div className="services">
        <ServiceCard 
          title="Roof Repair" 
          description="We fix all types of roof damages." 
          img1={ss1} 
          img2={ss2} 
        />
        <ServiceCard 
          title="New Roof Installation" 
          description="We install new roofs with high-quality materials." 
          img1={ss3} 
          img2={ss4} 
        />
      </div>
        <p id="hyperlink" style={{ fontSize: '12px' }}>
          Visit  
          <a href="https://www.facebook.com/cvroofing970/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'blue', textDecoration: 'underline' }}
          title="Go to https://www.facebook.com/cvroofing970/">
            CV Roofing Facebook 
          </a> 
          for more information.
        </p>

      </div>
  );
}

export default Home;
