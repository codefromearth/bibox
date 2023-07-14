import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Discripton.css'
function DiscriptionPage() {
  const navigate=useNavigate();

  const startButtonClicked = () => {
    navigate('/parts');
  };

  return (
    <>
      <div className='container'>Discription!</div>
      <img src="./image/wholebody.png" alt="wholebody" />
      <button onClick={startButtonClicked}>Start</button>
    </>
  );
}

export default DiscriptionPage;
