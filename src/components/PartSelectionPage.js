import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Part.css'

function PartSelectionPage() {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState([]);

  const productList = [
    { id: 'head', name: 'Head', image: './image/head.png' },
    { id: 'body', name: 'Body', image: './image/body.png' },
    { id: 'lefthand', name: 'LeftHand', image: './image/lefthand.png' },
    { id: 'righthand', name: 'RightHand', image: './image/righthand.png' },
   
    { id: 'leftpalm', name: 'LeftPalm', image: './image/leftpalm.png' },
    { id: 'rightpalm', name: 'RightPalm', image: './image/rightpalm.png' },
    { id: 'leftleg', name: 'Leftleg', image: './image/leftleg.png' },
    { id: 'rightleg', name: 'RightLeg', image: './image/rightleg.png' },
    { id: 'leftheel', name: 'LeftHeel', image: './image/leftheel.png' },
    { id: 'rightheel', name: 'rightHell', image: './image/rightheel.png' },

    // Add more parts
  ];

  const handleSelectPart = (partId) => {
    if (selectedPart.includes(partId)) {
      setSelectedPart(selectedPart.filter((id) => id !== partId));
    } else {
      setSelectedPart([...selectedPart, partId]);
    }
  };

  const handleNext = () => {
    navigate('/assembly', { state: { selectedPart: selectedPart } });
  };
  const handleback=()=>{
      navigate('/')
  }

  return (
    <>
      <h2>Select part</h2>
      <div className="part-list">
        {productList.map((part) => (
          <div className="part-item" key={part.id}>
            <img src={part.image} alt={part.name} />
            <label>
              <input
                type="checkbox"
                checked={selectedPart.includes(part.id)}
                onChange={() => handleSelectPart(part.id)}
              />
              {part.name}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleback}>back</button>
      <Link to="/assembly"  state={{ selectedPart: selectedPart }}>
        <button onClick={handleNext}>next</button>
      </Link>
      
    </>
  );
}

export default PartSelectionPage;
