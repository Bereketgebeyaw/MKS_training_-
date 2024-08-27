import React from 'react';
import Button from './Button/Button';

const Plan = ({ speed, price, details }) => (
    <div 
      className="plan" 
      style={{ 
        padding: '20px', 
        border: '1px solid #ddd', 
        margin: '10px', 
        borderRadius: '5px', 
        textAlign: 'center', 
        width: '427PX', 
        backgroundColor: '#FFFFFF'  
      }}
    >
      <h3>{speed} Mb/s</h3>
      <p style={{ marginBottom: '20px', fontSize: '14px', lineHeight: '1.5' }}>{details}</p>
      <p style={{ fontWeight: 'bold', fontSize: '24px' }}>{price} (ETB)/mo</p>
      <Button 
      props={{
        title: "ORDER NOW", 
        color: "#FCE207", 
        padding: "10px 20px", 
        textColor: "white",
        borderRadius: "6px", 
        style: {
          fontWeight: "bold",
          width: '100%', 
        }
      }} 
    />
    </div>
  );
  
  export default Plan;