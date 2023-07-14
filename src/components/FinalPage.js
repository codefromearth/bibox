import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FinalPage.css'; // Import the CSS file

const FinalPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const basket = location.state?.basket || [];

  return (
    <>
      <h2>Final Product</h2>
      <div className="final-product">
        {basket.map((part) => (
          <div key={part.id} className="part">
            <img src={`./image/${part.image}.png`} alt={part.name} />
            <p>{part.name}</p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/')}>Start Again</button>
    </>
  );
};

export default FinalPage;
