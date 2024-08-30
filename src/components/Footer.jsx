import React from 'react';

const Footer = () => {
  return (
    <footer 
      style={{ 
        backgroundColor: '#333',  
        color: '#fff',  
        padding: '20px 40px',  
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="WebSprix Logo" style={{ width: '383px', height: '264px', marginRight: '20px' }} />
      </div>
      <div style={{ 
        backgroundColor: '#FFFFFF',  
        padding: '20px', 
        borderRadius: '5px', 
        color: '#000000',  
        width: '903px',  
        height: '200px',
        display: 'flex',  
        justifyContent: 'space-between',  
      }}>
        <div>
          <h4 style={{ 
            marginBottom: '5px', 
            position: 'relative',
            borderBottom: '2px solid #FCE207', 
            display: 'inline-block', 
            paddingBottom: '5px',
            paddingBottom: '5px',
            color: '#000000',  
          }}>
            GET IN TOUCH WITH US

            </h4>
          <p style={{ margin: '5px 0' }}>8856</p>
          <p style={{ margin: '5px 0' }}>info@websprix.com</p>
          <p style={{ margin: '5px 0' }}>Tito St, Kazanchis Addis Ababa, Ethiopia</p>
        </div>
        <div>
          <h5 style={{ marginTop: '15px', color: '#fff' }}>Direct Lines</h5>
          <p style={{ margin: '5px 0' }}>+251 115 181901 (Sales)</p>
          <p style={{ margin: '5px 0' }}>+251 115 181902 (Billing and Finance)</p>
          <p style={{ margin: '5px 0' }}>+251 115 181903 (Customer Service)</p>
          <p style={{ margin: '5px 0' }}>+251 901 586658 (Telegram Only)</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
