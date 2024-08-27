import React from 'react';
import Button from './Button/Button';

export default function Banner() {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        borderRadius: '6px',
        overflow: 'hidden',
        margin: '0 auto',
        width: '1473px', 
        height: '454px', 
      }}
    >
      <img
        src="/content1.png"
        alt="Banner Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <Button
          props={{
            color: '#ffcc00',
            padding: '15px 30px',
            textColor: '#fff',
            title: 'REGISTER NOW',
          }}
        />
      </div>
    </div>
  );
}