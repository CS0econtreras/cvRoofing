import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div>
      <h1>Welcome to CV Roofing</h1>
      <p>We provide the best roofing services.</p>
      <div className="services">
        <ServiceCard title="Roof Repair" description="We fix all types of roof damages." />
        <ServiceCard title="New Roof Installation" description="We install new roofs with high-quality materials." />
      </div>
    </div>
  );
}

export default Home;
