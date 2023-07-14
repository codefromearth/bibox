// PartCard.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

export const PartCard = ({ partId, image }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'part',
    item: { partId, image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className='part-card' ref={dragRef}>
      <img src={`./image/${image}.png`} alt={partId} />
      {isDragging && <p>Dragging is in progress...</p>}
    </div>
  );
};
