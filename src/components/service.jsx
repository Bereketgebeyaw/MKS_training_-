import React from 'react';

const Service = ({ title, description }) => (
  <div 
    className="service" 
    style={{ 
      padding: '20px', 
      textAlign: 'center',
      width: '324px',  
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: 'white',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
    }}
  >
    <h3 style={{ marginBottom: '10px' }}>{title}</h3>
    <p style={{ marginBottom: '20px', fontSize: '14px', lineHeight: '1.5' }}>{description}</p>
    <a href="#" style={{ color: '#FCE207', fontWeight: 'bold', textDecoration: 'none' }}>
      Read more
    </a>
  </div>
);

export default Service;
