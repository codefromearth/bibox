import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PartCard } from './PartCard';
import './Assembly.css';

function AssemblyPage() {
  const navigate = useNavigate();
  const [basket, setBasket] = useState([]);
  const location = useLocation();
  const selectedPart = location.state?.selectedPart || [];

  const [{ isOver }, dropRef] = useDrop({
    accept: 'part',
    drop: (item) => {
      setBasket((basket) => {
        return !basket.includes(item) ? [...basket, item] : basket;
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleNext = () => {
    navigate('/finalpage', { state: { basket: basket } });
  };

  const handleBack = () => {
    navigate('/parts');
  };

  return (
    <div>
      <h2>Assemble Product</h2>
      <div className="part-panel">
        <h3>Selected Parts</h3>
        <div className="selected-parts">
          {selectedPart.map((partId) => (
            <PartCard key={partId} partId={partId} image={partId} />
          ))}
        </div>
      </div>
      <div className="assemble-area" ref={dropRef}>
        <h3>Assemble Area</h3>
        <div className={`basket ${isOver ? 'is-over' : ''}`}>
          {basket.map((part) => (
            <PartCard key={part.partId} partId={part.partId} image={part.image} />
          ))}
          {isOver && <div>Drop Here!</div>}
        </div>
      </div>
      <button onClick={handleBack}>back</button>
      <Link to="/finalpage" state={{ basket: basket }}>
        <button onClick={handleNext}>Next</button>
      </Link>
      
       
      
    </div>
  );
}

export default AssemblyPage;
